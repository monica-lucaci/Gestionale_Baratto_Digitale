// // Definizione dell'oggetto
// class Oggetto {
//     codice: string;
//     nome: string;
//     proprietario: Persona;

//     constructor(nome: string, proprietario: Persona) {
//         this.nome = nome;
//         this.proprietario = proprietario;
//     }
// }

// // Definizione della persona
// class Persona {
//     nome: string;
//     codice: string;
//     oggettiPosseduti: Oggetto[];

//     constructor(nome: string, codice: string) {
//         this.nome = nome;
//         this.codice = codice;
//         this.oggettiPosseduti = [];
//     }

//     aggiungiOggetto(oggetto: Oggetto) {
//         this.oggettiPosseduti.push(oggetto);
//     }

//     rimuoviOggetto(oggetto: Oggetto) {
//         const index = this.oggettiPosseduti.indexOf(oggetto);
//         if (index !== -1) {
//             this.oggettiPosseduti.splice(index, 1);
//         }
//     }

//     inviaProposta(oggetto: Oggetto, destinatario: Persona): Proposta {
//         return new Proposta(oggetto, destinatario, this);
//     }
// }

// // Definizione della proposta
// class Proposta {
//     oggetto: Oggetto;
//     mittente: Persona;
//     destinatario: Persona;
//     stato: 'in attesa' | 'accettata' | 'rifiutata';

//     constructor(oggetto: Oggetto, destinatario: Persona, mittente: Persona) {
//         this.oggetto = oggetto;
//         this.destinatario = destinatario;
//         this.mittente = mittente;
//         this.stato = 'in attesa';
//     }

//     accetta() {
//         this.stato = 'accettata';
//         this.eseguiTransazione();
//     }

//     rifiuta() {
//         this.stato = 'rifiutata';
//     }

//     private eseguiTransazione() {
//         const oggettoTemp = this.oggetto.proprietario;
//         this.oggetto.proprietario = this.destinatario;
//         this.destinatario.oggettiPosseduti.push(this.oggetto);
//         this.mittente.rimuoviOggetto(this.oggetto);
//         this.mittente.aggiungiOggetto(new Oggetto(this.oggetto.nome, oggettoTemp));
     
//     }
// }

// // Esempio di utilizzo e test

// // Creazione di persone
// const persona1 = new Persona("Mario", "001");
// const persona2 = new Persona("Luigi", "002");
// const persona3 = new Persona("Monica", "003");
// const persona4 = new Persona("Davide","004")

// // Creazione di oggetti
// const oggetto1 = new Oggetto("Libro", persona1);
// const oggetto3 = new Oggetto("telefono", persona1);
// const oggetto2 = new Oggetto("Giocattolo", persona2);
// const oggetto4 = new Oggetto("mouse",persona2);
// const oggetto5 = new Oggetto("tastiera",persona3);
// const oggetto6 = new Oggetto("pc",persona3);
// const oggetto7 = new Oggetto("borsa",persona4);
// const oggetto8 = new Oggetto("bottiglia",persona4);





// // Aggiunta degli oggetti alle persone
// persona1.aggiungiOggetto(oggetto1);
// persona1.aggiungiOggetto(oggetto3);
// persona2.aggiungiOggetto(oggetto2);
// persona2.aggiungiOggetto(oggetto4);
// persona3.aggiungiOggetto(oggetto5);
// persona3.aggiungiOggetto(oggetto6);
// persona4.aggiungiOggetto(oggetto7);
// persona4.aggiungiOggetto(oggetto8);


// // Creazione e invio di una proposta da parte di Mario a Luigi
// const proposta1 = persona1.inviaProposta(oggetto1, persona2);
// console.log("Proposta inviata da Mario a Luigi:", proposta1);

// // Accettazione della proposta da parte di Luigi
// proposta1.accetta();
// console.log("Proposta accettata da Luigi:", proposta1);

// // Verifica della corretta rimozione dell'oggetto dalla lista di Mario e aggiunta nella lista di Luigi
// console.log("Lista oggetti di Mario dopo la transazione:", persona1.oggettiPosseduti.map(obj => obj.nome));
// console.log("Lista oggetti di Luigi dopo la transazione:", persona2.oggettiPosseduti.map(obj => obj.nome));

// // Creazione e invio di un'altra proposta da parte di Luigi a Mario
// const proposta2 = persona2.inviaProposta(oggetto2, persona1);
// console.log("Proposta inviata da Luigi a Mario:", proposta2);

// // Rifiuto della proposta da parte di Mario
// proposta2.rifiuta();
// console.log("Proposta rifiutata da Mario:", proposta2);

// // Verifica che l'oggetto non sia stato trasferito dalla lista di Luigi a quella di Mario
// console.log("Lista oggetti di Mario dopo il rifiuto della proposta:", persona1.oggettiPosseduti.map(obj => obj.nome));
// console.log("Lista oggetti di Luigi dopo il rifiuto della proposta:", persona2.oggettiPosseduti.map(obj => obj.nome));
