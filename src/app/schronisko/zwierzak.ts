import { Odwiedzajacy } from './odwiedzajacy';
import { Opiekun } from './opiekun';
import { RodzajZwierzaka } from './rodzaj-zwierzaka';

export class Zwierzak {
  nazwa: string;
  imageUrl: string;
  wiek: number;
  opis: string;
  rasa: string;
  szczepienie: boolean;
  najedzenie: number;
  data_przyjecia: Date;
  opiekun: Opiekun | null = null;
  odwiedzajacy: Odwiedzajacy | null = null;
  rodzaj_zwierzaka: RodzajZwierzaka | null = null;

  constructor(
    nazwa: string,
    imageUrl: string,
    wiek: number,
    opis: string,
    rasa: string,
    szczepienie: boolean,
    najedzenie: number,
    data_przyjecia: Date
  ) {
    this.nazwa = nazwa;
    this.imageUrl = imageUrl;
    this.wiek = wiek;
    this.opis = opis;
    this.rasa = rasa;
    this.szczepienie = szczepienie;
    this.najedzenie = najedzenie;
    this.data_przyjecia = data_przyjecia;
  }

  setOpiekun(opiekun: Opiekun) {
    if (opiekun) {
      if (this.opiekun) {
        alert(`Zwierze ${this.nazwa} ma opiekuna:  ${opiekun.fullName}`);
      } else {
        this.opiekun = opiekun;
        console.log(`${opiekun.fullName} -> ${this.nazwa}`);
      }
    } else {
      this.opiekun = null;
      console.log(`Opiekun usuniety dla -> ${this.nazwa}`);
    }
  }
}
