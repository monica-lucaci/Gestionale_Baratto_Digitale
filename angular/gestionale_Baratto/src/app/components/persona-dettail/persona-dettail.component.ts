import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';
import { Oggetto } from '../../models/oggetto';

@Component({
  selector: 'app-persona-dettail',
  templateUrl: './persona-dettail.component.html',
  styleUrl: './persona-dettail.component.css'
})
export class PersonaDettailComponent {
  nome: string | undefined;
  codice: string | undefined;
  listaOggetti : Oggetto[] | undefined;

  constructor(
    private rottaAttiva: ActivatedRoute,
    private service: PersonaService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rottaAttiva.params.subscribe(parametri => {
      console.log(parametri['codice'])
      let identificativo = parametri['codice'];  //app-routing-module ---il pram :codice

  
      let per = this.service.GetById(identificativo);
      this.nome = per?.nome;
      this.codice = per?.codice;
      this.listaOggetti = per?.listaOgg;
    })

  }
}
