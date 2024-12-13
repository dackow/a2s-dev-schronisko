import { Component, Input } from '@angular/core';
import { Zwierzak } from '../zwierzak';

@Component({
  selector: 'app-zwierzak',
  standalone: true,
  imports: [],
  templateUrl: './zwierzak.component.html',
  styleUrl: './zwierzak.component.css'
})
export class ZwierzakComponent {
  @Input({required: true})
  zwierzak!: Zwierzak;
}
