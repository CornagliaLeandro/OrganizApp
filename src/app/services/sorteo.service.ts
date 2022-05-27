import { Persona } from "../interfaces/persona.interface";
import { TareasService } from "./tareasService.service";
import { IntegrantesService } from "./integrantesService.service";
import { Injectable } from "@angular/core";

@Injectable()
export class SorteoService{


  integrantes: Persona[] = this.it.getIntegrantes;
  indice: number = 0;
  sorteado: Persona[] = []
  tareas: string[] = this.ts.getTareas

  intPrueba: Persona[] = this.integrantes
  tarPrueba: string[] = this.tareas
  

  constructor(private ts: TareasService, private it: IntegrantesService) { this.ts = ts, this.it = it }


  shuffleArray(arreglo: any[]){
    
    arreglo.sort(()=> Math.random() - 0.5);    
    return arreglo 
}

  
  sortear() {
    
        this.integrantes = this.shuffleArray(this.integrantes)
        this.tareas = this.shuffleArray(this.tareas)

    if (this.integrantes.length >= this.tareas.length) {

        console.log(this.integrantes.length - this.tareas.length);
        
        let resta = this.integrantes.length - this.tareas.length
        
        for(let i = 0; i <= resta ; i++){
            this.tareas.push('sin asignar tarea')
        }
        

      

      for (let i = 0; i < this.integrantes.length; i++) {

         
            this.integrantes[i].tareas.push(this.tareas[i])
           
        //   if(this.tareas[i].length === 0){
        //       this.integrantes[i].tareas.push('Sin tarea asiganada')
        //   }
      }
    //   for (const t of this.integrantes) {
    //       if(t.tareas.length === 0){
    //           this
    //       }
    //   }
    //   for(let i = 0; i < this.integrantes.length; i++){
    //       if(this.integrantes[i].tareas.length === 0){
    //         this.integrantes[i].tareas.push('Sin tarea asiganada')
    //       }
    //   }
    } else if ( this.integrantes.length < this.tareas.length){

      for (let i  = 0; i < this.tareas.length  ; i++){

        //   if(i === this.integrantes.length - 1){
        //     this.integrantes[i].tareas.push(this.tareas[this.indice])
        //     this.indice = i;
        //     i = 0;
        //   }else{
        //     this.integrantes[i].tareas.push(this.tareas[i + this.indice + 1])
        //   }
        if( i > this.integrantes.length - 1){
            this.indice = i;
            i= 0
        }
        if( i <= this.integrantes.length -1 && this.indice === 0){
            this.integrantes[i].tareas.push(this.tareas[i])
        }else{
            this.integrantes[i].tareas.push(this.tareas[i + this.indice])
        }
        

      }
      

    }
    
    this.sorteado = this.intPrueba

    return this.sorteado

  }

  
}