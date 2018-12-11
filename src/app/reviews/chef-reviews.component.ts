import { Component, OnInit, Input } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chef-reviews',
  templateUrl: './chef-reviews.component.html',
  styleUrls: ['./chef-reviews.component.css'],
  providers: [ReviewsService]
})
export class ChefReviewsComponent implements OnInit {
  reviews: any;
  @Input() chefId: number;
  constructor(private _reviewsService: ReviewsService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getChefReviews(this.chefId);
  }

  getChefReviews(chefId: number) {
    this._reviewsService.getChefReviews(chefId)
      .subscribe(suc => {
        this.reviews = suc.response;
      },
        err => {
          this._snackBar.open("Something went wrong.Sorry! Please try again.", "Dismiss");          
        });
  }
}
