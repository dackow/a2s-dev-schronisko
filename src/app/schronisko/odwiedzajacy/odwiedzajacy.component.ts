import { Component, Input } from '@angular/core';
import { Odwiedzajacy } from '../odwiedzajacy';

@Component({
  selector: 'app-odwiedzajacy',
  standalone: true,
  imports: [],
  templateUrl: './odwiedzajacy.component.html',
  styleUrl: './odwiedzajacy.component.css'
})
export class OdwiedzajacyComponent {
  @Input({required: true})
  odwiedzajacy!: Odwiedzajacy;

  @Input()
  isSelected: boolean = false;
}
