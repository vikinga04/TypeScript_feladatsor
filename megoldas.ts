/*1. feladat – Diák infó [DiakInfo]
Készítsen egy függvényt három paraméterrel [nev:szoveg], [csoport:szam] és [típus:bool]
A név változót egy az egyben adja vissza a stringben, a csoport változót fűzze hozzű kiegészítve írassa 
ki írja elé a „Team” kifejezést, a bool változó [true] esetén a „Junior Frontend” [false] esetén a 
„Webprogramozó” szöveg jelenjen meg a függvény által.
Kipróbálásra: DiakInfo(„Minta Márton”, 8, true);
Visszatérési érték[string]: Minta Márton [Team08] – Junior Frontend
(Megjegyzés, a szavak közötti távolság egy szóköz!)*/

function diakInfo(nev: string, csoport: number, tipus: boolean): string {
    let team = "Team" + (csoport < 10 ? "0" + csoport : csoport);
    let szerep = tipus ? "Junior Frontend" : "Webprogramozó";
    return nev + " [" + team + "] - " + szerep;
}
console.log(diakInfo("Minta Márton", 8, true));



/*2. feladat – Magatartás-Szorgalom [SzovegesErtekeles]
Készíts egy függvényt, ami bemeneti paraméternek vár egy számot [jegy], ami visszatért két értékkel, 
az adott bemeneti paraméter szöveges értékelésével, 2 PARAMÉTERREL! (Használj Tuple-t) Kipróbálásra: SzovegesErtekeles(2);
Visszatérési érték[string] tuple: [Hanyag,Rossz]*/

function szovegesErtekeles(jegy: number): [string, string] {
    const ertekelesek: string[] = [
        "Nem értékelhető",
        "Hanyag",
        "Változó",
        "Jó",
        "Példás",
    ];

    if (jegy >= 1 && jegy <= 4) {
        return [ertekelesek[jegy], ertekelesek[jegy]];
    } else {
        return [ertekelesek[0], ertekelesek[0]];
    }
}
console.log(szovegesErtekeles(2));


/*3. feladat – Hárommal oszható számok listája [HarommalOszthatokSzama]
Készíts egy tömb bemeneti paraméterrel rendelkező függvényt, ami visszaadja a tömbben lévő 
hárommal osztható számok mennyiségét.
Kipróbálásra: HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20 ]);
Visszatérési érték[number]: 4*/

function harommalOszthatokSzama(tomb: number[]): number {
    let harommalOszthatoSzamok = 0;

    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 === 0) {
            harommalOszthatoSzamok++;
        }
    }

    return harommalOszthatoSzamok;
}
console.log(harommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));


/*4. feladat – Nyerőszám sorsoló[Nyeroszamok]
Készítsen egy függvényt háromparaméterrel[mennyiseg], [alsoHatar] és[felsoHatar], oldja meg 
hogy kigeneráljon adott mennyiségű számot az alsó és a felső határon belül, és azokban, NE LEGYEN
ISMÉTLŐDÉS!
Kipróbálásra: Nyeroszamok(5, 1, 90);
Visszatérési érték[Array]: adott intervallumban lévő számok ismétlés nélkül*/

function nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): number[] {
    const nyeroszamok: number[] = [];

    while (nyeroszamok.length < mennyiseg) {
        const szam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
        if (!nyeroszamok.includes(szam)) {
            nyeroszamok.push(szam);
        }
    }

    return nyeroszamok;
}
console.log(nyeroszamok(5, 1, 90));
