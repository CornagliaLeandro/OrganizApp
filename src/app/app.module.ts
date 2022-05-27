import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegrantesComponent } from './integrantes/integrantes/integrantes.component';
import { IntegrantesService } from './services/integrantesService.service';
import { TareasService } from './services/tareasService.service';
import { TareasComponent } from './tareas/tareas/tareas.component';
import { SorteoComponent } from './sorteo/sorteo/sorteo.component';
import { SorteoService } from './services/sorteo.service';

@NgModule({
  declarations: [
    AppComponent,
    IntegrantesComponent,
    TareasComponent,
    SorteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IntegrantesService, TareasService, SorteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
