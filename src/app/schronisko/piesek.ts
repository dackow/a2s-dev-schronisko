import { RodzajZwierzaka } from "./rodzaj-zwierzaka";
import { Zwierzak } from "./zwierzak";

export class Piesek extends Zwierzak{
    constructor(nazwa: string, imageUrl: string, wiek: number, opis: string, rasa: string, szczepienie: boolean, najedzenie: number, data_przyjecia: Date) {
        super(nazwa, imageUrl, wiek, opis, rasa, szczepienie, najedzenie, data_przyjecia);
        this.rodzaj_zwierzaka = RodzajZwierzaka.Piesek;
    }
}

