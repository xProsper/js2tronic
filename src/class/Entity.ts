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

class Troniccon {
    fa?: Tronicnum;
    fb?: Tronicnum;
    da?: Tronicnum;
    db?: Tronicnum;
    do?: Tronicnum;
    dz?: Tronicnum;
}

export class Tronicnum {
    constructor (x: string | number, y: string | number, z: string | number) {
        if ( Number(x) === 0 && Number(y) === 0 && Number(z) === 0 ) {
            return String(0); // 0
        }
        if (Number(z) === 0) {
            var zeroPad = ("000" + String(y));
            y = zeroPad.substring(zeroPad.length - 3);
            return String(x) + String(y); // xxx0yy
        }
        return String(x) + String(Number(y) + Number(z)); // xxxzyy
    }
}

export class Entity {
    // Common
    name: string;
    position: Position;
    tronictype?: string;
    pushed?: boolean;
    group?: Tronicnum;
    contain?: string;
    comment?: string;
    text?: string;
    grav?: string | number; // 0 <fixed> | 1 <float> | 2 <fall>
    dir?: string | number; // -1 <counterclockwise> | 1 <clockwise>
    load?: string;
    tronicnum?: Tronicnum; // when used : new Tronicnum(this.position.x, this.position.y, this.position.z)

    // Block specific
    door?: Tronicnum;
    pipe?: Tronicnum;
    warp?: string;

    // Tronic specific
    troniccon?: Troniccon;
    calc?: string | number; // undefined <plus> | 1 <minus> | 2 <multiply> | 3 <divide> | 4 <combine> | 5 <modulo> | 6 <exponential> | 7 <percentage>
    if?: string; // ">" | "="
    bang?: string; // TronicTwitch set bang command

    constructor () {
        this.name = this.constructor.name;
        this.position = new Position;
    }

    // TODO Add method to change position
}