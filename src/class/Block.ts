import { Entity } from "./Entity";
import { Tronicnum } from "./Entity";

export class Block {
    BrickBlue() : BrickBlue { return new BrickBlue(); };
    BrickGlow() : BrickGlow { return new BrickGlow(); };
    BrickGreen() : BrickGreen { return new BrickGreen(); };
    BrickOld() : BrickOld { return new BrickOld(); };
    BrickRed() : BrickRed { return new BrickRed(); };
    VirtualBrick() : VirtualBrick { return new VirtualBrick(); };
    Cartridge() : Cartridge { return new Cartridge(); };
    Desert() : Desert { return new Desert(); };
    Dirt() : Dirt { return new Dirt(); };
    Moon() : Moon { return new Moon(); };
    OneWay() : OneWay { return new OneWay(); };
    Robot() : Robot { return new Robot(); };
    Saurus() : Saurus { return new Saurus(); };
    Ship() : Ship { return new Ship(); };
    BounceBlock() : BounceBlock { return new BounceBlock(); };
    ExplosiveBlock() : ExplosiveBlock { return new ExplosiveBlock(); };
    Eye() : Eye { return new Eye(); };
    FallBlock() : FallBlock { return new FallBlock(); };
    FertBox() : FertBox { return new FertBox(); };
    GravityBlock() : GravityBlock { return new GravityBlock(); };
    IceBlock() : IceBlock { return new IceBlock(); };
    InvisableBlock() : InvisableBlock { return new InvisableBlock(); };
    KaizoBlock() : KaizoBlock { return new KaizoBlock(); };
    MetalBlock() : MetalBlock { return new MetalBlock(); };
    QuestionBlock() : QuestionBlock { return new QuestionBlock(); };
    FloatBlock() : FloatBlock { return new FloatBlock(); };
    SpringBlock() : SpringBlock { return new SpringBlock(); };
    Chain() : Chain { return new Chain(); };
    ChainBend() : ChainBend { return new ChainBend(); };
    Door() : Door { return new Door(); };
    EndDoor() : EndDoor { return new EndDoor(); };
    WarpDoor() : WarpDoor { return new WarpDoor(); };
    LavaSquare() : LavaSquare { return new LavaSquare(); };
    Water() : Water { return new Water(); };
    Bushes() : Bushes { return new Bushes(); };
    Cloud() : Cloud { return new Cloud(); };
    Construction() : Construction { return new Construction(); };
    LightBulb() : LightBulb { return new LightBulb(); };
    RampLeft() : RampLeft { return new RampLeft(); };
    RampRight() : RampRight { return new RampRight(); };
    RobotJoint() : RobotJoint { return new RobotJoint(); };
    Sign() : Sign { return new Sign(); };
    Spikes() : Spikes { return new Spikes(); };
    Wheel() : Wheel { return new Wheel(); };
    PipeCurve() : PipeCurve { return new PipeCurve(); };
    PipeExtension() : PipeExtension { return new PipeExtension(); };
    PipeSteam() : PipeSteam { return new PipeSteam(); };
    PipeTop() : PipeTop { return new PipeTop(); };
    PipeWater() : PipeWater { return new PipeWater(); };
    TravelPipe() : TravelPipe { return new TravelPipe(); };
    Treadmill() : Treadmill { return new Treadmill(); };
    TreadmillRight() : TreadmillRight { return new TreadmillRight(); };
}

class BrickBlue extends Entity {
    pushToBackground(): BrickBlue { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): BrickBlue { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): BrickBlue { this.contain = stuffable; return this; }
}

class BrickGlow extends Entity {
    groupTo( tronicNum: Tronicnum ): BrickGlow { this.group = tronicNum; return this; }
    stuffWith( stuffable: string ): BrickGlow { this.contain = stuffable; return this; }
}

class BrickGreen extends Entity {
    pushToBackground(): BrickGreen { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): BrickGreen { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): BrickGreen { this.contain = stuffable; return this; }
}

class BrickOld extends Entity {
    pushToBackground(): BrickOld { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): BrickOld { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): BrickOld { this.contain = stuffable; return this; }
}

class BrickRed extends Entity {
    pushToBackground(): BrickRed { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): BrickRed { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): BrickRed { this.contain = stuffable; return this; }
}

class VirtualBrick extends Entity {
    groupTo( tronicnum: Tronicnum ): VirtualBrick { this.group = tronicnum; return this; }
}

class Cartridge extends Entity {
    pushToBackground(): Cartridge { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Cartridge { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Cartridge { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Desert extends Entity {
    pushToBackground(): Desert { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Desert { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Desert { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Dirt extends Entity {
    pushToBackground(): Dirt { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Dirt { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Dirt { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Moon extends Entity {
    pushToBackground(): Moon { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Moon { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Moon { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class OneWay extends Entity {
    pushToBackground(): OneWay { this.pushed = true; return this; }
    spriteVariant( spriteVariant?: string ): OneWay { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Robot extends Entity {
    pushToBackground(): Robot { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Robot { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Robot { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Saurus extends Entity {
    pushToBackground(): Saurus { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Saurus { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Saurus { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Ship extends Entity {
    pushToBackground(): Ship { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): Ship { this.group = tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Ship { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class BounceBlock extends Entity {
    groupTo( tronicnum: Tronicnum ): BounceBlock { this.group = tronicnum; return this; }
}

class ExplosiveBlock extends Entity {
    pushToBackground(): ExplosiveBlock { this.pushed = true; return this; }
    groupTo( tronicnum: Tronicnum ): ExplosiveBlock { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): ExplosiveBlock { this.contain = stuffable; return this; }
}

class Eye extends Entity {
    groupTo( tronicnum: Tronicnum ): Eye { this.group = tronicnum; return this; }
}

class FallBlock extends Entity {
    // No methods
}

class FertBox extends Entity {
    rotateTo( angle: string | number ): FertBox { this.position.d = angle; return this; }
    groupTo( tronicnum: Tronicnum ): FertBox { this.group = tronicnum; return this; }
    stuffWith( stuffable: string ): FertBox { this.contain = stuffable; return this; }
}

class GravityBlock extends Entity {

}

class IceBlock extends Entity {

}

class InvisableBlock extends Entity {

}

class KaizoBlock extends Entity {

}

class MetalBlock extends Entity {

}

class QuestionBlock extends Entity {

}

class FloatBlock extends Entity {

}

class SpringBlock extends Entity {

}

class Chain extends Entity {

}

class ChainBend extends Entity {
// name: "Chain Bend"
}

class Door extends Entity {

}

class EndDoor extends Entity {

}

class WarpDoor extends Entity {

}

class LavaSquare extends Entity {

}

class Water extends Entity {

}

class Bushes extends Entity {

}

class Cloud extends Entity {

}

class Construction extends Entity {

}

class LightBulb extends Entity {

}

class RampLeft extends Entity {

}

class RampRight extends Entity {

}

class RobotJoint extends Entity {

}

class Sign extends Entity {

}

class Spikes extends Entity {

}

class Wheel extends Entity {

}

class PipeCurve extends Entity {

}

class PipeExtension extends Entity {

}

class PipeSteam extends Entity {

}

class PipeTop extends Entity {

}

class PipeWater extends Entity {

}

class TravelPipe extends Entity {

}

class Treadmill extends Entity {

}

class TreadmillRight extends Entity {

}