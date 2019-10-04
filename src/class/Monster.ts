import { Entity } from "./Entity";
import { ColorParser } from "./Utility";

export class Monster {
    [propName: string]: any;
    Blip( x?: number, y?: number, z?: number ): Blip { return new Blip( x, y, z ); }
    BlipBat( x?: number, y?: number, z?: number ): BlipBat { return new BlipBat( x, y, z ); }
    BlipGhost( x?: number, y?: number, z?: number ): BlipGhost { return new BlipGhost( x, y, z ); }
    BlipShadow( x?: number, y?: number, z?: number ): BlipShadow { return new BlipShadow( x, y, z ); }
    BouncingBlip( x?: number, y?: number, z?: number ): BouncingBlip { return new BouncingBlip( x, y, z ); }
    BrightBlip( x?: number, y?: number, z?: number ): BrightBlip { return new BrightBlip( x, y, z ); }
    CoinBlip( x?: number, y?: number, z?: number ): CoinBlip { return new CoinBlip( x, y, z ); }
    LavaBlip( x?: number, y?: number, z?: number ): LavaBlip { return new LavaBlip( x, y, z ); }
    Neko( x?: number, y?: number, z?: number ): Neko { return new Neko( x, y, z ); }
    NekoPilot( x?: number, y?: number, z?: number ): NekoPilot { return new NekoPilot( x, y, z ); }
    NekoPolice( x?: number, y?: number, z?: number ): NekoPolice { return new NekoPolice( x, y, z ); }
    NekoPoliceChief( x?: number, y?: number, z?: number ): NekoPoliceChief { return new NekoPoliceChief( x, y, z ); }
    PugAxe( x?: number, y?: number, z?: number ): PugAxe { return new PugAxe( x, y, z ); }
    GameKid( x?: number, y?: number, z?: number ): GameKid { return new GameKid( x, y, z ); }
    GameKidBlue( x?: number, y?: number, z?: number ): GameKidBlue { return new GameKidBlue( x, y, z ); }
    GameKidRed( x?: number, y?: number, z?: number ): GameKidRed { return new GameKidRed( x, y, z ); }
    Grubby( x?: number, y?: number, z?: number ): Grubby { return new Grubby( x, y, z ); }
    PrairiePiranha( x?: number, y?: number, z?: number ): PrairiePiranha { return new PrairiePiranha( x, y, z ); }
    YellowMan( x?: number, y?: number, z?: number ): YellowMan { return new YellowMan( x, y, z ); }
    Penguin( x?: number, y?: number, z?: number ): Penguin { return new Penguin( x, y, z ); }
    Chibi( x?: number, y?: number, z?: number ): Chibi { return new Chibi( x, y, z ); }
    Normish( x?: number, y?: number, z?: number ): Normish { return new Normish( x, y, z ); }
    Mummy( x?: number, y?: number, z?: number ): Mummy { return new Mummy( x, y, z ); }
    Skeleton( x?: number, y?: number, z?: number ): Skeleton { return new Skeleton( x, y, z ); }
    SkeletonKnight( x?: number, y?: number, z?: number ): SkeletonKnight { return new SkeletonKnight( x, y, z ); }
    SkeletonRed( x?: number, y?: number, z?: number ): SkeletonRed { return new SkeletonRed( x, y, z ); }
    FireSnail( x?: number, y?: number, z?: number ): FireSnail { return new FireSnail( x, y, z ); }
    Snail( x?: number, y?: number, z?: number ): Snail { return new Snail( x, y, z ); }
    SnailFly( x?: number, y?: number, z?: number ): SnailFly { return new SnailFly( x, y, z ); }
    PipeMonster( x?: number, y?: number, z?: number ): PipeMonster { return new PipeMonster( x, y, z ); }
    PipeMonsterFire( x?: number, y?: number, z?: number ): PipeMonsterFire { return new PipeMonsterFire( x, y, z ); }
    Zilla( x?: number, y?: number, z?: number ): Zilla { return new Zilla( x, y, z ); }
    ZillaBullet( x?: number, y?: number, z?: number ): ZillaBullet { return new ZillaBullet( x, y, z ); }
    ZillaJetpack( x?: number, y?: number, z?: number ): ZillaJetpack { return new ZillaJetpack( x, y, z ); }
    ZillaJump( x?: number, y?: number, z?: number ): ZillaJump { return new ZillaJump( x, y, z ); }
    ZillaVac( x?: number, y?: number, z?: number ): ZillaVac { return new ZillaVac( x, y, z ); }
    BlipKing( x?: number, y?: number, z?: number ): BlipKing { return new BlipKing( x, y, z ); }
    Spawn( x?: number, y?: number, z?: number ): Spawn { return new Spawn( x, y, z ); }
}


