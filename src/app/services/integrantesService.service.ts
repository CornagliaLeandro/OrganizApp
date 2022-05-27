import { Injectable } from "@angular/core";
import { Persona } from "../interfaces/persona.interface";

@Injectable()
export class IntegrantesService{

    integrantes: Persona[] = []

    get getIntegrantes(): Persona[]{
        return this.integrantes
    }

    constructor(){

    }
    agregarP(per: Persona){
        this.integrantes.push(per)
        // console.log(this.integrantes);
        
    }


}