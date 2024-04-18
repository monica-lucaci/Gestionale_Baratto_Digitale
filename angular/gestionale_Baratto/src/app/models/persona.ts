import { Oggetto } from "./oggetto";

export class Persona {
    codice: string | undefined;
    nome: string | undefined;
    listaOgg: Oggetto[] = new Array();

    constructor(nome:string){
        this.nome = nome;
        this.codice = `${new Date().getTime()}`;
    }
}
