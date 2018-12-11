import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatesService } from '../services/states.service';
import { ChefService } from '../services/chef.service';
import { CustomerService } from '../services/customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [StatesService, ChefService, CustomerService]
})
export class RegisterUserComponent implements OnInit {

  states: Array<any>;
  @Input() user: any;
  @Input() userType: string;
  @Input() disabled: boolean;
  @Input() mode: string;
  @Output() onRegistered = new EventEmitter<boolean>();

  constructor(private _statesService: StatesService, private _chefService: ChefService,
    private _snackBar: MatSnackBar, private _custService: CustomerService) {
    this.user = {};
  }

  ngOnInit() {
    this.states = this._statesService.getStates();
  }

  register() {
    this.user.role = { name: this.userType };
    if (this.userType.toLowerCase() === "chef") {
      this._chefService.createChef(this.user)
        .subscribe(suc => {
          this.onRegistered.emit(true);
        },
          err => {
            this._snackBar.open(err.Errors.error.error, "Dismiss");            
          });
    }
    else if (this.userType.toLowerCase() === "customer") {
      this._custService.createCustomer(this.user)
        .subscribe(suc => {          
          this.onRegistered.emit(true);
        },
          err => {
            this._snackBar.open("Something went wrong. Please try again.", "Dismiss");            
          });
    }
  }

  save() {
    this.user.role = { name: this.userType };
    if (this.userType.toLowerCase() === "chef") {
      this._chefService.updateChef(this.user)
        .subscribe(suc => {
          this.disabled = true;
          this._snackBar.open("Account details saved.", "Dismiss");
        },
          err => {
            this._snackBar.open("Something went wrong. Please try again.", "Dismiss");            
          });
    }
    else if (this.userType.toLowerCase() === "customer") {
      this._custService.updateCustomer(this.user)
        .subscribe(suc => {
          this.disabled = true;
          this._snackBar.open("Account details saved.", "Dismiss");
        },
          err => {
            this._snackBar.open("Something went wrong. Please try again.", "Dismiss");            
          });
    }
  }
}
