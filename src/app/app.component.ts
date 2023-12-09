import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const imports = [CommonModule, RouterOutlet, WeatherComponent];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  standalone: true,
  imports: imports,
})
export class AppComponent {
  title = 'TestAppAngular';
}
