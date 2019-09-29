import { Entity } from "./Entity";
import { Tronicnum } from "./Entity";

export class Block {
    BrickBlue(): BrickBlue { return new BrickBlue(); };
    BrickGlow(): BrickGlow { return new BrickGlow(); };
    BrickGreen(): BrickGreen { return new BrickGreen(); };
    BrickOld(): BrickOld { return new BrickOld(); };
    BrickRed(): BrickRed { return new BrickRed(); };
    VirtualBrick(): VirtualBrick { return new VirtualBrick(); };
    Cartridge(): Cartridge { return new Cartridge(); };
    Desert(): Desert { return new Desert(); };
    Dirt(): Dirt { return new Dirt(); };
    Moon(): Moon { return new Moon(); };
    OneWay(): OneWay { return new OneWay(); };
    Robot(): Robot { return new Robot(); };
    Saurus(): Saurus { return new Saurus(); };
    Ship(): Ship { return new Ship(); };
    BounceBlock(): BounceBlock { return new BounceBlock(); };
    ExplosiveBlock(): ExplosiveBlock { return new ExplosiveBlock(); };
    Eye(): Eye { return new Eye(); };
    FallBlock(): FallBlock { return new FallBlock(); };
    FertBox(): FertBox { return new FertBox(); };
    GravityBlock(): GravityBlock { return new GravityBlock(); };
    IceBlock(): IceBlock { return new IceBlock(); };
    InvisableBlock(): InvisableBlock { return new InvisableBlock(); };
    KaizoBlock(): KaizoBlock { return new KaizoBlock(); };
    MetalBlock(): MetalBlock { return new MetalBlock(); };
    QuestionBlock(): QuestionBlock { return new QuestionBlock(); };
    FloatBlock(): FloatBlock { return new FloatBlock(); };
    SpringBlock(): SpringBlock { return new SpringBlock(); };
    Chain(): Chain { return new Chain(); };
    ChainBend(): ChainBend { return new ChainBend(); };
    Door(): Door { return new Door(); };
    EndDoor(): EndDoor { return new EndDoor(); };
    WarpDoor(): WarpDoor { return new WarpDoor(); };
    LavaSquare(): LavaSquare { return new LavaSquare(); };
    Water(): Water { return new Water(); };
    Bushes(): Bushes { return new Bushes(); };
    Cloud(): Cloud { return new Cloud(); };
    Construction(): Construction { return new Construction(); };
    LightBulb(): LightBulb { return new LightBulb(); };
    RampLeft(): RampLeft { return new RampLeft(); };
    RampRight(): RampRight { return new RampRight(); };
    RobotJoint(): RobotJoint { return new RobotJoint(); };
    Sign(): Sign { return new Sign(); };
    Spikes(): Spikes { return new Spikes(); };
    Wheel(): Wheel { return new Wheel(); };
    PipeCurve(): PipeCurve { return new PipeCurve(); };
    PipeExtension(): PipeExtension { return new PipeExtension(); };
    PipeSteam(): PipeSteam { return new PipeSteam(); };
    PipeTop(): PipeTop { return new PipeTop(); };
    PipeWater(): PipeWater { return new PipeWater(); };
    TravelPipe(): TravelPipe { return new TravelPipe(); };
    Treadmill(): Treadmill { return new Treadmill(); };
    TreadmillRight(): TreadmillRight { return new TreadmillRight(); };
}

class BrickBlue extends Entity {
    pushToBackground(): BrickBlue { this.pushed = true; return this; }
    groupTo( tronic: Entity ): BrickBlue { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): BrickBlue { this.contain = stuffable; return this; }
}

class BrickGlow extends Entity {
    groupTo( tronic: Entity ): BrickGlow { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): BrickGlow { this.contain = stuffable; return this; }
}

