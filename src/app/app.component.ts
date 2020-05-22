import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  public raiting: number;

  constructor() {
    this.raiting = 0;
  }

  public setRating(rat) {
    this.raiting = rat;
  }
}
