import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RodzajZwierzaka } from '../rodzaj-zwierzaka';

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
  rodzajeZwierzakow: RodzajZwierzakaOpcje[] = [
    { label: 'Kotek', value: RodzajZwierzaka.Kotek },
    { label: 'Piesek', value: RodzajZwierzaka.Piesek },
  ];

  form = new FormGroup({
    rodzaj: new FormControl<RodzajZwierzaka>(RodzajZwierzaka.Kotek, {
      validators: [Validators.required],
      nonNullable: true
    }),
    ilosc: new FormControl<number>(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true
    }),
  });

  zamowZwierzaki() {
    if (this.form.valid) {
      console.log('Zamówienie na zwierzaki:', this.form.getRawValue());
    }
  } 
}
