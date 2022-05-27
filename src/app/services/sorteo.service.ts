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
  aux: boolean = false;

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
        
        }

    } else if ( this.tareas.length > this.integrantes.length ){

    //     for (let i  = 0; i < this.tareas.length  ; i++){

    //     if( i > this.integrantes.length - 1){
    //         this.indice = i;
    //         i= 0
    //     }
    //     if( i <= this.integrantes.length -1 && this.indice === 0){
    //         this.integrantes[i].tareas.push(this.tareas[i])
    //     }else{
    //         this.integrantes[i].tareas.push(this.tareas[i + this.indice])
    //     }
    //   }
            for (let i = 0; i < this.tareas.length ; i++) {
                
                if(i < this.integrantes.length && this.aux == false){
                    this.integrantes[i].tareas.push(this.tareas[i])
                    this.indice++
                    console.log('por aca esta la ' + i);
                    
                }else if(this.indice === this.integrantes.length ){
                    // this.indice = i;

                    if(this.aux ==false){
                        i= 0;
                    }
                    this.aux = true

                    let res = this.tareas.length - this.integrantes.length

                    for(let i = 0; i < res; i++ ){

                        this.integrantes[i].tareas.push(this.tareas[i + this.indice])
                    console.log('fuera del if' + this.tareas[i], this.indice);

                    }
                    
                    
                    
                }
                
             
                
            }
                

    }
    
    this.sorteado = this.intPrueba

    return this.sorteado

  }

  
}