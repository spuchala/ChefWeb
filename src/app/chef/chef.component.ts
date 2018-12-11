import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingService } from '../services/star-rating.service'

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  @Input()
  public chef: any;
  @Input()
  public interactWithChef: boolean;

  public starRating: number;
  public starCount: number;
  public starColor: string;
  public ratingReadOnly: boolean;

  constructor(private router: Router, private _starRatingService: StarRatingService) { }

  ngOnInit() {
    this.starRating = this.chef.rating;
    this.starCount = this._starRatingService.starCount;
    this.starColor = this._starRatingService.starColor;
    this.ratingReadOnly = true;
  }

  showChefDetails() {
    this.router.navigateByUrl('/chefDetails/' + this.chef.id + "/" + this.chef.firstName + " " + this.chef.lastName + "/" + this.chef.city + "/" + this.chef.state);
  }
}
