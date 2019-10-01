import { Block } from "./Block";
import { Tronic } from "./Tronic";
import { Monster } from "./Monster";
import { Item } from "./Item";
import { Entity } from "./Entity";
import { j2t } from "../global";

export class Js2tronic {
	/**
	 * namespace for all the non-tronic blocks
	 */
	readonly block: Block;
	
	/**
	 * namespace for all the tronic blocks
	 */
	readonly tronic: Tronic;
	
	/**
	 * namespace for all the monster entities
	 */
	readonly monster: Monster;
	
	/**
	 * namespace for all the item entities
	 */
	readonly item: Item;

	/**
	 * TODO: when a Super Tony Land *.png level file is provided, it gets stored here and then added to the JavaScript world array of entities
	 */
	input: string;

	/**
	 * JavaScript array of entities that are registered to a physical location in the game world
	 */
	world: Entity[];

	/**
	 * stringified version of the JavaScript world array of entities
	 * 
	 * this is the output string that Super Tony Land can understand
	 */
	output: string;

    constructor () {
        this.block = new Block();
        this.tronic = new Tronic();
        this.monster = new Monster();
		this.item = new Item();
		this.input = "";
		this.world = [];
		this.output = "";
	}

	/**
	 * an entity is assigned a physical position in the world based on its x, y, z coordinates
	 * 
	 * when no position is specified (ie. x=0, y=0, z=0) or if the position is already occupied, the entity gets registered outside the world (y 50+)
	 * 
	 * @param entity - any valid entity (Block, Tronic, Item, Monster)
	 */
	register( entity: Entity ) {
		let occupied: number = 0;
		let maxWidth: number  = 399;
		let heightAtWhichOutsideWorldStarts: number  = 50;
		let layerWithOutsideWorld: number  = 200;
		let outsideWorldTargetX: number  = 0;
		let outsideWorldTargetY: number  = 50;

		// register outside world
		if (entity.position.x === 0 &&
			entity.position.y === 0 &&
			entity.position.z === 0) {
			
			if (this.world.length > 0) {
				this.world.forEach( function ( point: Entity ) {
					if (point.position.z === layerWithOutsideWorld) {
						if (point.position.y >= heightAtWhichOutsideWorldStarts) {
							// detect the highest x, y coordinate in order to append next entity
							if (point.position.y > outsideWorldTargetY) {
								outsideWorldTargetY = point.position.y;
								outsideWorldTargetX = 0;
							}
							if (point.position.x > outsideWorldTargetX && outsideWorldTargetY === point.position.y) {
								outsideWorldTargetX = point.position.x;
							}
						}
					}
				});
			}

			outsideWorldTargetX++;
			if (outsideWorldTargetX > maxWidth) {
				outsideWorldTargetX = 0;
				outsideWorldTargetY++;
			}
			
			entity.position.x = outsideWorldTargetX;
			entity.position.y = outsideWorldTargetY;
			entity.position.z = layerWithOutsideWorld;
		}
		// attempt register at specified position in world
		if (this.world.length > 0) {
			for (let point of this.world) {
				if (point.position.x === entity.position.x &&
					point.position.y === entity.position.y &&
					point.position.z === entity.position.z &&
					point.pushed === entity.pushed) {
					
					occupied++;
					break;
				}
			}
		}
		// Successful registration
		if ( occupied === 0 ) {
			this.world.push( entity );
		}
		// Unsuccessful registration - override coordinates and place outside world
		if ( occupied !== 0 ) {
			entity.position.x = 0;
			entity.position.y = 0;
			entity.position.z = 0;
			this.register( entity );
		}		
		occupied = 0;
		this.tronifyWorld();
	}

	/**
	 * use private method to convert this.input tronic strings to this.world js objects
	 * 
	 * @param inputTronicString - optionnally pass in tronic strings manually
	 */
	import( inputTronicString?: string ) {
		if (inputTronicString) this.input = inputTronicString;
		if (this.input.length > 0) this.jsifyWorld();
	}

