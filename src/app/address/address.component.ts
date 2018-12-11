import { Component, OnInit, Input } from '@angular/core';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [StatesService]
})
export class AddressComponent implements OnInit {

  @Input() user: any;
  states: Array<any>;

  constructor(private _statesService: StatesService) { }

  ngOnInit() {
    this.states = this._statesService.getStates();
  }
}
