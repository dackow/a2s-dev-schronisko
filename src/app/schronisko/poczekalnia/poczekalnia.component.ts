import { Component, OnInit } from '@angular/core';
import { Odwiedzajacy } from '../odwiedzajacy';
import { OdwiedzajacyComponent } from "../odwiedzajacy/odwiedzajacy.component";

@Component({
  selector: 'app-poczekalnia',
  standalone: true,
  imports: [OdwiedzajacyComponent],
  templateUrl: './poczekalnia.component.html',
  styleUrl: './poczekalnia.component.css'
})
export class PoczekalniaComponent implements OnInit{
  
  odwiedzajacy: Odwiedzajacy[] = [];
  selectedOdwiedzajacy: Odwiedzajacy | null = null;

  select(odwiedzajacy: Odwiedzajacy | null) : void {
    this.selectedOdwiedzajacy = odwiedzajacy;
  }
  ngOnInit(): void {
   this.odwiedzajacy.push(new Odwiedzajacy("Adam", "Nowak",new Date())); 
   this.odwiedzajacy.push(new Odwiedzajacy("Kazik", "Zarazek",new Date())); 
  }

}