	/**
	 * generate a tronic string of text that Super Tony Land can understand
	 */
	private jsifyWorld() {
		let tronicArray: string[];
		let tronicProps: string[];
		let entity: Entity;
		let delimiter: string = "|";
		let comma: string = ",";
		let colon: string = ":";
		let newLine: string = "\n";
	
		if (this.input.length > 0) {
			tronicArray = this.input.split(newLine);
			for (let tronicString of tronicArray) {
				if (tronicString.length > 1) {
					tronicProps = [];
					tronicProps = tronicString.split(delimiter)
					let tronicName = tronicProps[0];
					let tronicPosition = tronicProps[1].split(comma);
					let x = parseInt( tronicPosition[0] );
					let y = parseInt( tronicPosition[1] );
					let z = parseInt( tronicPosition[2] );
					let skip = false;
	
					switch (true) {
						case (typeof j2t.block[tronicName.replace(/\s+/, "")] === "function"):
							entity = j2t.block[tronicName.replace(/\s+/, "")]().place( x, y, z );
							break;
						case (typeof j2t.tronic[tronicName.replace(/\s+/, "")] === "function"):
							entity = j2t.tronic[tronicName.replace(/\s+/, "")]().place( x, y, z );
							break;
						case (typeof j2t.item[tronicName.replace(/\s+/, "")] === "function"):
							entity = j2t.item[tronicName.replace(/\s+/, "")]().place( x, y, z );
							break;
						case (typeof j2t.monster[tronicName.replace(/\s+/, "")] === "function"):
							entity = j2t.monster[tronicName.replace(/\s+/, "")]().place( x, y, z );
							break;
						default:
							// if the tronicName is not found for some reason, skip this iteration of the for loop.
							skip = true;
							entity = new Entity();
							break;
					}
	
					if (!skip) {
						entity.name = tronicName
						tronicProps.shift();
						
						if (tronicProps.length > 0) {
							for (let unknownProperty of tronicProps) {
								switch (true) {
									case unknownProperty.toLowerCase().startsWith("tronictype"):
										entity.tronictype = unknownProperty.split(colon).length > 1 ? unknownProperty.split(colon)[1] : "";
										break;
									case unknownProperty.toLowerCase().startsWith("tronicnum"):
										entity.tronicnum = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("door"):
										console.log(unknownProperty);
										entity.door = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("pipe"):
										entity.pipe = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("troniccon"):
										if (!entity.troniccon) entity.troniccon = {};
										let unknownPort = unknownProperty.split(colon)[1];
										switch (true) {
											case unknownPort.toLowerCase().startsWith("fa"):
												entity.troniccon.fa = unknownPort.split(comma)[1];
												break;
											case unknownPort.toLowerCase().startsWith("fb"):
												entity.troniccon.fb = unknownPort.split(comma)[1];
												break;
											case unknownPort.toLowerCase().startsWith("da"):
												entity.troniccon.da = unknownPort.split(comma)[1];
												break;
											case unknownPort.toLowerCase().startsWith("db"):
												entity.troniccon.db = unknownPort.split(comma)[1];
												break;
											case unknownPort.toLowerCase().startsWith("do"):
												entity.troniccon.do = unknownPort.split(comma)[1];
												break;
											case unknownPort.toLowerCase().startsWith("dz"):
												entity.troniccon.dz = unknownPort.split(comma)[1];
												break;
										}
										break;
									case unknownProperty.toLowerCase().startsWith("pushed"):
										entity.pushed = true;
										break;
									case unknownProperty.toLowerCase().startsWith("grav"):
										entity.grav = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("dir"):
										entity.dir = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("group"):
										entity.group = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("load"):
										//TODO handle chibi/normish sprite detail props
										entity.load = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("contain"):
										entity.contain = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("calc"):
										entity.calc = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("if"):
										entity.if = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("comment"):
										entity.comment = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("text"):
										entity.text = unknownProperty.split(colon)[1];
										break;
									case unknownProperty.toLowerCase().startsWith("bang"):
										entity.bang = unknownProperty.split(colon)[1];
										break;	
									case unknownProperty.toLowerCase().startsWith("warp"):
										entity.warp = unknownProperty.split(colon)[1];
										break;							
								}
							}
						}
					}
				}
			}
		}
	}

