import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() selected = new EventEmitter<Odwiedzajacy | null>();

  select(odwiedzajacy: Odwiedzajacy | null) : void {
    this.selectedOdwiedzajacy = odwiedzajacy;
    this.selected.emit(odwiedzajacy);
  }

  ngOnInit(): void {
   this.odwiedzajacy.push(new Odwiedzajacy("Adam", "Nowak",new Date())); 
   this.odwiedzajacy.push(new Odwiedzajacy("Kazik", "Zarazek",new Date())); 
  }

  dodajOdwiedzajacego(odwiedzajacy: Odwiedzajacy) : void {
    this.odwiedzajacy.push(odwiedzajacy);
  }

  usunOdwiedzajacego(odwiedzajacy: Odwiedzajacy) : void {
    this.odwiedzajacy = this.odwiedzajacy.filter((o) => o !== odwiedzajacy);
  }

}
