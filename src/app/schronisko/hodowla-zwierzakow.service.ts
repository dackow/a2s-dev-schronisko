import { Injectable } from '@angular/core';
import { ZamowienieNaZwierzakiFormularzInterface } from './zamowienie-na-zwierzaki-formularz-interface';
import { interval, map, Observable, take } from 'rxjs';
import { Zwierzak } from './zwierzak';
import { RodzajZwierzaka } from './rodzaj-zwierzaka';
import { Kotek } from './kotek';
import { Piesek } from './piesek';

@Injectable({
  providedIn: 'root'
})
export class HodowlaZwierzakowService {
  static czasOczekiwania = 0;
  static index_wyprodukowanego_zwierzaka = 0;
  constructor() { }


  tworzZwierzaki({rodzaj_zwierzaka, ilosc} : ZamowienieNaZwierzakiFormularzInterface) : Observable<Zwierzak> {
    return interval(HodowlaZwierzakowService.czasOczekiwania).pipe(
      take(ilosc),
      map(() => {
        let zwierzak: Zwierzak;
        console.log(rodzaj_zwierzaka);
        switch (rodzaj_zwierzaka) {
          case RodzajZwierzaka.Kotek:
            zwierzak = new Kotek(`Kotek ${HodowlaZwierzakowService.index_wyprodukowanego_zwierzaka++}`, '/assets/kotki/kot1.jpg', 1, 'Opis kotka', 'Rasa kotka', true, 5, new Date());
            break;
          case RodzajZwierzaka.Piesek:
            zwierzak = new Piesek(`Piesek ${HodowlaZwierzakowService.index_wyprodukowanego_zwierzaka++}`, '/assets/pieski/pies1.jpg', 1, 'Opis pieska', 'Rasa pieska', true, 5, new Date());
            break;
          default:
            throw new Error(`Nieznany rodzaj zwierzaka: ${rodzaj_zwierzaka}`);
        }
        if (zwierzak) {
          console.log(zwierzak.odwiedzajacy);
          return zwierzak;
        }
        throw new Error('Nie udało się utworzyć zwierzaka');
      })
    );
  }
}