class Blip extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class BlipBat extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class BlipGhost extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class BlipShadow extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class BouncingBlip extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class BrightBlip extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class CoinBlip extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class LavaBlip extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class Neko extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class NekoPilot extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class NekoPolice extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class NekoPoliceChief extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class PugAxe extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class GameKid extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class GameKidBlue extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class GameKidRed extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class Grubby extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class PrairiePiranha extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class YellowMan extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class Penguin extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

// TODO: split spriteVariant in hair/shirt/color.. etc..

/**
 * default tony sprite
 * Player spawn properties
 * load:0*0*0*0.3728496,0.1798451,0*1,0.5556092,0*0.06666669,0.2964225,0.5921569*0.8862746,0.7529413,0.6039216
 * 
 * Chibi properties
 * Chibi|29,25,0,0|comment:chibicomment|load:1*1*1*0.6639093,0.4382009,0.2278817*0.7052743,0.1582107,0.1582107*0.09972114,0.3720096,0.508154*0.4829365,0.4367094,0.3850438|name:chibiname|npcmode:danger|wdir:right
 * load:<head> * <pants> * <shirt> * <hairColor> * <shirtColor> * <pantsColor> * <skinColor>
 * 
 * Normish properties
 * Normish|32,25,0,0|comment:normishcomment|load:4*4*4*0.5036194,0.37468,0.254532*0.4157186,0.05280749,0.05280749*0.2052744,0.3421237,0.4105484*0.07445753,0.0138854,0.0138854*1|name:normishname|npcmode:safe|wdir:left
 * load:<head> * <pants> * <shirt> * <hairColor> * <shirtColor> * <pantsColor> * <skinColor> * <hat>
 */

class SpriteMeta {
    head: number;
    pants: number;
    shirt: number;
    hairColor: string;
    shirtColor: string;
    pantsColor: string;
    skinColor: string;
    hat?: number;

    constructor() {
        this.head = 0;
        this.pants = 0;
        this.shirt = 0;
        this.hairColor = "0.3728496,0.1798451,0";
        this.shirtColor = "1,0.5556092,0";
        this.pantsColor = "0.06666669,0.2964225,0.5921569";
        this.skinColor = "0.8862746,0.7529413,0.6039216";
    }
}

