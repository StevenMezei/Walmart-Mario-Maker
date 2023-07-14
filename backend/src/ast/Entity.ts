import { Entitybody } from "./Entitybody";

export class Entity{

    component:String;
    name:String;
    body:Entitybody;


    constructor(component:String, name:String, body:Entitybody){
        this.component = component;
        this.name = name;
        this.body = body;
    }
}