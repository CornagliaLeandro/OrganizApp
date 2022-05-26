import { Component, Input, Output} from '@angular/core';
import { TareasService } from '../../services/tareasService.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  nuevaTarea: string = '';
  tarea: string = ''

  constructor(private tareaService: TareasService){}

    get getTareas(){
      return this.tareaService.getTareas
    }

  agregar(){

    if(this.nuevaTarea.length === 0) { return }
    this.tarea =  this.tareaService.agregarTarea(this.nuevaTarea).toString()
    this.nuevaTarea = '';
    
  }




  

}