class BrickGreen extends Entity {
    pushToBackground(): BrickGreen { this.pushed = true; return this; }
    groupTo( tronic: Entity ): BrickGreen { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): BrickGreen { this.contain = stuffable; return this; }
}

class BrickOld extends Entity {
    pushToBackground(): BrickOld { this.pushed = true; return this; }
    groupTo( tronic: Entity ): BrickOld { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): BrickOld { this.contain = stuffable; return this; }
}

class BrickRed extends Entity {
    pushToBackground(): BrickRed { this.pushed = true; return this; }
    groupTo( tronic: Entity ): BrickRed { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): BrickRed { this.contain = stuffable; return this; }
}

class VirtualBrick extends Entity {
    groupTo( tronic: Entity ): VirtualBrick { this.group = tronic.tronicnum; return this; }
}

class Cartridge extends Entity {
    pushToBackground(): Cartridge { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Cartridge { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Cartridge { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Desert extends Entity {
    pushToBackground(): Desert { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Desert { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Desert { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Dirt extends Entity {
    pushToBackground(): Dirt { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Dirt { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Dirt { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Moon extends Entity {
    pushToBackground(): Moon { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Moon { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Moon { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class OneWay extends Entity {
    pushToBackground(): OneWay { this.pushed = true; return this; }
    spriteVariant( spriteVariant?: string ): OneWay { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Robot extends Entity {
    pushToBackground(): Robot { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Robot { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Robot { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Saurus extends Entity {
    pushToBackground(): Saurus { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Saurus { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Saurus { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class Ship extends Entity {
    pushToBackground(): Ship { this.pushed = true; return this; }
    groupTo( tronic: Entity ): Ship { this.group = tronic.tronicnum; return this; }
    spriteVariant( spriteVariant?: string ): Ship { if ( spriteVariant ) { this.load = spriteVariant }; return this; }
}

class BounceBlock extends Entity {
    groupTo( tronic: Entity ): BounceBlock { this.group = tronic.tronicnum; return this; }
}

class ExplosiveBlock extends Entity {
    pushToBackground(): ExplosiveBlock { this.pushed = true; return this; }
    groupTo( tronic: Entity ): ExplosiveBlock { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): ExplosiveBlock { this.contain = stuffable; return this; }
}

class Eye extends Entity {
    groupTo( tronic: Entity ): Eye { this.group = tronic.tronicnum; return this; }
}

class FallBlock extends Entity {
    // No methods
}

class FertBox extends Entity {
    rotate( angle: string | number ): FertBox { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): FertBox { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): FertBox { this.contain = stuffable; return this; }
}

class GravityBlock extends Entity {
    constructor() {
        super();
        this.grav = "2"; // This cannot be toggled to FIXED or FLOAT, only FALL
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): GravityBlock { this.pushed = true; return this; }
    label( label: string ): GravityBlock { this.comment = label; return this; }
}

class IceBlock extends Entity {
    groupTo( tronic: Entity ): IceBlock { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): IceBlock { this.contain = stuffable; return this; }
}

class InvisableBlock extends Entity {
    rotate( angle: string | number ): InvisableBlock { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): InvisableBlock { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): InvisableBlock { this.contain = stuffable; return this; }
}

class KaizoBlock extends Entity {
    rotate( angle: string | number ): KaizoBlock { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): KaizoBlock { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): KaizoBlock { this.contain = stuffable; return this; }
}

class MetalBlock extends Entity {
    groupTo( tronic: Entity ): MetalBlock { this.group = tronic.tronicnum; return this; }
}

class QuestionBlock extends Entity {
    rotate( angle: string | number ): QuestionBlock { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): QuestionBlock { this.group = tronic.tronicnum; return this; }
    stuffWith( stuffable: string ): QuestionBlock { this.contain = stuffable; return this; }
}

class FloatBlock extends Entity {
    constructor() {
        super();
        this.tronictype = "";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): FloatBlock { this.position.d = angle; return this; }
}

class SpringBlock extends Entity {
    constructor() {
        super();
        this.tronictype = "";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): SpringBlock { this.position.d = angle; return this; }
}

class Chain extends Entity {
    pushToBackground(): Chain { this.pushed = true; return this; }
    rotate( angle: string | number ): Chain { this.position.d = angle; return this; }
}

class ChainBend extends Entity {
    constructor() {
        super();
        this.name = "Chain Bend"; // exceptionally has a space in name, therefore the constructor.name is not used here
    }
    pushToBackground(): ChainBend { this.pushed = true; return this; }
    rotate( angle: string | number ): ChainBend { this.position.d = angle; return this; }
}

// TODO Must make 2 doors and have their tronicnum refer each other
class Door extends Entity {
    destinationDoor( door: Entity ): Door { this.door = door.tronicnum; return this; }
    groupTo( tronic: Entity ): Door { this.group = tronic.tronicnum; return this; }
    label( label: string ): Door { this.comment = label; return this; }
}

class EndDoor extends Entity {
    groupTo( tronic: Entity ): EndDoor { this.group = tronic.tronicnum; return this; }
    label( label: string ): EndDoor { this.comment = label; return this; }
}

class WarpDoor extends Entity {
    groupTo( tronic: Entity ): WarpDoor { this.group = tronic.tronicnum; return this; }
    label( label: string ): WarpDoor { this.comment = label; return this; }
    warpTo( level: string ): WarpDoor { this.warp = level; return this; }
}

class LavaSquare extends Entity {
    constructor() {
        super();
        this.load = "t"; // Lava always spawn with a load option of "t" (for transparent ?)
    }
    groupTo( tronic: Entity ): LavaSquare { this.group = tronic.tronicnum; return this; }
}

class Water extends Entity {
    constructor() {
        super();
        this.load = "t"; // Water always spawn with a load option of "t" (for transparent ?)
    }
    groupTo( tronic: Entity ): Water { this.group = tronic.tronicnum; return this; }
}

// Takes up 1x4 area. Coords represent its base, therefore it occupies 3 more squares in the direction of its rotation.
class Bushes extends Entity {
    rotate( angle: string | number ): Bushes { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): Bushes { this.group = tronic.tronicnum; return this; }
}

// Takes up 4x1 area, Coords represent the 3rd block from the left, therefore it occupies 2 squares left and 1 square right of where it is placed
// Even if it can be rotated, it stays in the same shape, therefore I do not include a parameter to affect rotation.
class Cloud extends Entity {
    
}

class Construction extends Entity {
    pushToBackground(): Construction { this.pushed = true; return this; }
    rotate( angle: string | number ): Construction { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): Construction { this.group = tronic.tronicnum; return this; }
}

class LightBulb extends Entity {
    pushToBackground(): LightBulb { this.pushed = true; return this; }
    rotate( angle: string | number ): LightBulb { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): LightBulb { this.group = tronic.tronicnum; return this; }
}

// when placed it occupies a 1x2 area. Coords represent the left-most of the two squares when rotation is 0. (Yellow block, angled like a front-slash)
class RampLeft extends Entity {
    rotate( angle: string | number ): RampLeft { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): RampLeft { this.group = tronic.tronicnum; return this; }
}

// when placed it occupies a 1x2 area. Coords represent the right-most of the two squares when rotation is 0. (Blue block, angled like a back-slash)
class RampRight extends Entity {
    rotate( angle: string | number ): RampRight { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): RampRight { this.group = tronic.tronicnum; return this; }
}

// when placed it occupies a 1x2 area. Coords represent the right-most of the two squares when rotation is 0.
		// The left-most square can be overlayed on top of a pinball flipper's pointy side to create an articulate joint (when in 2 seperate block groups).
class RobotJoint extends Entity {
    rotate( angle: string | number ): RobotJoint { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): RobotJoint { this.group = tronic.tronicnum; return this; }
}

class Sign extends Entity {
    rotate( angle: string | number ): Sign { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): Sign { this.group = tronic.tronicnum; return this; }
    label( label: string ): Sign { this.comment = label; return this; }
    message( message: string ): Sign { this.text = message; return this; }
}

class Spikes extends Entity {
    rotate( angle: string | number ): Spikes { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): Spikes { this.group = tronic.tronicnum; return this; }
}

class Wheel extends Entity {
    groupTo( tronic: Entity ): Wheel { this.group = tronic.tronicnum; return this; }
}

// takes 2x2 area. Coords represent the top left corner. rotation 0 (bottom-left corner) rotation 90 (bottom-right corner) rotation 180 (top-right corner) rotation 270 (top-left corner)
class PipeCurve extends Entity {
    rotate( angle: string | number ): PipeCurve { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): PipeCurve { this.group = tronic.tronicnum; return this; }
}

// takes 2x2 area. Coords represent the top left corner when rotation 0. The other blocks rotate around this one. rotation 90 (bottom left) 180 (bottom right) 270 (top right)
class PipeExtension extends Entity {
    rotate( angle: string | number ): PipeExtension { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): PipeExtension { this.group = tronic.tronicnum; return this; }
}

// takes 2x2 area. Coords represent the bottom left corner when rotation 0 steam goes up. The other blocks rotate around this one. rotation 90 (bottom right) 180 (top right) 270 (bottom left)
class PipeSteam extends Entity {
    rotate( angle: string | number ): PipeSteam { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): PipeSteam { this.group = tronic.tronicnum; return this; }
}

// takes 2x2 area. Coords represent the bottom left corner when rotation 0. The other blocks rotate around this one. rotation 90 (bottom right) 180 (top right) 270 (bottom left)
class PipeTop extends Entity {
    rotate( angle: string | number ): PipeTop { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): PipeTop { this.group = tronic.tronicnum; return this; }
}

// takes 2x2 area. Coords represent the bottom left corner when rotation 0 water comes out top. The other blocks rotate around this one. rotation 90 (bottom right) 180 (top right) 270 (bottom left)
class PipeWater extends Entity {
    rotate( angle: string | number ): PipeWater { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): PipeWater { this.group = tronic.tronicnum; return this; }
}

// takes 2x2 area. Exactly like PipeTop but spawns a 2nd identical pipe in the 2x2 area to the left of the coords.
/**
*	Depending on its rotation value, the destination pipe spawns at a different coords(x,y) offset and always spawns upright like PipeTop.
*	rotation 0 - (-2,0) rotation 90 - (0,-2) rotation 180 - (2,0) rotation 270 - (0,2) 
*
*	If you don't know the destinationPipeNum yet because it doesn't exist. It can be skipped, and be defined at a later point.
*	It is however necessary to be assigned a valid destination before the output is generated.
*	Bug: if placed next to map edge, its actually possible to get transported outside the map.
*   Bug: if you push both travel pipes to the background, they dissapear. Only the initial pipe can be pushed.
*/

// TODO: provide a way to spawn 2 pipes that both have each other's tronicnum in their pipe property
class TravelPipe extends Entity {
    pushToBackground(): TravelPipe { this.pushed = true; return this; }
    rotate( angle: string | number ): TravelPipe { this.position.d = angle; return this; }
    destinationPipe( pipe: Entity ): TravelPipe { this.pipe = pipe.tronicnum; return this; }
    groupTo( tronic: Entity ): TravelPipe { this.group = tronic.tronicnum; return this; }
    label( label: string ): TravelPipe { this.comment = label; return this; }
}

class Treadmill extends Entity {
    rotate( angle: string | number ): Treadmill { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): Treadmill { this.group = tronic.tronicnum; return this; }
}

class TreadmillRight extends Entity {
    rotate( angle: string | number ): TreadmillRight { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TreadmillRight { this.group = tronic.tronicnum; return this; }
}