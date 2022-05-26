import { Component} from '@angular/core';
import { TareasService } from '../../services/tareasService.service';
import { IntegrantesService } from '../../services/integrantesService.service';
import { Persona } from '../../interfaces/persona.interface';


@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent {

  integrantes: Persona[] = this.it.getIntegrantes;
  

  constructor(private ts: TareasService, private it: IntegrantesService) { this.ts = ts, this.it = it}

  tar: string[] = this.ts.getTareas
  

 sortear(){
  
  // alert('desde el boton')
  // console.log(this.tar);
  // console.log(this.integrantes)
  
  // this.integrantes =  this.it.getIntegrantes

  if(this.integrantes.length >= this.tar.length){
    
    for (let i = 0; i < this.tar.length; i++) {

      
      this.integrantes[i].tareas.push(this.tar[i])
      
      // console.log(this.integrantes[i].nombre + ' - ' + this.integrantes[i].tareas);
      
    }

    console.log(this.integrantes);

  }else{
    console.log('hola');
    
  }
  
 }

}
