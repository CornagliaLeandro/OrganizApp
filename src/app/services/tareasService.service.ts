import { Injectable } from "@angular/core";

@Injectable()
export class TareasService{

    tareas: string[] = [];

    get getTareas(): string[]{
        return this.tareas;
    }

    agregarTarea(tar: string){
       return this.tareas.push(tar)
    }

    constructor(){}

}