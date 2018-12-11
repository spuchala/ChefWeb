import { Component, OnInit, Input } from '@angular/core';
import { ChefService } from '../services/chef.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chef-preferences',
  templateUrl: './chef-preferences.component.html',
  styleUrls: ['./chef-preferences.component.css']
})
export class ChefPreferencesComponent implements OnInit {

  @Input() chefId: number;
  @Input() mode: string;
  chefPreferences: any;

  constructor(private _chefService: ChefService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getChefPreferences();
  }

  getChefPreferences() {
    this._chefService.getChefPreferences(this.chefId)
      .subscribe(suc => {
        this.chefPreferences = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");          
        });
  }

  updateChefPreferences(chefPreference: any, index) {
    this._chefService.updateChefPreference(chefPreference)
      .subscribe(suc => {
        chefPreference.Answer = !chefPreference.Answer;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");          
        });
  }
}
