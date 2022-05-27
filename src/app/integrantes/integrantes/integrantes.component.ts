import { Component, Input} from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';
import { IntegrantesService } from '../../services/integrantesService.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent{

  @Input()
  nuevaPersona: Persona ={
    nombre: '',
    tareas: []
  }

  nombrePersona: string[] = []
  
  constructor( private intService: IntegrantesService) {  this.intService}

  get integrantes(){
    return this.intService.getIntegrantes
  }
  

agregar(){

  if(this.nuevaPersona.nombre.trim().length === 0){ return}
  this.nombrePersona.push(this.nuevaPersona.nombre)
  this.intService.agregarP(this.nuevaPersona)
  this.nuevaPersona = {
    nombre: '',
    tareas: []
  }
  
}


}