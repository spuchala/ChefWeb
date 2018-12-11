import { Component, OnInit, Input } from '@angular/core';
import { ChefService } from '../services/chef.service';
import { MatChipInputEvent, MatSnackBar } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-chef-specialities',
  templateUrl: './chef-specialities.component.html',
  styleUrls: ['./chef-specialities.component.css']
})
export class ChefSpecialitiesComponent implements OnInit {

  @Input() chefId: number;
  @Input() disabled: boolean;
  @Input() specialities: any;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];

  constructor(private _chefService: ChefService,
    private _snackBar: MatSnackBar,
    private _menuService: MenuService) { }

  ngOnInit() {
    this.getChefSpecialities();
  }

  getChefSpecialities() {
    this._chefService.getChefSpecialities(this.chefId)
      .subscribe(suc => {
        this.specialities = suc.response;
      },
      err => {
        this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");        
      });
  }

  removeSpeciality(speciality: any): void {
    this._menuService.removeChefSpeciality(speciality)
      .subscribe(suc => {
        this._snackBar.open("Specialities updated.", "Dismiss");
      },
      err => {
        this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
      });

    let index = this.specialities.findIndex((item => item.id == speciality.id));
    if (index >= 0) {
      this.specialities.splice(index, 1);
    }
  }

  addSpeciality(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    if ((value || '').trim()) {
      var speciality = { title: value.trim(), description: value.trim() };
      this._menuService.addChefSpeciality(speciality)
        .subscribe(suc => {
          this._snackBar.open("Specialities updated.", "Dismiss");
        },
        err => {
          this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
        });
      this.specialities.push(speciality);
    }

    if (input) {
      input.value = '';
    }
  }

}
