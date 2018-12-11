import { Component, OnInit, Input } from '@angular/core';
import { ChefComponent } from './chef.component';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  @Input() chefs: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
