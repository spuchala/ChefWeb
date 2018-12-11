import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChefAccountComponent } from './chef-account.component';
import { CustomerAccountComponent } from './customer-account.component';
import { ChefStorageService } from '../services/storage.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ChefStorageService]
})
export class AccountComponent implements OnInit {

  user: any;

  constructor(private _authService: AuthService, private _storage: ChefStorageService,
    private _snackBar: MatSnackBar) { }

  private userId: any;
  private id: number;
  private role: any;
  ngOnInit() {
    this.userId = this._storage.getItem("authorizationData", "userId");
    this.id = this._storage.getItem("authorizationData", "id");
    this.role = this._storage.getItem("authorizationData", "userRole");
  }
}