class Chibi extends Entity {
    meta: SpriteMeta;
    
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.meta = new SpriteMeta();
    }
    private refresh() {
        this.load = "";
        this.load += String(this.meta.head) + "*";
        this.load += String(this.meta.pants) + "*";
        this.load += String(this.meta.shirt) + "*";
        this.load += String(this.meta.hairColor) + "*";
        this.load += String(this.meta.shirtColor) + "*";
        this.load += String(this.meta.pantsColor) + "*";
        this.load += String(this.meta.skinColor);
        if (this.meta.hat) this.load += "*" + String(this.meta.hat);
    }
    
    private parseColor( rawColor: string ) { return new ColorParser().set(rawColor); }

    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }

    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaHead
     */
    head( variant: number ) { this.meta.head = variant; this.refresh(); return this; }
    
    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaPants
     */
    pants( variant: number ) { this.meta.pants = variant; this.refresh(); return this; }
    
    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaShirt
     */
    shirt( variant: number ) { this.meta.shirt = variant; this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    hairColor( variant: string ) { this.meta.hairColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    shirtColor( variant: string ) { this.meta.shirtColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    pantsColor( variant: string ) { this.meta.pantsColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    skinColor( variant: string ) { this.meta.skinColor = this.parseColor(variant); this.refresh(); return this; }
}

class Normish extends Entity {
    meta: SpriteMeta;
    
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.meta = new SpriteMeta();
    }
    private refresh() {
        this.load = "";
        this.load += String(this.meta.head) + "*";
        this.load += String(this.meta.pants) + "*";
        this.load += String(this.meta.shirt) + "*";
        this.load += String(this.meta.hairColor) + "*";
        this.load += String(this.meta.shirtColor) + "*";
        this.load += String(this.meta.pantsColor) + "*";
        this.load += String(this.meta.skinColor);
        if (this.meta.hat) this.load += "*" + String(this.meta.hat);
    }
    
    private parseColor( rawColor: string ) { return new ColorParser().set(rawColor); }

    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }

    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaHead
     */
    head( variant: number ) { this.meta.head = variant; this.refresh(); return this; }
    
    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaPants
     */
    pants( variant: number ) { this.meta.pants = variant; this.refresh(); return this; }
    
    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaShirt
     */
    shirt( variant: number ) { this.meta.shirt = variant; this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    hairColor( variant: string ) { this.meta.hairColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    shirtColor( variant: string ) { this.meta.shirtColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    pantsColor( variant: string ) { this.meta.pantsColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    skinColor( variant: string ) { this.meta.skinColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * normish npc can wear hats ranging from 0-13
     * @param variant - enum MetaHat
     */
    hat( variant: number ) { this.meta.hat = variant; this.refresh(); return this; }
}

class Mummy extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class Skeleton extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class SkeletonKnight extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class SkeletonRed extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class FireSnail extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class Snail extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class SnailFly extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class PipeMonster extends Entity {
    rotate( angle: string | number ): PipeMonster { this.position.d = angle; return this; }
    groupTo( tronicnum: string | number ): PipeMonster { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): PipeMonster { this.contain = stuffable; return this; }
}

class PipeMonsterFire extends Entity {
    rotate( angle: string | number ): PipeMonsterFire { this.position.d = angle; return this; }
    groupTo( tronicnum: string | number ): PipeMonsterFire { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): PipeMonsterFire { this.contain = stuffable; return this; }
}

class Zilla extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class ZillaBullet extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class ZillaJetpack extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class ZillaJump extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class ZillaVac extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
}

class BlipKing extends Entity {
    /**
     * set npcmode to <safe> or <danger>
     * @param npcmode - enum NpcMode
     */
    mode( npcmode: string ) { this.npcmode = npcmode; return this; }

    /**
     * set walking direction to <left> or <right>
     * @param direction - enum WalkingDirection
     */
    walk( direction: string ) { this.wdir = direction; return this; }
    stuffWith( stuffable: string ): BlipKing { this.contain = stuffable; return this; }
}

class Spawn extends Entity {
    meta: SpriteMeta;
    
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.name = "spawn";
        this.meta = new SpriteMeta();
    }
    private refresh() {
        this.load = "";
        this.load += String(this.meta.head) + "*";
        this.load += String(this.meta.pants) + "*";
        this.load += String(this.meta.shirt) + "*";
        this.load += String(this.meta.hairColor) + "*";
        this.load += String(this.meta.shirtColor) + "*";
        this.load += String(this.meta.pantsColor) + "*";
        this.load += String(this.meta.skinColor);
    }
    
    private parseColor( rawColor: string ) { return new ColorParser().set(rawColor); }

    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaHead
     */
    head( variant: number ) { this.meta.head = variant; this.refresh(); return this; }
    
    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaPants
     */
    pants( variant: number ) { this.meta.pants = variant; this.refresh(); return this; }
    
    /**
     * head variant ranging from 0-6
     * @param variant - enum MetaShirt
     */
    shirt( variant: number ) { this.meta.shirt = variant; this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    hairColor( variant: string ) { this.meta.hairColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    shirtColor( variant: string ) { this.meta.shirtColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    pantsColor( variant: string ) { this.meta.pantsColor = this.parseColor(variant); this.refresh(); return this; }

    /**
     * there are 3 valid formats for defining colors:
     * 
     * 1) enum - Colors
     * 
     * 2) 6 digit hex rgb values - "#AF325C" or "#af325c" or "AF325C" or "af325c"
     * 
     * 3) tronic compatible rgb values expressed by a value between 0(black) and 1(white) - "0,0.243519,1"
     * 
     * @param variant - string representing the desired color
     */
    skinColor( variant: string ) { this.meta.skinColor = this.parseColor(variant); this.refresh(); return this; }
}