import { Utente } from "./Utente";

export class Oggetto{
    codice: string;
    nome: string;
    descrizione?: string;
    proprietario: Utente;

}