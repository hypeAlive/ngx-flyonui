import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxFlyonuiService } from 'ngx-flyonui'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  flyonuiService = inject(NgxFlyonuiService);
  title = 'flyonui-demo';
}
