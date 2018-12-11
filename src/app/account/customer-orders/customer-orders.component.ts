import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConversationService } from '../../services/conversation.service';
import { ConverseComponent } from '../../conversations/converse.component';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  batchOrdersInQueue: any;
  batchOrdersInProcess: any;
  batchOrdersCompleted: any;
  deletedOrders: any;

  @Input()
  userType: string;
  mode: string;

  constructor(private _ordersService: OrdersService,
    private _snackBar: MatSnackBar, private _convService: ConversationService,
    private orderDialog: MatDialog) { }

  ngOnInit() {
    this.mode = "readOnly";
    this.userType = "Customer";
    this.getCustomerOrdersInQueue();
  }

  onTabChange(tab) {
    switch (tab.tab.textLabel) {
      case "In Queue":
        this.getCustomerOrdersInQueue();
        break;
      case "In Process":
        this.getCustomerOrdersInProcess();
        break;
      case "Completed":
        this.getCustomerOrdersCompleted();
        break;
      case "Rejected":
        this.getRejectedCustomerOrders();
        break;
      default:
        break;
    }
  }

  getCustomerOrdersInQueue() {
    this._ordersService.getCustomerOrdersInQueue()
      .subscribe(suc => {
        this.batchOrdersInQueue = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getCustomerOrdersInProcess() {
    this._ordersService.getCustomerOrdersInProcess()
      .subscribe(suc => {
        this.batchOrdersInProcess = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getCustomerOrdersCompleted() {
    this._ordersService.getCustomerOrdersCompleted()
      .subscribe(suc => {
        this.batchOrdersCompleted = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getRejectedCustomerOrders() {
    this._ordersService.getRejectedCustomerOrders()
      .subscribe(suc => {
        this.deletedOrders = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getOrderRejectedComment(orderId: number) {
    this._convService.getRejectedOrderComment(orderId)
      .subscribe(suc => {
        var data = suc.response["message"];
        this.displayOrderRejectedReason(data);
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  displayOrderRejectedReason(message: string) {
    let dialogRef = this.orderDialog.open(ConverseComponent, {
      width: '600px',
      data: { comments: message, mode: "readOnly", heading: "Reason for Rejection", submitButtonText: "Reject" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

}
