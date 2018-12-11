import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTable } from '@angular/material';
import { ConverseComponent } from '../conversations/converse.component';
import { OrdersService } from '../services/orders.service';
import { ChefService } from '../services/chef.service';

@Component({
  selector: 'app-batch-orders',
  templateUrl: './batch-orders.component.html',
  styleUrls: ['./batch-orders.component.css'],
  providers: [ChefService]
})
export class BatchOrdersComponent implements OnInit {

  @Input()
  batches: Array<any>;

  @Input()
  mode: string;

  @Input()
  ordersFor: string

  displayedColumns: string[] = ['title', 'when', 'comments', 'spiceLevel', 'price', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public orderDialog: MatDialog,
    private _snackBar: MatSnackBar, private _ordersService: OrdersService, private _chefService: ChefService) {

  }

  ngOnInit() {
    if (this.mode === 'readOnly')
      this.displayedColumns.splice(this.displayedColumns.length - 1, 1);
  }

  deleteOrder(batchId: number, order: any) {
    let dialogRef = this.orderDialog.open(ConverseComponent, {
      width: '600px',
      data: { batchId: batchId, mode: "", orderId: order.id, comments: "", heading: "Reason for Rejection", submitButtonText: "Reject" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._ordersService.rejectCustomerOrder(result.orderId, result.comments)
          .subscribe(suc => {
            for (let batch of this.batches) {
              var index = batch.orders.map(o => o["id"]).indexOf(result.orderId);
              if (index >= 0) {
                batch.orders.splice(index, 1);
                this.table.renderRows();
                break;
              }
            }

            this._snackBar.open("Order Rejected", "Dismiss");
          },
            err => {
              this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
            });
      }
    });
  };

  markBatchOrdersAsViewed(batch: any) {
    if (this.ordersFor === 'Chef')
      this._chefService.markBatchOrdersAsViewed(batch.id)
        .subscribe(suc => {
          batch.state.chefViewed = true;
        },
          err => {
            this._snackBar.open("Sorry! Something went wrong.", "Dismiss");
          });
  }
}


