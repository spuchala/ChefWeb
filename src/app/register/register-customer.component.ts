import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  userType: string;
  disabled: boolean;
  mode: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.userType = "customer";
    this.disabled = false;
    this.mode = "register";
  }

  onRegistered(success: boolean) {
    if (success)
      this._router.navigateByUrl("/login/2");
  }

}
