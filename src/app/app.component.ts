import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchComponent } from './search/search.component';
import { ChefsComponent } from './chef/chefs.component';
import { Router } from '@angular/router';
import { OrdersService } from './services/orders.service';
import { AuthService } from './services/auth.service';
import { ChefStorageService } from './services/storage.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrdersService, AuthService, ChefStorageService]
})
export class AppComponent {
  title = 'Chef';
  what: string;
  where: string;
  searchQuery: any;

  constructor(public searchDialog: MatDialog, private router: Router,
    private _ordersService: OrdersService, private _authService: AuthService,
    private _storage: ChefStorageService, private _notificationService: NotificationService) {
  }

  ngOnInit() {

  }

  isUserAuthenticated() {
    return this._storage.getStorage("authorizationData");
  }

  isSearchAvailable() {
    var authData = this._storage.getStorage("authorizationData");
    if (authData) {
      var role = this._storage.getItem("authorizationData", "userRole");
      if (role && role.toLowerCase() === "chef")
        return false;
      if (role && role.toLowerCase() === "customer")
        return true;
    }
    return true;
  }

  logOut() {
    var role = this._storage.getItem("authorizationData", "userRole");
    if (role && role.toLowerCase() === "chef") {
      this._notificationService.connection.stop();
    }
    this._storage.logOutUser();
    this._ordersService.orders = null;
    this.router.navigateByUrl('/');
  }

  getOrdersInCartCount() {
    return this._ordersService.getOrdersCount();
  }

  openSearch() {
    let dialogRef = this.searchDialog.open(SearchComponent, {
      width: '400px',
      data: { what: this.what, where: this.where }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.searchQuery = result;
      if (this.searchQuery && this.searchQuery.what && this.searchQuery.where)
        this.router.navigateByUrl('/searchResults/' + this.searchQuery.what + '/' + this.searchQuery.where);
    });
  }
}
