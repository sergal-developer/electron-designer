import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './main/main.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainModule
  ],
  template: '<router-outlet />',
})
export class AppComponent {
  title = 'designer';
}
