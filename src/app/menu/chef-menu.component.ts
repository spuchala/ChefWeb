import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { OrderComponent } from '../orders/order.component';
import { OrdersService } from '../services/orders.service';
import { MenuService } from '../services/menu.service';
import { MenuItemEditComponent } from '../menu-item-edit/menu-item-edit.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChefStorageService } from '../services/storage.service';

@Component({
  selector: 'app-chef-menu',
  templateUrl: './chef-menu.component.html',
  styleUrls: ['./chef-menu.component.css'],
  providers: [MenuService]
})
export class ChefMenuComponent implements OnInit {

  @Input() chefId: number;
  @Input() chefName: string;
  @Input() mode: string;
  @Input() refresh: Array<boolean>;
  menu: Array<any>;
  orderData: any;
  constructor(private _menuService: MenuService, private _ordersService: OrdersService,
    public orderDialog: MatDialog, private _snackBar: MatSnackBar,
    public menuItemEditDialog: MatDialog, private _storage: ChefStorageService) { }

  ngOnInit() {
    this.getMenu();
  }

  ngOnChanges() {
    this.getMenu();
  }

  getMenu() {
    this._menuService.getChefMenu(this.chefId)
      .subscribe(suc => {
        this.menu = suc.response["menu"];
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  openOrder(menuItem: any) {
    let dialogRef = this.orderDialog.open(OrderComponent, {
      width: '400px',
      data: { chefId: this.chefId, menuItem: menuItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.orderData = result;
        this.orderData.chefName = this.chefName;
        var userId = this._storage.getItem("authorizationData", "userId");
        if (userId) {
          this._ordersService.addOrderToCustomerCart(userId, this.orderData)
            .subscribe(suc => {
              this.orderData.id = suc.res["id"];
              this._ordersService.createOrder(this.orderData);
            },
              err => {
                this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
              });
        }
        else
          this._ordersService.createOrder(this.orderData);
        menuItem.disabled = true;
      }
    });
  }

  editMenuItem(menuItem: any) {
    let dialogRef = this.menuItemEditDialog.open(MenuItemEditComponent, {
      width: '400px',
      data: {
        title: menuItem.title, description: menuItem.description,
        spiceLevel: menuItem.spiceLevel, price: menuItem.price,
        id: menuItem.id
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      menuItem = result;
      this.editMenuItemSubscribe(menuItem);
    });
  }

  editMenuItemSubscribe(menuItem) {
    this._menuService.editMenuItem(menuItem)
      .subscribe(suc => {
        let menuItemIndex = this.menu.findIndex((item => item.id == menuItem.id));
        this.menu[menuItemIndex] = menuItem;
        this._snackBar.open("Menu updated.", "Dismiss");
      },
        err => {
          this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
        });
  }

  removeMenuItem(menuItem: any) {
    this._menuService.removeMenuItem(menuItem)
      .subscribe(suc => {
        let menuItemIndex = this.menu.findIndex((item => item.id == menuItem.id));
        this.menu.splice(menuItemIndex, 1);
        this._snackBar.open("Menu updated.", "Dismiss");
      },
        err => {
          this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
        });
  }
}
