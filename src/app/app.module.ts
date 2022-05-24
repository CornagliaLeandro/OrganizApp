import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegrantesComponent } from './integrantes/integrantes/integrantes.component';
import { IntegrantesService } from './services/integrantesService.service';

@NgModule({
  declarations: [
    AppComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IntegrantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
