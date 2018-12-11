import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  minDate = new Date();
  addButtonTitle: string;

  constructor(public dialogRef: MatDialogRef<OrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (!this.data.quantity || this.data.quantity === 0)
      this.data.quantity = 1;
    this.addButtonTitle = this.data.mode === "edit" ? "Save" : "Add To Cart";
  }

  whenToOrder(event: MatDatepickerInputEvent<Date>) {
    this.data.when = event.value;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
