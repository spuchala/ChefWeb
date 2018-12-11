import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ChefService } from '../services/chef.service';
import { Location } from '@angular/common';
import { OrderComponent } from '../orders/order.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ChefStorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { LoginOrRegisterComponent } from '../login-or-register/login-or-register.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ChefService]
})
export class CartComponent implements OnInit {

  @Input() mode: string;
  orders: Array<any>;
  constructor(private _ordersService: OrdersService,
    private _chefService: ChefService,
    private _location: Location, public popUpDialog: MatDialog,
    private _storage: ChefStorageService, private _snackBar: MatSnackBar,
    private _router: Router) { }

  ngOnInit() {
    this.orders = this._ordersService.getOrders();
  }

  getTotalPrice() {
    var total = 0.00;
    this.orders.forEach(function (order) {
      total += parseFloat(order.menuItem.price);
    });
    return total;
  }

  cancel() {
    this._location.back();
  }

  checkOut() {
    if (this._storage.isUserLoggedIn())
      this._router.navigateByUrl('/checkOut');
    else {
      this.loginOrRegsiter();
    }
  }

  loginOrRegsiter() {
    let dialogRef = this.popUpDialog.open(LoginOrRegisterComponent, {
      width: '300px',
      data: {}
    });
  }

  editOrder(order: any) {
    order.mode = "edit";
    let dialogRef = this.popUpDialog.open(OrderComponent, {
      width: '400px',
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        order = result;
        var userId = this._storage.getItem("authorizationData", "userId");
        if (userId) {
          this._ordersService.updateOrderInCustomerCart(userId, order)
            .subscribe(suc => {
            },
              err => {
                this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
              });
        }
      }
    });
  }

  removeOrder(order: any) {
    this.orders = this._ordersService.removeOrder(order.id);
    var userId = this._storage.getItem("authorizationData", "userId");
    if (userId) {
      this._ordersService.removeOrderFromCustomerCart(userId, order)
        .subscribe(suc => {
        },
          err => {
            this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
          });
    }
    if (this.orders.length === 0) {
      this._location.back();
    }
  }
}
