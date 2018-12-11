import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { ChefStorageService } from '../services/storage.service';
import { ChefService } from '../services/chef.service';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../services/login.service';
import { IConnectionOptions, SignalR, BroadcastEventListener, SignalRConnection } from 'ng2-signalr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ChefService]
})
export class LoginComponent implements OnInit {

  subscription: Subscription;
  user: any;
  message: string;
  private _connection: SignalRConnection;

  constructor(private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, private _authService: AuthService, private _chefService: ChefService,
    private _router: Router, private changeDetector: ChangeDetectorRef,
    private _storage: ChefStorageService, private _signalR: SignalR,
    private _notificationService: NotificationService,
    private _loginService: LoginService) {
    this.user = {};
  }

  ngOnInit() {
    this.subscription = this._activatedRoute.params.subscribe((params: Params) => setTimeout(() => {
      let message = params['messageId'];
      this.message = message;
      if (this.message === "1") {
        this._snackBar.open("An acount is created with your emailId. Please make sure to login and create a menu, add your preferences.", "Dismiss");
      }
      else if (this.message === "2") {
        this._snackBar.open("An acount is created with your emailId. Please make sure to login.", "Dismiss");
      }
    }, 0));
  }

  login() {
    this._authService.login(this.user)
      .subscribe(suc => {
        this._storage.setItem('authorizationData', JSON.stringify(suc));
        if (this._loginService.returnUrl && this._loginService.returnUrl != "") {
          this._router.navigateByUrl(this._loginService.returnUrl);
        }
        else {
          var role = this._storage.getItem("authorizationData", "userRole");
          if (role === "Chef") {
            this._chefService.isChefProfileComplete()
              .subscribe(suc => {
                if (suc) {
                  this.startNotifyConnecForChef();
                  this._router.navigateByUrl("/account/orders");
                }
                else
                  this._router.navigateByUrl("/account");
              },
                err => {
                  this._snackBar.open("Something went wrong! Sorry", "Dismiss");
                });
          } else if (role === "Customer") {
            this._router.navigateByUrl("/account");
          }
        }
      },
        err => {
          this._snackBar.open("Email or password is wrong.", "Dismiss");
        });
  }

  startNotifyConnecForChef() {
    let options: IConnectionOptions = { hubName: "chefNotificationHub", qs: { access_token: this._storage.getItem("authorizationData", "access_token") } };
    // this._connection = this._signalR.createConnection(options);
    // this._connection.start().then((c) => {
    //   this.listenForNotification();
    // });
    this._notificationService.connection = this._signalR.createConnection(options);
    this._notificationService.connection.start().then((c) => {
      this.listenForNotification();
    });
  }

  listenForNotification() {
    let onMessageSent$ = new BroadcastEventListener<any>('notifyChef');
    //this._connection.listen(onMessageSent$);
    this._notificationService.connection.listen(onMessageSent$);
    onMessageSent$.subscribe((notification: any) => {
      console.log(notification);
      this._snackBar.open(notification, "Dismiss");
    });
  }
}
