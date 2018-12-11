import { Component, OnInit } from '@angular/core';
import { ChefStorageService } from '../services/storage.service';
import { CustomerService } from '../services/customer.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { IConnectionOptions, SignalR, BroadcastEventListener, SignalRConnection } from 'ng2-signalr';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
  providers: [CustomerService]
})

export class CheckOutComponent implements OnInit {
  mode: string;
  constructor(private _storage: ChefStorageService,
    private _custService: CustomerService, private _snackBar: MatSnackBar,
    private _location: Location, private _ordersService: OrdersService,
    private _router: Router, private _signalR: SignalR) {
    this.user = {
      address: {},
      city: "",
      state: "",
      zipCode: "",
      email: "",
      phone: ""
    };
  }
  user: any;
  private _connection: SignalRConnection;

  ngOnInit() {
    this.mode = "checkOut";
    this.getCustomerAddress();
  }

  cancel() {
    this._location.back();
  }

  checkOut() {
    this._ordersService.checkOutOrders(this._ordersService.orders)
      .subscribe(suc => {
        var confirmationId = suc.res;        
        this._ordersService.orders = null;
        this._router.navigateByUrl('/confirmation/' + confirmationId);
      },
        err => {
          this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
        });
  }

  startNotifyConnecForCustomer() {
    let options: IConnectionOptions = { hubName: "customerNotificationHub", qs: { access_token: this._storage.getItem("authorizationData", "access_token") } };
    this._connection = this._signalR.createConnection(options);
    this._signalR.connect(options).then((c) => console.log("Connected"));
  }

  getCustomerAddress() {
    if (this._storage.isUserLoggedIn()) {
      var userId = this._storage.getItem("authorizationData", "userId");
      this._custService.getCustomerAccount(userId)
        .subscribe(suc => {
          this.user = suc.response;
        },
          err => {
            this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
          });
    }
  }
}
