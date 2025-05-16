import { Component } from '@angular/core';
import {FlyOnUiButtonComponent} from 'ngx-flyonui/button';
import {NgClass} from '@angular/common';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {heroUser} from '@ng-icons/heroicons/outline';
import {FlyonUiIconComponent, FlyonuiSpinnerComponent} from 'ngx-flyonui/icon';

@Component({
  selector: 'app-root',
  imports: [
    FlyOnUiButtonComponent,
    FlyonuiSpinnerComponent,
    FlyonUiIconComponent,
    NgClass
  ],
  viewProviders: [provideIcons({heroUser})],
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

  protected readonly heroUser = heroUser;
}
