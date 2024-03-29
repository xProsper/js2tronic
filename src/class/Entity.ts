import { j2t } from "../global";

class Position {

    /**
     * 0-399 left to right horizontal axis
     */
    x: number;

    /**
     * 0-49 bottom to top vertical axis
     */
    y: number;

    /**
     * 0 <front layer> | 100 <middle layer> | 200 <back layer>
     * 
     * enum - ZLayer
     */
    z: number;

    /**
     * rotation angle can be one of 0, 90, 180, 270
     * 
     * enum - RotationAngle
     */
    d: string | number;

    constructor ( x: number, y: number, z: number ) {
        this.x = x;
        this.y = y;
        this.z = z; // one of 000, 100, 200
        this.d = 0; // one of 0, 90, 180, 270
    }
}

export class Troniccon {
    set( port: string, tronic: Entity, thisArg: Entity ) {
        if (!thisArg.troniccon) thisArg.troniccon = {}; thisArg.troniccon = Object.assign( thisArg.troniccon, { [port]: tronic.tronicnum } );
    }
}

export class Tronicnum {
    set( x: string | number, y: string | number, z: string | number ) { 
        if ( Number(x) === 0 && Number(y) === 0 && Number(z) === 0 ) {
            return String(0); // 0
        }
        if (Number(z) === 0) {
            var zeroPad = ( "000" + String(y) );
            y = zeroPad.substring( zeroPad.length - 3 );
            return String(x) + String(y); // xxx0yy
        }
        return String(x) + String( Number(y) + Number(z) ); // xxxzyy
    }
}

export class Entity {
    // Common

    /**
     * name of the entity
     * 
     * this.constructor.name is used to write this property
     */
    name: string;

    /**
     * coordinates describing an entity's position in the world and rotation angle
     */
    position: Position;

    /**
     * Used to classify Tronic-like blocks that have some kind of smart function.
     * It can have 2 different values:
     * 
     * ""     - For regular blocks
     * 
     * "null" - For smart tronic-like blocks
     * 
     * Example : All tronics found in Js2tronic.tronic have a tronictype="null"
     *           As well as three exceptions in Js2tronic.block which are :
     *           GravityBlock(), FloatBlock() and SpringBlock()
     */
    tronictype?: string;

    /** 
     * false - (default) The block is set in the foreground of its current z layer
     * 
     * true - The block is set in the background of its current z layer
     */
    pushed?: boolean;

    /**
     * tronicnum of the grouping block to which this block is grouped to
     */
    group?: string | number;

    /**
     * name of the stuffable entity that is being stuffed in this entity
     * 
     * enum - Stuffable
     */
    contain?: string;

    /**
     * label that shows up when we pass the mouse over this block in the editor
     */
    comment?: string;

    /**
     * string of text contained inside this block. Most commonly used in a TronicData
     */
    text?: string;

    /**
     * can be one of 0 <fixed> | 1 <float> | 2 <fall>
     * 
     * enum - GravityState
     */
    grav?: string | number;

    /**
     * can be one of -1 <counterclockwise> | 1 <clockwise>
     * 
     * enum - DirectionState
     */
    dir?: string | number;

    /**
     * variant of an entity
     */
    load?: string;

    /**
     * 1 to 6 digit unique identifier derived from an entity's x, y, z coordinates
     * 
     * x - can be 0-399
     * 
     * y - can be 0-49
     * 
     * z - can be 0, 100, 200
     * 
     * the tronicnum is always calculated in this pattern : xxxzyy
     * 
     * Example: x: 120, y:37, z:100 would be expressed 120137
     */
    tronicnum?: string | number;

    // Block specific

    /**
     * tronicnum of the destination Js2tronic.block.Door()
     */
    door?: string | number;

    /**
     * tronicnum of the destination Js2tronic.block.TravelPipe()
     */
    pipe?: string | number;

    /**
     * name of the destination level to warp to
     */
    warp?: string;

    // Tronic specific

    /**
     * represents all the different ports by which wires can be connected
     * 
     * a connection occurs when the tronicnum of the destination tronic is set as the value of one of the ports
     * 
     * enum - TronicconPort
     */
    troniccon?: {

        /**
         * (Pink/Orange wires)
         * 
         * when there is only one flow output, "fa" is used by default
         * 
         * when there are two flow outputs, "fa" is where flow outputs when the condition is TRUE
         * 
         * enum - TronicconPort.FLOW_A 
         */
        fa?: string | number;

        /**
         * (Pink/Orange wires)
         * 
         * when there are two flow outputs, "fb" is where flow outputs when the condition is FALSE
         * 
         * enum - TronicconPort.FLOW_B
         */
        fb?: string | number;

        /**
         * (Blue wires)
         * 
         * data port usually connecting to a TronicData
         * 
         * enum - TronicconPort.DATA_A
         */
        da?: string | number;

        /**
         * (Blue wires)
         * 
         * data port usually connecting to a TronicData
         * 
         * enum - TronicconPort.DATA_B
         */
        db?: string | number;

        /**
         * (Blue wires)
         * 
         * data port usually connecting to a TronicData
         * 
         * enum - TronicconPort.DATA_O
         */
        do?: string | number;

        /**
         * (Blue wires)
         * 
         * data port usually connecting to a TronicData
         * 
         * enum - TronicconPort.DATA_Z
         */
        dz?: string | number;
    };

    /**
     * one of 0 <plus> (default when ommited) | 1 <minus> | 2 <multiply> | 3 <divide> | 4 <combine> | 5 <modulo> | 6 <exponential> | 7 <percentage>
     * 
     * enum - CalcOperator
     */
    calc?: string | number;

    /**
     * one of ">" (default when ommited) | "="
     * 
     * enum - IfOperator
     */
    if?: string;

    /**
     * TronicTwitch set bang command
     */
    bang?: string;

    /**
     * Initial state of a monster entity
     * 
     * can be one of <safe> | <danger>
     * 
     * if ommited, defaults to safe when chibi/normish, and defaults to danger for other monsters
     * 
     * enum - NpcMode
     */
    npcmode?: string;

    /**
     * initial walking direction of a monster
     * 
     * can be one of <left> | <right>
     * 
     * if ommited, defaults to left
     * 
     * enum - WalkingDirection
     */
    wdir?: string;

    /**
     * instantiate by supplying coordinates for original placement if left blank,
     * it will be placed in the first available spot outside the world (0-399, 50+, 200)
     * 
     * tip: can be moved by using .place() method.
     * @param x - 0-399 left to right horizontal axis
     * @param y - 0-49 bottom to top vertical axis (50+ places outside the playable world)
     * @param z - can be 0, 100, 200 (enum - ZLayer)
     */
    constructor ( x?: number, y?: number, z?: number ) {
        if ( !x ) x = 0;
        if ( !y ) y = 0;
        if ( !z ) z = 0;
        this.name = this.constructor.name;
        this.position = new Position( x, y, z);
        if (this.name !== "Entity") j2t.register(this);
    }

    /**
     * define the position of an entity
     * 
     * @param x - 0-399 left to right horizontal axis
     * @param y - 0-49 bottom to top vertical axis (50+ places outside the playable world)
     * @param z - can be 0, 100, 200 (enum - ZLayer)
     */
    place( x: number, y: number, z: number ) {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        return this;
    }
}