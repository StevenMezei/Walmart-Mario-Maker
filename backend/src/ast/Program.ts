import { Entity } from "./Entity";
import { Level } from "./Level";
import { Player } from "./Player";

export class Program{
    // fields
    player:Player;
    entities:Array<Entity>;
    levels:Array<Level>;

    // constructor

    constructor(player:Player, entities:Array<Entity>, levels:Array<Level>){
        this.player = player;
        this.entities = entities;
        this.levels = levels;
    }
    // functions
}