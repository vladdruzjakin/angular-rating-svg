import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss']
})
export class RaitingComponent implements OnInit, OnChanges  {
  @Input() raiting: number;
  @ViewChild('ratingElement') ratingElement: ElementRef;
  public textRating: number;

  constructor() {
    this.textRating = 0;
  }

  ngOnInit() {
    this.calcRating();
  }
  ngOnChanges() {
    this.calcRating();
  }

  public calcRating():void {
    const calcRating = +this.raiting * 10 * 2;
    this.textRating = +this.raiting;
    this.ratingElement.nativeElement.style.width = `${calcRating}%`
  }
}