import { Injectable } from '@angular/core';
import { StatesData } from '../dummyData/states';

@Injectable()
export class StatesService {

  private statesData: StatesData = new StatesData();

  constructor() { }

  getStates() {
    return this.statesData.states;
  }

}
