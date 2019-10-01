import { Entity } from "./Entity";

export class Item {
    [propName: string]: any;
    Coin( x?: number, y?: number, z?: number ): Coin { return new Coin( x, y, z ); };
    OneUp( x?: number, y?: number, z?: number ): OneUp { return new OneUp( x, y, z ); };
    StarShard( x?: number, y?: number, z?: number ): StarShard { return new StarShard( x, y, z ); };
    Donut( x?: number, y?: number, z?: number ): Donut { return new Donut( x, y, z ); };
    LightBlock( x?: number, y?: number, z?: number ): LightBlock { return new LightBlock( x, y, z ); };
    AstroIcecream( x?: number, y?: number, z?: number ): AstroIcecream { return new AstroIcecream( x, y, z ); };
    BomberGet( x?: number, y?: number, z?: number ): BomberGet { return new BomberGet( x, y, z ); };
    Boot( x?: number, y?: number, z?: number ): Boot { return new Boot( x, y, z ); };
    CheeseBurger( x?: number, y?: number, z?: number ): CheeseBurger { return new CheeseBurger( x, y, z ); };
    Cookie( x?: number, y?: number, z?: number ): Cookie { return new Cookie( x, y, z ); };
    Fireball( x?: number, y?: number, z?: number ): Fireball { return new Fireball( x, y, z ); };
    GetHappy( x?: number, y?: number, z?: number ): GetHappy { return new GetHappy( x, y, z ); };
    Hat( x?: number, y?: number, z?: number ): Hat { return new Hat( x, y, z ); };
    SanicBurger( x?: number, y?: number, z?: number ): SanicBurger { return new SanicBurger( x, y, z ); };
    VideoGame( x?: number, y?: number, z?: number ): VideoGame { return new VideoGame( x, y, z ); };
    WalkGuy( x?: number, y?: number, z?: number ): WalkGuy { return new WalkGuy( x, y, z ); };
    Watermelon( x?: number, y?: number, z?: number ): Watermelon { return new Watermelon( x, y, z ); };
    Bomb( x?: number, y?: number, z?: number ): Bomb { return new Bomb( x, y, z ); };
    FireShell( x?: number, y?: number, z?: number ): FireShell { return new FireShell( x, y, z ); };
    Shell( x?: number, y?: number, z?: number ): Shell { return new Shell( x, y, z ); };
    Skateboard( x?: number, y?: number, z?: number ): Skateboard { return new Skateboard( x, y, z ); };
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
    rotate( angle: string | number ): Skateboard { this.position.d = angle; return this; }
}