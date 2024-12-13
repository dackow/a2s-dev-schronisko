import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KojecComponent } from './schronisko/kojec/kojec.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KojecComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
