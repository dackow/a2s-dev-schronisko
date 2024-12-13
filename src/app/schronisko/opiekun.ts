import { Czlowiek } from './czlowiek';
import { Zwierzak } from './zwierzak';

export class Opiekun extends Czlowiek {
  id: number = -1;
  zwierzaki: Zwierzak[] = [];

  constructor(
    imie: string,
    nazwisko: string,
    imageUrl: string = '/assets/ludzie/nobody.jpg'
  ) {
    super(imie, nazwisko, imageUrl);
  }

  dodajZwierzaka(zwierzak: Zwierzak) {
    if (this.zwierzaki.findIndex((z) => z === zwierzak) === -1) {
      this.zwierzaki.push(zwierzak);
    } else {
      console.log(
        `Zwierz ${zwierzak.nazwa} jest już w kolekcji opiekuna ${this.fullName}`
      );
    }
  }

  usunZwierzaka(zwierzak: Zwierzak) {
    if (this.zwierzaki.findIndex((z) => z === zwierzak) === -1) {
      console.log(
        `Zwierz ${zwierzak.nazwa} nie jest w kolekcji opiekuna ${this.fullName}`
      );
    } else {
      this.zwierzaki = this.zwierzaki.filter((z) => z !== zwierzak);
    }
  }
}
