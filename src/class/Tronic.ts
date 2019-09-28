import { Entity } from "./Entity";
import { Tronicnum } from "./Entity";
import { Troniccon } from "./Entity";
import { TronicconPort } from "../enum/TronicconPort";

export class Tronic {
    TronicDelay(): TronicDelay { return new TronicDelay(); };
    TronicIf(): TronicIf { return new TronicIf(); };
    TronicBurnout(): TronicBurnout { return new TronicBurnout(); };
    TronicData(): TronicData { return new TronicData(); };
    TronicRedData(): TronicRedData { return new TronicRedData(); };
    TronicBrick(): TronicBrick { return new TronicBrick(); };
    TronicBumper(): TronicBumper { return new TronicBumper(); };
    TronicDpad(): TronicDpad { return new TronicDpad(); };
    TronicPulse(): TronicPulse { return new TronicPulse(); };
    TronicPushButton(): TronicPushButton { return new TronicPushButton(); };
    TronicTwitch(): TronicTwitch { return new TronicTwitch(); };
    TronicArea(): TronicArea { return new TronicArea(); };
    TronicPipeArea(): TronicPipeArea { return new TronicPipeArea(); };
    TronicProximity(): TronicProximity { return new TronicProximity(); };
    TronicLoadLevel(): TronicLoadLevel { return new TronicLoadLevel(); };
    TronicMusic(): TronicMusic { return new TronicMusic(); };
    TronicSky(): TronicSky { return new TronicSky(); };
    TronicStarfall(): TronicStarfall { return new TronicStarfall(); };
    TronicBoss(): TronicBoss { return new TronicBoss(); };
    TronicDeadCheck(): TronicDeadCheck { return new TronicDeadCheck(); };
    TronicDialog(): TronicDialog { return new TronicDialog(); };
    TronicNPC(): TronicNPC { return new TronicNPC(); };
    TronicTalk(): TronicTalk { return new TronicTalk(); };
    TronicThingCount(): TronicThingCount { return new TronicThingCount(); };
    TronicWalk(): TronicWalk { return new TronicWalk(); };
    TronicDetonator(): TronicDetonator { return new TronicDetonator(); };
    TronicDisplay(): TronicDisplay { return new TronicDisplay(); };
    TronicGrabber(): TronicGrabber { return new TronicGrabber(); };
    TronicGravity(): TronicGravity { return new TronicGravity(); };
    TronicLight(): TronicLight { return new TronicLight(); };
    TronicMove(): TronicMove { return new TronicMove(); };
    TronicPixel(): TronicPixel { return new TronicPixel(); };
    TronicSpawn(): TronicSpawn { return new TronicSpawn(); };
    TronicFlipper(): TronicFlipper { return new TronicFlipper(); };
    TronicSpinner(): TronicSpinner { return new TronicSpinner(); };
    TronicStepper(): TronicStepper { return new TronicStepper(); };
    Thruster(): Thruster { return new Thruster(); };
    TronicFan(): TronicFan { return new TronicFan(); };
    TronicMotor(): TronicMotor { return new TronicMotor(); };
    TronicTreadmill(): TronicTreadmill { return new TronicTreadmill(); };
    TronicCalc(): TronicCalc { return new TronicCalc(); };
    TronicContains(): TronicContains { return new TronicContains(); };
    TronicDistance(): TronicDistance { return new TronicDistance(); };
    TronicRandom(): TronicRandom { return new TronicRandom(); };
    TronicReplace(): TronicReplace { return new TronicReplace(); };
    TronicSet(): TronicSet { return new TronicSet(); };
    TronicArrayReplace(): TronicArrayReplace { return new TronicArrayReplace(); };
    TronicSplit(): TronicSplit { return new TronicSplit(); };
    TronicSplitCount(): TronicSplitCount { return new TronicSplitCount(); };
}

class TronicDelay extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDelay { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicDelay { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDelay { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDelay { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicDelay { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    delayInSeconds( tronic: Entity ): TronicDelay { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}


/**
*	ifOperator - ">" or "="
*/
class TronicIf extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicIf { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicIf { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicIf { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicIf { this.comment = label; return this; }

    ifOperator( operator: string ) { this.if = operator; return this; }

    trueFlowTo( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    falseFlowTo( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.FLOW_B, tronic, this ); return this; }
    a( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    b( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    
}

class TronicBurnout extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicBurnout { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicBurnout { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBurnout { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBurnout { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicBurnout { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicData extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicData { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicData { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicData { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicData { this.comment = label; return this; }
    data( data: string ): TronicData { this.text = data; return this; }
}

class TronicRedData extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicRedData { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicRedData { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicRedData { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicRedData { this.comment = label; return this; }
    data( data: string ): TronicRedData { this.text = data; return this; }
}

class TronicBrick extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotateTo( angle: string | number ): TronicBrick { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBrick { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBrick { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicBrick { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicBumper extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotateTo( angle: string | number ): TronicBumper { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBumper { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBumper { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicBumper { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicDpad extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDpad { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicDpad { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDpad { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDpad { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicDpad { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    directionOut( tronic: Entity ): TronicDpad { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicPulse extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicPulse { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicPulse { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPulse { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPulse { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPulse { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    delayInSeconds( tronic: Entity ): TronicPulse { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    toggleTrueFalse( tronic: Entity ): TronicPulse { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicPushButton extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotateTo( angle: string | number ): TronicPushButton { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPushButton { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPushButton { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPushButton { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicTwitch extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicTwitch { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicTwitch { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicTwitch { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicTwitch { this.comment = label; return this; }
    bangCommand( command: string ): TronicTwitch { this.bang = command; return this; }
    
    flowTo( tronic: Entity ): TronicTwitch { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    commandOutput( tronic: Entity ): TronicTwitch { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// detects a 3x5 box above itself
class TronicArea extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicArea { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicArea { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicArea { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicArea { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicArea { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicArea { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// coords are bottom left of a 2x3 detection area at rotation 0 (rotate counterclockwise)
class TronicPipeArea extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicPipeArea { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicPipeArea { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPipeArea { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPipeArea { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPipeArea { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicPipeArea { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicProximity extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicProximity { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicProximity { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicProximity { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicProximity { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicProximity { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicProximity { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicLoadLevel extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicLoadLevel { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicLoadLevel { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicLoadLevel { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicLoadLevel { this.comment = label; return this; }
    
    levelName( tronic: Entity ): TronicLoadLevel { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicMusic extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicMusic { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicMusic { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicMusic { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicMusic { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicMusic { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    trackNum( tronic: Entity ): TronicMusic { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicSky extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicSky { this.pushed = true; return this; }
    rotateTo( angle: string | number ): TronicSky { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSky { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicSky { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicSky { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    backgroundColor( tronic: Entity ): TronicSky { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    lightColor( tronic: Entity ): TronicSky { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicStarfall extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicBoss extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicDeadCheck extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicDialog extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicNPC extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicTalk extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicThingCount extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicWalk extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicDetonator extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicDisplay extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicGrabber extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicGravity extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicLight extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicMove extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicPixel extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicSpawn extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicFlipper extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicSpinner extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicStepper extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class Thruster extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicFan extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicMotor extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicTreadmill extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicCalc extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicContains extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicDistance extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicRandom extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicReplace extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicSet extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicArrayReplace extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicSplit extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}

class TronicSplitCount extends Entity {
    constructor() {
        super();
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
}