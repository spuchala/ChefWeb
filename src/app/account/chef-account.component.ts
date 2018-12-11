import { Component, OnInit, Input } from '@angular/core';
import { ChefService } from '../services/chef.service';
import { MatSnackBar } from '@angular/material';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-chef-account',
  templateUrl: './chef-account.component.html',
  styleUrls: ['./chef-account.component.css'],
  providers: [ChefService, MenuService]
})
export class ChefAccountComponent implements OnInit {

  disabled: boolean;
  mode: string;
  @Input() userType: string;
  @Input() userId: string;
  @Input() chefId: number;
  specialities: any;
  menuItem: any;
  menuItemAdded: Array<boolean>;
  commentsAdded: Array<boolean>;
  menuMode: string;
  preferencesMode: string;
  commentsMode: string;
  user: any;
  commentsData: any;

  constructor(private _chefService: ChefService, private _snackBar: MatSnackBar,
    private _menuService: MenuService) {
    this.user = {};
  }

  ngOnInit() {
    this.disabled = true;
    this.mode = "edit";
    this.menuItem = {};
    this.commentsData = {};
    this.menuMode = "account";
    this.preferencesMode = "account";
    this.commentsMode = "account";
    this.menuItemAdded = [];
    this.commentsAdded = [];

    this.getChefAccount();
  }

  getChefAccount() {
    this._chefService.getChefAccount(this.userId)
      .subscribe(suc => {
        this.user = suc.response;        
      },
      err => {
        this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");        
      });
  }

  getChefSpecialities() {
    if (this.user.id != undefined)
      this._chefService.getChefSpecialities(this.user.id)
        .subscribe(suc => {
          this.specialities = suc.response;
        },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");          
        });
  }

  addMenuItem() {
    this._menuService.addMenuItem(this.menuItem)
      .subscribe(suc => {
        this.menuItemAdded = [true];
        this.menuItem = {};
        this._snackBar.open("Menu updated.", "Dismiss");
      },
      err => {
        this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
      });
  }

  addComment() {
    this._chefService.addChefComment(this.commentsData)
      .subscribe(suc => {
        this.commentsAdded = [true];
        this.commentsData = {};
        this._snackBar.open("Comments added.", "Dismiss");
      },
      err => {
        this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
      });
  }
}
