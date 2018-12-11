import { Component, OnInit } from '@angular/core';
import { ChefService } from '../services/chef.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MenuService } from '../services/menu.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.component.html',
  styleUrls: ['./chef-details.component.css'],
  providers: [ChefService, MenuService]
})
export class ChefDetailsComponent implements OnInit {

  subscription: Subscription;
  chefDetails: any;
  chefId: any;
  chefName: string;
  menuMode: string;
  constructor(private _activatedRoute: ActivatedRoute, private _chefService: ChefService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription = this._activatedRoute.params.subscribe((params: Params) => {
      this.chefId = params['chefId'];
      this.menuMode = "order";
    });
    this.getChefDetails(this.chefId);
  }

  getChefDetails(chefId: number) {
    this._chefService.getChefDetails(chefId)
      .subscribe(suc => {
        this.chefDetails = suc.response;
        this.chefName = this.chefDetails.firstName + " " + this.chefDetails.lastName;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
