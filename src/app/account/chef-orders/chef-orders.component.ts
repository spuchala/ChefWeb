import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConversationService } from '../../services/conversation.service';
import { ConverseComponent } from '../../conversations/converse.component';

@Component({
  selector: 'app-chef-orders',
  templateUrl: './chef-orders.component.html',
  styleUrls: ['./chef-orders.component.css']
})
export class ChefOrdersComponent implements OnInit {

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
    this.userType = "Chef";
    this.getCustomerOrdersForChefInQueue();
  }

  onTabChange(tab) {
    switch (tab.tab.textLabel) {
      case "In Queue":
        this.getCustomerOrdersForChefInQueue();
        break;
      case "In Process":
        this.getCustomerOrdersForChefInProcess();
        break;
      case "Completed":
        this.getCustomerOrdersForChefCompleted();
        break;
      case "Deleted":
        this.getRejectedCustomerOrdersForChef();
        break;
      default:
        break;
    }
  }

  getCustomerOrdersForChefInQueue() {
    this.mode = null;
    this._ordersService.getCustomerOrdersForChefInQueue()
      .subscribe(suc => {
        this.batchOrdersInQueue = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getCustomerOrdersForChefInProcess() {
    this.mode = "readOnly";
    this._ordersService.getCustomerOrdersForChefInProcess()
      .subscribe(suc => {
        this.batchOrdersInProcess = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getCustomerOrdersForChefCompleted() {
    this.mode = "readOnly";
    this._ordersService.getCustomerOrdersForChefCompleted()
      .subscribe(suc => {
        this.batchOrdersCompleted = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");
        });
  }

  getRejectedCustomerOrdersForChef() {
    this.mode = "readOnly";
    this._ordersService.getRejectedCustomerOrdersForChef()
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
