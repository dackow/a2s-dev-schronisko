export class Zwierzak {
    nazwa: string;
    imageUrl: string;
    wiek: number;
    opis: string;
    rasa: string;
    szczepienie: boolean;
    najedzenie: number;
    data_przyjecia: Date;

    constructor(nazwa: string, imageUrl: string, wiek: number, opis: string, rasa: string, szczepienie: boolean, najedzenie: number, data_przyjecia: Date) {
        this.nazwa = nazwa;
        this.imageUrl = imageUrl;   
        this.wiek = wiek;
        this.opis = opis;
        this.rasa = rasa;
        this.szczepienie = szczepienie;
        this.najedzenie = najedzenie;
        this.data_przyjecia = data_przyjecia;
    }



}

