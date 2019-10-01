import { Entity } from "./Entity";

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
}


class Blip extends Entity {

}

class BlipBat extends Entity {

}

class BlipGhost extends Entity {

}

class BlipShadow extends Entity {

}

class BouncingBlip extends Entity {

}

class BrightBlip extends Entity {

}

class CoinBlip extends Entity {

}

class LavaBlip extends Entity {

}

class Neko extends Entity {

}

class NekoPilot extends Entity {

}

class NekoPolice extends Entity {

}

class NekoPoliceChief extends Entity {

}

class PugAxe extends Entity {

}

class GameKid extends Entity {

}

class GameKidBlue extends Entity {

}

class GameKidRed extends Entity {

}

class Grubby extends Entity {

}

class PrairiePiranha extends Entity {

}

class YellowMan extends Entity {

}

class Penguin extends Entity {

}

// TODO: split spriteVariant in hair/shirt/color.. etc..
class Chibi extends Entity {
    spriteVariant( spriteVariant?: string ): Chibi { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Normish extends Entity {
    spriteVariant( spriteVariant?: string ): Chibi { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Mummy extends Entity {

}

class Skeleton extends Entity {

}

class SkeletonKnight extends Entity {

}

class SkeletonRed extends Entity {

}

class FireSnail extends Entity {

}

class Snail extends Entity {

}

class SnailFly extends Entity {

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

}

class ZillaBullet extends Entity {

}

class ZillaJetpack extends Entity {

}

class ZillaJump extends Entity {

}

class ZillaVac extends Entity {

}

class BlipKing extends Entity {
    stuffWith( stuffable: string ): BlipKing { this.contain = stuffable; return this; }
}