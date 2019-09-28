import { Entity } from "./Entity";

export class Item {
    Coin(): Coin { return new Coin(); };
    OneUp(): OneUp { return new OneUp(); };
    StarShard(): StarShard { return new StarShard(); };
    Donut(): Donut { return new Donut(); };
    LightBlock(): LightBlock { return new LightBlock(); };
    AstroIcecream(): AstroIcecream { return new AstroIcecream(); };
    BomberGet(): BomberGet { return new BomberGet(); };
    Boot(): Boot { return new Boot(); };
    CheeseBurger(): CheeseBurger { return new CheeseBurger(); };
    Cookie(): Cookie { return new Cookie(); };
    Fireball(): Fireball { return new Fireball(); };
    GetHappy(): GetHappy { return new GetHappy(); };
    Hat(): Hat { return new Hat(); };
    SanicBurger(): SanicBurger { return new SanicBurger(); };
    VideoGame(): VideoGame { return new VideoGame(); };
    WalkGuy(): WalkGuy { return new WalkGuy(); };
    Watermelon(): Watermelon { return new Watermelon(); };
    Bomb(): Bomb { return new Bomb(); };
    FireShell(): FireShell { return new FireShell(); };
    Shell(): Shell { return new Shell(); };
    Skateboard(): Skateboard { return new Skateboard(); };
}

class Coin extends Entity {

}

class OneUp extends Entity {

}

class StarShard extends Entity {

}

class Donut extends Entity {

}

class LightBlock extends Entity {

}

class AstroIcecream extends Entity {

}

class BomberGet extends Entity {

}

class Boot extends Entity {

}

class CheeseBurger extends Entity {

}

class Cookie extends Entity {

}

class Fireball extends Entity {

}

class GetHappy extends Entity {

}

class Hat extends Entity {

}

class SanicBurger extends Entity {

}

class VideoGame extends Entity {

}

class WalkGuy extends Entity {

}

class Watermelon extends Entity {

}

class Bomb extends Entity {

}

class FireShell extends Entity {

}

class Shell extends Entity {

}

class Skateboard extends Entity {
    rotateTo( angle: string | number ): Skateboard { this.position.d = angle; return this; }
}