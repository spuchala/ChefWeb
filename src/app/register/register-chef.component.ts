import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserComponent } from './register-user.component';

@Component({
  selector: 'app-register-chef',
  templateUrl: './register-chef.component.html',
  styleUrls: ['./register-chef.component.css']
})
export class RegisterChefComponent implements OnInit {
  states: Array<any>;
  userType: string;
  disabled: boolean;
  mode: string;

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.userType = "chef";
    this.disabled = false;
    this.mode = "register";
  }

  onRegistered(success: boolean) {
    if (success)
      this._router.navigateByUrl("/login/1");
  }
}
