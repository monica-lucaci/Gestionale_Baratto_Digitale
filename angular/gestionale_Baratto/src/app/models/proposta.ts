import { Oggetto } from "./oggetto";

export class Proposta {
    oggProp : Oggetto | undefined;
    oggRich: Oggetto | undefined;
    statoPRoposta: string = "pending"
}
