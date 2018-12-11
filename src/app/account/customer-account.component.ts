import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css'],
  providers: [CustomerService]
})
export class CustomerAccountComponent implements OnInit {

  disabled: boolean;
  mode: string;
  user: any;
  @Input() userType: string;
  @Input() userId: string;
  @Input() chefId: number;

  constructor(private _custService: CustomerService, private _snackBar: MatSnackBar) {
    this.user = {};
  }

  ngOnInit() {
    this.disabled = true;
    this.mode = "edit";
    this.getCustomerAccount();
  }

  getCustomerAccount() {
    this._custService.getCustomerAccount(this.userId)
      .subscribe(suc => {
        this.user = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");          
        });
  }

}
