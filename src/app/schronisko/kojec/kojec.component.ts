import { Component, OnInit } from '@angular/core';
import { ZwierzakComponent } from '../zwierzak/zwierzak.component';
import { Zwierzak } from '../zwierzak';
import { Kotek } from '../kotek';
import { Piesek } from '../piesek';
import { PoczekalniaComponent } from '../poczekalnia/poczekalnia.component';


@Component({
  selector: 'app-kojec',
  standalone: true,
  imports: [ZwierzakComponent, PoczekalniaComponent],
  templateUrl: './kojec.component.html',
  styleUrl: './kojec.component.css'
})
export class KojecComponent implements OnInit{
  ngOnInit(): void {
    const kotek1 = new Kotek("Marek", "assets/kotki/kot1.jpg", 3, "Kotek żyje na 5 lat", "dachowiec", true, 50, new Date(2022, 1, 1));
    const kotek2 = new Kotek("Krzysztof", "assets/kotki/kot2.jpg", 3, "Kotek lubi dzieci", "dachowiec", true, 75, new Date(2023, 11, 1));
    const kotek3 = new Kotek("Józef", "assets/kotki/kot3.jpg", 3, "Kot-domator", "super-rasa", true, 13, new Date(2024, 10, 10));

    const piesek1 = new Piesek("Shadow", "assets/pieski/pies1.jpg", 3, "Własność prywatna", "kundelek", true, 50, new Date(2022, 7, 1));
    const piesek2 = new Piesek("Maniek", "assets/pieski/pies2.jpg", 3, "Genialny dożek", "shi-tsu", true, 50, new Date(2019, 7, 2)); 
    const piesek3 = new Piesek("Lassie", "assets/pieski/pies3.jpg", 3, "Dobry obrońca", "doberman", true, 50, new Date(2021, 12, 11));

    this.zwierzaki.push(kotek1, kotek2, kotek3, piesek1, piesek2, piesek3);
    
  }
  zwierzaki: Zwierzak[] = [];


    
}
