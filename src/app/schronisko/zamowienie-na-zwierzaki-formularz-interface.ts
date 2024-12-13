import { RodzajZwierzaka } from "./rodzaj-zwierzaka";

export interface ZamowienieNaZwierzakiFormularzInterface {
    rodzaj_zwierzaka: RodzajZwierzaka;
    ilosc: number;
    rasa: string;
    opis: string;
}
