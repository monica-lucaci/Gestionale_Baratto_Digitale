import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OggettoCreateComponent } from './components/oggetto-create/oggetto-create.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaCreateComponent } from './components/persona-create/persona-create.component';
import { PersonaDettailComponent } from './components/persona-dettail/persona-dettail.component';

const routes: Routes = [
  {path: "", redirectTo: "persona/lista", pathMatch: "full"},
  {path: "persona/detail/:codice", component: PersonaDettailComponent},
  {path: "p/inserisci", component: OggettoCreateComponent},
  {path: "persona/lista", component: PersonaListComponent},
  {path: "persona/inserisci", component: PersonaCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