	/**
	 * generate a tronic string of text that Super Tony Land can understand
	 */
	private tronifyWorld() {
		let tronicString: string = "";
		let delimiter: string = "|";
		let comma: string = ",";
		let colon: string = ":";
		let newLine: string = "\n";
		
		if (this.world.length > 0) {
			for (let entity of this.world) {
				if (entity.name) { tronicString += entity.name; }
				if (entity.position && entity.position.x) { tronicString += delimiter + entity.position.x; } else { tronicString += delimiter + "0"; }
				if (entity.position && entity.position.y) { tronicString += comma + entity.position.y; } else { tronicString += comma + "0"; }
				if (entity.position && entity.position.z) { tronicString += comma + entity.position.z; } else { tronicString += comma + "0"; }
				if (entity.position && entity.position.d) { tronicString += comma + entity.position.d; } else { tronicString += comma + "0"; }
				if (entity.tronictype === "null") { tronicString += delimiter + "tronictype" + colon + "null"; } else if (entity.tronicnum && entity.tronictype === ""){ tronicString += delimiter + "tronictype" + colon + ""; }
				if (entity.tronicnum) { tronicString += delimiter + "tronicnum" + colon + String(entity.tronicnum); }
				if (entity.troniccon && entity.troniccon.fa) { tronicString += delimiter + "troniccon" + colon + "fa" + comma + String(entity.troniccon.fa); }
				if (entity.troniccon && entity.troniccon.fb) { tronicString += delimiter + "troniccon" + colon + "fb" + comma + String(entity.troniccon.fb); }
				if (entity.troniccon && entity.troniccon.da) { tronicString += delimiter + "troniccon" + colon + "da" + comma + String(entity.troniccon.da); }
				if (entity.troniccon && entity.troniccon.db) { tronicString += delimiter + "troniccon" + colon + "db" + comma + String(entity.troniccon.db); }
				if (entity.troniccon && entity.troniccon.do) { tronicString += delimiter + "troniccon" + colon + "do" + comma + String(entity.troniccon.do); }
				if (entity.troniccon && entity.troniccon.dz) { tronicString += delimiter + "troniccon" + colon + "dz" + comma + String(entity.troniccon.dz); }
				if (entity.pushed) { tronicString += delimiter + "pushed" ; }
				if (entity.grav) { tronicString += delimiter + "grav" + colon + entity.grav; }
				if (entity.dir) { tronicString += delimiter + "dir" + colon + entity.dir; }
				if (entity.group) { tronicString += delimiter + "group" + colon + entity.group; }
				if (entity.load) { tronicString += delimiter + "load" + colon + entity.load; }
				if (entity.contain) { tronicString += delimiter + "contain" + colon + entity.contain; }
				if (entity.calc) { tronicString += delimiter + "calc" + colon + entity.calc; }
				if (entity.if) { tronicString += delimiter + "if" + colon + entity.if; }
				if (entity.comment) { tronicString += delimiter + "comment" + colon + entity.comment; }
				if (entity.text) { tronicString += delimiter + "text" + colon + entity.text; }		
				if (entity.bang) { tronicString += delimiter + "bang" + colon + entity.bang; }
				if (entity.warp) { tronicString += delimiter + "warp" + colon + entity.warp; }
				if (entity.door) { tronicString += delimiter + "door" + colon + String(entity.door); }
				if (entity.pipe) { tronicString += delimiter + "pipe" + colon + String(entity.pipe); }
				tronicString += newLine;
			}
		}
		this.output = tronicString;
	}
}