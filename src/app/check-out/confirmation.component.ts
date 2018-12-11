import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  subscription: Subscription;
  confirmationNbr: String;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this._activatedRoute.params.subscribe((params: Params) => {
      this.confirmationNbr = params['confirmationNbr'];
    });
  }

}
