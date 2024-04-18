import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OggettoListComponent } from './components/oggetto-list/oggetto-list.component';
import { OggettoCreateComponent } from './components/oggetto-create/oggetto-create.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaCreateComponent } from './components/persona-create/persona-create.component';
import { FormsModule } from '@angular/forms';
import { PersonaDettailComponent } from './components/persona-dettail/persona-dettail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OggettoListComponent,
    OggettoCreateComponent,
    PersonaListComponent,
    PersonaCreateComponent,
    PersonaDettailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
