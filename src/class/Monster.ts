import { Entity } from "./Entity";

export class Monster {
    Blip(): Blip { return new Blip(); }
    BlipBat(): BlipBat { return new BlipBat(); }
    BlipGhost(): BlipGhost { return new BlipGhost(); }
    BlipShadow(): BlipShadow { return new BlipShadow(); }
    BouncingBlip(): BouncingBlip { return new BouncingBlip(); }
    BrightBlip(): BrightBlip { return new BrightBlip(); }
    CoinBlip(): CoinBlip { return new CoinBlip(); }
    LavaBlip(): LavaBlip { return new LavaBlip(); }
    Neko(): Neko { return new Neko(); }
    NekoPilot(): NekoPilot { return new NekoPilot(); }
    NekoPolice(): NekoPolice { return new NekoPolice(); }
    NekoPoliceChief(): NekoPoliceChief { return new NekoPoliceChief(); }
    PugAxe(): PugAxe { return new PugAxe(); }
    GameKid(): GameKid { return new GameKid(); }
    GameKidBlue(): GameKidBlue { return new GameKidBlue(); }
    GameKidRed(): GameKidRed { return new GameKidRed(); }
    Grubby(): Grubby { return new Grubby(); }
    PrairiePiranha(): PrairiePiranha { return new PrairiePiranha(); }
    YellowMan(): YellowMan { return new YellowMan(); }
    Penguin(): Penguin { return new Penguin(); }
    Chibi(): Chibi { return new Chibi(); }
    Normish(): Normish { return new Normish(); }
    Mummy(): Mummy { return new Mummy(); }
    Skeleton(): Skeleton { return new Skeleton(); }
    SkeletonKnight(): SkeletonKnight { return new SkeletonKnight(); }
    SkeletonRed(): SkeletonRed { return new SkeletonRed(); }
    FireSnail(): FireSnail { return new FireSnail(); }
    Snail(): Snail { return new Snail(); }
    SnailFly(): SnailFly { return new SnailFly(); }
    PipeMonster(): PipeMonster { return new PipeMonster(); }
    PipeMonsterFire(): PipeMonsterFire { return new PipeMonsterFire(); }
    Zilla(): Zilla { return new Zilla(); }
    ZillaBullet(): ZillaBullet { return new ZillaBullet(); }
    ZillaJetpack(): ZillaJetpack { return new ZillaJetpack(); }
    ZillaJump(): ZillaJump { return new ZillaJump(); }
    ZillaVac(): ZillaVac { return new ZillaVac(); }
    BlipKing(): BlipKing { return new BlipKing(); }
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