export class Czlowiek {
    imie: string = '';
    nazwisko: string = '';
    imageUrl: string = '';

    constructor(imie: string, nazwisko: string, imageUrl: string = '/assets/ludzie/nobody.jpg') {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.imageUrl = imageUrl;
    }

    get fullName() {
        return `${this.imie} ${this.nazwisko}`;
    }

    set fullName(name: string) {
        const names = name.split(' ');
        this.imie = names[0];
        this.nazwisko = names[1];
    }
}
