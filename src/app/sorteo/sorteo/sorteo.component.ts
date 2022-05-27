import { Component } from '@angular/core';
import { TareasService } from '../../services/tareasService.service';
import { IntegrantesService } from '../../services/integrantesService.service';
import { Persona } from '../../interfaces/persona.interface';
import { SorteoService } from '../../services/sorteo.service';




@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent {
  sorteado: Persona[] = []
  bot: boolean = false;


  constructor(private ts: TareasService, private is: IntegrantesService, private ss: SorteoService){}


  get tareasSortadas(){
    return this.sorteado = this.ss.sorteado
  }
  

  sorteo(){
    this.ss.sortear()
    this.bot = true;
  }

}
