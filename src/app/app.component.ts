import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
title = 'MatCurrencyFormatLibrary';
  zarAmount = 100;
  updateUSAmount(event) {
    this.zarAmount = event.target.value;
  }

}
