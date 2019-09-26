import { Block } from "./Block";
import { Tronic } from "./Tronic";
import { Monster } from "./Monster";
import { Item } from "./Item";

export class Js2tronic {
    readonly block: Block;
    readonly tronic: Tronic;
    readonly monster: Monster;
    readonly item: Item;
    constructor () {
        this.block = new Block();
        this.tronic = new Tronic();
        this.monster = new Monster();
        this.item = new Item();
    }
}