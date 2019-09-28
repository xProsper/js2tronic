class Position {
    x: string | number;
    y: string | number;
    z: string | number;
    d: string | number;

    constructor () {
        this.x = 0;
        this.y = 0;
        this.z = 0; // one of 000, 100, 200
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
    update( axis: string, newValue: string | number, thisArg: Entity ) {
        if (axis === "x") thisArg.position[axis] = newValue;
        if (axis === "y") thisArg.position[axis] = newValue;
        if (axis === "z") thisArg.position[axis] = newValue;
        
        if ( thisArg.tronicnum ) {
            thisArg.tronicnum = this.set( thisArg.position.x, thisArg.position.y, thisArg.position.z );
        }
    }
}

export class Entity {
    // Common
    name: string;
    position: Position;
    tronictype?: string;
    pushed?: boolean;
    group?: string | number;
    contain?: string;
    comment?: string;
    text?: string;
    grav?: string | number; // 0 <fixed> | 1 <float> | 2 <fall>
    dir?: string | number; // -1 <counterclockwise> | 1 <clockwise>
    load?: string;
    tronicnum?: string | number; // when used : new Tronicnum(this.position.x, this.position.y, this.position.z)

    // Block specific
    door?: string | number;
    pipe?: string | number;
    warp?: string;

    // Tronic specific
    troniccon?: {
        fa?: string | number;
        fb?: string | number;
        da?: string | number;
        db?: string | number;
        do?: string | number;
        dz?: string | number;
    };
    calc?: string | number; // undefined <plus> | 1 <minus> | 2 <multiply> | 3 <divide> | 4 <combine> | 5 <modulo> | 6 <exponential> | 7 <percentage>
    if?: string; // ">" | "="
    bang?: string; // TronicTwitch set bang command

    constructor () {
        this.name = this.constructor.name;
        this.position = new Position;
    }
    x( xCoord: string | number ) { new Tronicnum().update( "x", xCoord, this ); return this; };
    y( yCoord: string | number ) { new Tronicnum().update( "y", yCoord, this ); return this; };
    z( zCoord: string | number ) { new Tronicnum().update( "z", zCoord, this ); return this; };
}