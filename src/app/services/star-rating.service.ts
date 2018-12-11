import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarRatingService {
  public starCount: number;
  public starColor: string;

  constructor() {
    this.starColor = "accent";
    this.starCount = 5;
  }
}
