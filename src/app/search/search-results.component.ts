import { Component, OnInit } from '@angular/core';
import { ChefService } from '../services/chef.service';
import { ChefsComponent } from '../chef/chefs.component';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [ChefService]
})
export class SearchResultsComponent implements OnInit {

  chefs: any;
  showChefs: boolean;
  subscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute, public _chefService: ChefService,
    public _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription = this._activatedRoute.params.subscribe((params: Params) => {
      let what = params['what'];
      let where = params['where'];

      this.getChefs(what, where);
    });
  }

  getChefs(what: string, where: string) {
    this._chefService.getChefs(what, where)
      .subscribe(suc => {
        this.chefs = suc.response;
        if (this.chefs != null && this.chefs.length > 0)
          this.showChefs = true;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");          
        });
  }
}
