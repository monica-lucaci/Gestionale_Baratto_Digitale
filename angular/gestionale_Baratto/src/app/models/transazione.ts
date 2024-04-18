 //import {v4 as uuidv4 } from 'uuid'
import { Proposta } from './proposta';

export class Transazione{
    codice: string = Math.random() * 10 + "M";
    data: Date = new Date();
    proposta: Proposta | undefined;
}

