import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginOrRegisterComponent>,
    private router: Router, private _loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  redirectClick() {
    this._loginService.returnUrl = this.router.url;
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
