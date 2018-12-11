import { Component, OnInit, Input } from '@angular/core';
import { ChefService } from '../../services/chef.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chef-comments',
  templateUrl: './chef-comments.component.html',
  styleUrls: ['./chef-comments.component.css']
})
export class ChefCommentsComponent implements OnInit {

  @Input() chefId: number;
  @Input() mode: string;
  @Input() refresh: Array<boolean>;
  comments: any;

  constructor(private _chefService: ChefService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getComments();
  }

  ngOnChanges() {
    this.getComments();
  }

  getComments() {
    this._chefService.getChefComments(this.chefId)
      .subscribe(suc => {
        this.comments = suc.response;
      },
      err => {
        this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");        
      });
  }

  editComment(comment: any) {

  }

  removeComment(comment: any, index: number) {
    this._chefService.removeChefComment(comment)
      .subscribe(suc => {
        this.comments.splice(index, 1);
      },
      err => {
        this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");        
      });
  }
}
