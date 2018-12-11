import { Component, OnInit } from '@angular/core';
import { ChefStorageService } from '../services/storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ChefStorageService]
})
export class OrdersComponent implements OnInit {

  role: string;

  constructor(private _storage: ChefStorageService) {
  }

  ngOnInit() {
    this.role = this._storage.getItem("authorizationData", "userRole");
  }
}
