import { Component, OnInit, ViewChild } from '@angular/core';
import { ZwierzakComponent } from '../zwierzak/zwierzak.component';
import { Zwierzak } from '../zwierzak';
import { Kotek } from '../kotek';
import { Piesek } from '../piesek';
import { PoczekalniaComponent } from '../poczekalnia/poczekalnia.component';
import { Odwiedzajacy } from '../odwiedzajacy';
import { ProdukcjaZwierzakowComponent } from "../produkcja-zwierzakow/produkcja-zwierzakow.component";

@Component({
  selector: 'app-kojec',
  standalone: true,
  imports: [ZwierzakComponent, PoczekalniaComponent, ProdukcjaZwierzakowComponent],
  templateUrl: './kojec.component.html',
  styleUrl: './kojec.component.css',
})
export class KojecComponent implements OnInit {
  wezZwierzaka(zwierzak: Zwierzak) {
    if (zwierzak.odwiedzajacy) {
      alert('Zwierzak jest już pod czyjaś opieką');
    } else {
      if(this.selectedOdwiedzajacy)
      {
        zwierzak.odwiedzajacy = this.selectedOdwiedzajacy;
        this.poczekalnia.usunOdwiedzajacego(this.selectedOdwiedzajacy)
      }
    }
  }

  zwrocZwierzaka(zwierzak: Zwierzak) {
    if (!zwierzak.odwiedzajacy) {
      alert('Zwierzak nie jest pod opieką');
    } else {
      //oddaj odwiedzającego :D 
      this.poczekalnia.dodajOdwiedzajacego(zwierzak.odwiedzajacy);
      zwierzak.odwiedzajacy = null;
    }
  }


  ngOnInit(): void {
  }
  
  zwierzaki: Zwierzak[] = [];
  selectedOdwiedzajacy: Odwiedzajacy | null = null;
  @ViewChild(PoczekalniaComponent) poczekalnia!: PoczekalniaComponent;

  setSelectedOdwiedzajacy(odwiedzajacy: Odwiedzajacy | null) {
    this.selectedOdwiedzajacy = odwiedzajacy;
  }
}
