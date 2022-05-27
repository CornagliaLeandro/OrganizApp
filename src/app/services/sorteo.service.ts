import { Persona } from "../interfaces/persona.interface";
import { TareasService } from "./tareasService.service";
import { IntegrantesService } from "./integrantesService.service";
import { Injectable } from "@angular/core";

@Injectable()
export class SorteoService{


  integrantes: Persona[] = this.it.getIntegrantes;
  indice: number = 0;
  sorteado: Persona[] = []
  tareas: string[] = []



  constructor(private ts: TareasService, private it: IntegrantesService) { this.ts = ts, this.it = it }


  shuffleArray(arreglo: any[]){
    console.log(arreglo);
    
    arreglo.sort(()=> Math.random() - 0.5);

    
    return arreglo 
}

  
  sortear() {

    this.tareas = this.shuffleArray(this.ts.getTareas)
    this.integrantes = this.shuffleArray(this.integrantes)
  

    if (this.integrantes.length >= this.tareas.length) {

      

      for (let i = 0; i < this.tareas.length; i++) {

          if(this.tareas){
            this.integrantes[i].tareas.push(this.tareas[i])
          }else {
            this.integrantes[i].tareas.push('Sin tarea asignada')
          } 
      }

    } else {
      console.log('leandro');

      for (let i  = 0; i <= this.integrantes.length -1  ; i++){

          if(i === this.integrantes.length - 1){
            this.integrantes[i].tareas.push(this.tareas[i])
            this.indice = i;
            i = 0;
          }else{
            this.integrantes[i].tareas.push(this.tareas[i + this.indice + 1])
          }

      }
      

    }
    
    this.sorteado = this.integrantes

    return this.sorteado

  }

  
}