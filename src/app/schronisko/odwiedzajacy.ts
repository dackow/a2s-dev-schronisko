import { Czlowiek } from "./czlowiek";
import { Zwierzak } from "./zwierzak";

export class Odwiedzajacy extends Czlowiek{
    data_odwiedzin: Date = new Date();
    zwierzaki: Zwierzak[] = [];

    constructor(imie: string, nazwisko: string, data_odwiedzin: Date, imageUrl: string = '/assets/ludzie/nobody.jpg' ) {
        super(imie, nazwisko, imageUrl);
        this.data_odwiedzin = data_odwiedzin;
    }

    wyprowadzZwierzaka(zwierzak: Zwierzak) {
        this.zwierzaki.push(zwierzak);
    }

    zwrocZwierzaka(zwierzak: Zwierzak) {
        this.zwierzaki = this.zwierzaki.filter((z) => z !== zwierzak);
    }
}
