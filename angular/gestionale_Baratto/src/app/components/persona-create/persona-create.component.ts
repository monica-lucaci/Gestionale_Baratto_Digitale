import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrl: './persona-create.component.css'
})
export class PersonaCreateComponent {
  nominativo: string | undefined;
  showErrore: boolean = false;

  constructor(private service: PersonaService){

  }

  salva(){  
    this.showErrore = false;

    if(this.nominativo?.trim() == ""){
      this.showErrore = true;
    }

    if(this.nominativo != undefined){
      let per = new Persona(this.nominativo);

      if(this.service.Insert(per)){
        console.log("STAPPOOOO")
        this.nominativo = "";
      }
      else{
        console.log("Erorre");
        
      }
    }
  }
}