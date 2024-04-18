import { Oggetto } from "./Oggetto";

export class Utente {
    codice: string | undefined;
    nome: string | undefined;
    oggettiPosseduti: Oggetto[] = new Array();

    // constructor(codice: string,nome: string) {
    //     this.nome = nome;
    //     this.codice = codice;
    //     this.oggettiPosseduti = [];
    // }
}

