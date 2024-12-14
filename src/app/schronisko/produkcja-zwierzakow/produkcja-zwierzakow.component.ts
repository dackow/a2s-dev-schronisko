import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RodzajZwierzaka } from '../rodzaj-zwierzaka';
import { Zwierzak } from '../zwierzak';
import { HodowlaZwierzakowService } from '../hodowla-zwierzakow.service';
import { ZamowienieNaZwierzakiFormularzInterface } from '../zamowienie-na-zwierzaki-formularz-interface';

interface RodzajZwierzakaOpcje{
  label: string;
  value: RodzajZwierzaka;
}

@Component({
  selector: 'app-produkcja-zwierzakow',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './produkcja-zwierzakow.component.html',
  styleUrl: './produkcja-zwierzakow.component.css'
})
export class ProdukcjaZwierzakowComponent {
  @Output() wyprodukowanyZwierzak = new EventEmitter<Zwierzak>();
  isTworzenieZwierzaka: boolean = false;

  hodowlaZwierzakowService = inject(HodowlaZwierzakowService)

  rodzajeZwierzakow: RodzajZwierzakaOpcje[] = [
    { label: 'Kotek', value: RodzajZwierzaka.Kotek },
    { label: 'Piesek', value: RodzajZwierzaka.Piesek },
  ];

  form = new FormGroup({
    rodzaj_zwierzaka: new FormControl<RodzajZwierzaka>(RodzajZwierzaka.Kotek, {
      validators: [Validators.required],
      nonNullable: true
    }),
    ilosc: new FormControl<number>(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true
    }),
  });

  zamowZwierzaki() {
    const formValue: ZamowienieNaZwierzakiFormularzInterface = this.form.getRawValue();
    //@debugger
    this.isTworzenieZwierzaka = true;

    this.hodowlaZwierzakowService.tworzZwierzaki(formValue).subscribe(
      {
          next: (zwierzak) => this.wyprodukowanyZwierzak.emit(zwierzak),
          complete: () => this.isTworzenieZwierzaka = false
      }      
    ); 
  } 
}
