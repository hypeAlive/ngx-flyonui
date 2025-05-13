import { Component } from '@angular/core';
import {FlyOnUiButtonComponent} from 'ngx-flyonui/button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FlyOnUiButtonComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
  protected on: boolean = true;
  protected off: boolean = false;

  protected toggle() {
    this.on = !this.on;
  }

  protected toggle2() {
    this.off = !this.off;
  }
}
