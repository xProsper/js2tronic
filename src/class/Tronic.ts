import { Entity } from "./Entity";
import { Tronicnum } from "./Entity";
import { Troniccon } from "./Entity";
import { TronicconPort } from "../enum/TronicconPort";

export class Tronic {
    [propName: string]: any;
    TronicDelay( x?: number, y?: number, z?: number ): TronicDelay { return new TronicDelay( x, y, z ); };
    TronicIf( x?: number, y?: number, z?: number ): TronicIf { return new TronicIf( x, y, z ); };
    TronicBurnout( x?: number, y?: number, z?: number ): TronicBurnout { return new TronicBurnout( x, y, z ); };
    TronicData( x?: number, y?: number, z?: number ): TronicData { return new TronicData( x, y, z ); };
    TronicRedData( x?: number, y?: number, z?: number ): TronicRedData { return new TronicRedData( x, y, z ); };
    TronicBrick( x?: number, y?: number, z?: number ): TronicBrick { return new TronicBrick( x, y, z ); };
    TronicBumper( x?: number, y?: number, z?: number ): TronicBumper { return new TronicBumper( x, y, z ); };
    TronicDpad( x?: number, y?: number, z?: number ): TronicDpad { return new TronicDpad( x, y, z ); };
    TronicPulse( x?: number, y?: number, z?: number ): TronicPulse { return new TronicPulse( x, y, z ); };
    TronicPushButton( x?: number, y?: number, z?: number ): TronicPushButton { return new TronicPushButton( x, y, z ); };
    TronicTwitch( x?: number, y?: number, z?: number ): TronicTwitch { return new TronicTwitch( x, y, z ); };
    TronicArea( x?: number, y?: number, z?: number ): TronicArea { return new TronicArea( x, y, z ); };
    TronicPipeArea( x?: number, y?: number, z?: number ): TronicPipeArea { return new TronicPipeArea( x, y, z ); };
    TronicProximity( x?: number, y?: number, z?: number ): TronicProximity { return new TronicProximity( x, y, z ); };
    TronicLoadLevel( x?: number, y?: number, z?: number ): TronicLoadLevel { return new TronicLoadLevel( x, y, z ); };
    TronicMusic( x?: number, y?: number, z?: number ): TronicMusic { return new TronicMusic( x, y, z ); };
    TronicSky( x?: number, y?: number, z?: number ): TronicSky { return new TronicSky( x, y, z ); };
    TronicStarfall( x?: number, y?: number, z?: number ): TronicStarfall { return new TronicStarfall( x, y, z ); };
    TronicBoss( x?: number, y?: number, z?: number ): TronicBoss { return new TronicBoss( x, y, z ); };
    TronicDeadCheck( x?: number, y?: number, z?: number ): TronicDeadCheck { return new TronicDeadCheck( x, y, z ); };
    TronicDialog( x?: number, y?: number, z?: number ): TronicDialog { return new TronicDialog( x, y, z ); };
    TronicNPC( x?: number, y?: number, z?: number ): TronicNPC { return new TronicNPC( x, y, z ); };
    TronicTalk( x?: number, y?: number, z?: number ): TronicTalk { return new TronicTalk( x, y, z ); };
    TronicThingCount( x?: number, y?: number, z?: number ): TronicThingCount { return new TronicThingCount( x, y, z ); };
    TronicWalk( x?: number, y?: number, z?: number ): TronicWalk { return new TronicWalk( x, y, z ); };
    TronicDetonator( x?: number, y?: number, z?: number ): TronicDetonator { return new TronicDetonator( x, y, z ); };
    TronicDisplay( x?: number, y?: number, z?: number ): TronicDisplay { return new TronicDisplay( x, y, z ); };
    TronicGrabber( x?: number, y?: number, z?: number ): TronicGrabber { return new TronicGrabber( x, y, z ); };
    TronicGravity( x?: number, y?: number, z?: number ): TronicGravity { return new TronicGravity( x, y, z ); };
    TronicLight( x?: number, y?: number, z?: number ): TronicLight { return new TronicLight( x, y, z ); };
    TronicMove( x?: number, y?: number, z?: number ): TronicMove { return new TronicMove( x, y, z ); };
    TronicPixel( x?: number, y?: number, z?: number ): TronicPixel { return new TronicPixel( x, y, z ); };
    TronicSpawn( x?: number, y?: number, z?: number ): TronicSpawn { return new TronicSpawn( x, y, z ); };
    TronicFlipper( x?: number, y?: number, z?: number ): TronicFlipper { return new TronicFlipper( x, y, z ); };
    TronicSpinner( x?: number, y?: number, z?: number ): TronicSpinner { return new TronicSpinner( x, y, z ); };
    TronicStepper( x?: number, y?: number, z?: number ): TronicStepper { return new TronicStepper( x, y, z ); };
    Thruster( x?: number, y?: number, z?: number ): Thruster { return new Thruster( x, y, z ); };
    TronicFan( x?: number, y?: number, z?: number ): TronicFan { return new TronicFan( x, y, z ); };
    TronicMotor( x?: number, y?: number, z?: number ): TronicMotor { return new TronicMotor( x, y, z ); };
    TronicTreadmill( x?: number, y?: number, z?: number ): TronicTreadmill { return new TronicTreadmill( x, y, z ); };
    TronicCalc( x?: number, y?: number, z?: number ): TronicCalc { return new TronicCalc( x, y, z ); };
    TronicContains( x?: number, y?: number, z?: number ): TronicContains { return new TronicContains( x, y, z ); };
    TronicDistance( x?: number, y?: number, z?: number ): TronicDistance { return new TronicDistance( x, y, z ); };
    TronicRandom( x?: number, y?: number, z?: number ): TronicRandom { return new TronicRandom( x, y, z ); };
    TronicReplace( x?: number, y?: number, z?: number ): TronicReplace { return new TronicReplace( x, y, z ); };
    TronicSet( x?: number, y?: number, z?: number ): TronicSet { return new TronicSet( x, y, z ); };
    TronicArrayReplace( x?: number, y?: number, z?: number ): TronicArrayReplace { return new TronicArrayReplace( x, y, z ); };
    TronicSplit( x?: number, y?: number, z?: number ): TronicSplit { return new TronicSplit( x, y, z ); };
    TronicSplitCount( x?: number, y?: number, z?: number ): TronicSplitCount { return new TronicSplitCount( x, y, z ); };
}

class TronicDelay extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDelay { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicDelay { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDelay { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDelay { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicDelay { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    delayInSeconds( tronic: Entity ): TronicDelay { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

/**
*	ifOperator - ">" or "="
*/
class TronicIf extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicIf { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicIf { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicIf { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicIf { this.comment = label; return this; }

    ifOperator( operator: string ): TronicIf { this.if = operator; return this; }

    trueFlowTo( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    falseFlowTo( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.FLOW_B, tronic, this ); return this; }
    a( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    b( tronic: Entity ): TronicIf { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }    
}

class TronicBurnout extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicBurnout { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicBurnout { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBurnout { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBurnout { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicBurnout { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicData extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicData { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicData { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicData { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicData { this.comment = label; return this; }
    data( data: string ): TronicData { this.text = data; return this; }
}

class TronicRedData extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicRedData { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicRedData { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicRedData { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicRedData { this.comment = label; return this; }
    data( data: string ): TronicRedData { this.text = data; return this; }
}

class TronicBrick extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicBrick { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBrick { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBrick { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicBrick { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicBumper extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicBumper { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBumper { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBumper { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicBumper { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicDpad extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDpad { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicDpad { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDpad { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDpad { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicDpad { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    directionOut( tronic: Entity ): TronicDpad { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicPulse extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicPulse { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicPulse { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPulse { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPulse { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPulse { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    delayInSeconds( tronic: Entity ): TronicPulse { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    toggleTrueFalse( tronic: Entity ): TronicPulse { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicPushButton extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicPushButton { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPushButton { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPushButton { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPushButton { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicTwitch extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicTwitch { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicTwitch { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicTwitch { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicTwitch { this.comment = label; return this; }
    bangCommand( command: string ): TronicTwitch { this.bang = command; return this; }
    
    flowTo( tronic: Entity ): TronicTwitch { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    commandOutput( tronic: Entity ): TronicTwitch { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// detects a 3x5 box above itself
class TronicArea extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicArea { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicArea { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicArea { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicArea { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicArea { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicArea { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// coords are bottom left of a 2x3 detection area at rotation 0 (rotate counterclockwise)
class TronicPipeArea extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicPipeArea { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicPipeArea { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPipeArea { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPipeArea { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPipeArea { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicPipeArea { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicProximity extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicProximity { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicProximity { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicProximity { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicProximity { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicProximity { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicProximity { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicLoadLevel extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicLoadLevel { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicLoadLevel { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicLoadLevel { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicLoadLevel { this.comment = label; return this; }
    
    levelName( tronic: Entity ): TronicLoadLevel { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicMusic extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicMusic { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicMusic { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicMusic { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicMusic { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicMusic { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    trackNum( tronic: Entity ): TronicMusic { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicSky extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicSky { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicSky { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSky { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicSky { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicSky { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    backgroundColor( tronic: Entity ): TronicSky { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    lightColor( tronic: Entity ): TronicSky { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicStarfall extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicStarfall { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicStarfall { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicStarfall { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicStarfall { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicStarfall { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    toggleOnOff( tronic: Entity ): TronicStarfall { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicBoss extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicBoss { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicBoss { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicBoss { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicBoss { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicBoss { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    who( tronic: Entity ): TronicBoss { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    hp( tronic: Entity ): TronicBoss { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicDeadCheck extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDeadCheck { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicDeadCheck { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDeadCheck { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDeadCheck { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicDeadCheck { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    who( tronic: Entity ): TronicDeadCheck { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicDialog extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDialog { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicDialog { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDialog { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDialog { this.comment = label; return this; }
    dialog( text: string ): TronicDialog { this.text = text; return this; }
    
    flowTo( tronic: Entity ): TronicDialog { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    continue( tronic: Entity ): TronicDialog { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// Mode wander stopleft stopright safe danger
class TronicNPC extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicNPC { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicNPC { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicNPC { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicNPC { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicNPC { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    who( tronic: Entity ): TronicNPC { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    mode( tronic: Entity ): TronicNPC { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicTalk extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicTalk { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicTalk { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicTalk { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicTalk { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicTalk { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    who( tronic: Entity ): TronicTalk { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    say( tronic: Entity ): TronicTalk { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicThingCount extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicThingCount { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicThingCount { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicThingCount { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicThingCount { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicThingCount { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    who( tronic: Entity ): TronicThingCount { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    howMany( tronic: Entity ): TronicThingCount { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicWalk extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicWalk { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicWalk { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicWalk { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicWalk { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicWalk { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    who( tronic: Entity ): TronicWalk { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    goHere( tronic: Entity ): TronicWalk { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicDetonator extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicDetonator { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDetonator { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDetonator { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicDetonator { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

class TronicDisplay extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDisplay { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicDisplay { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDisplay { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDisplay { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicDisplay { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    print( tronic: Entity ): TronicDisplay { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// state open | closing | closed
// in order to be set, must be connected to the output of a TronicSet.
// TronicData[<state>] -> TronicSet -> TronicGrabber
class TronicGrabber extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicGrabber { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicGrabber { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicGrabber { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicGrabber { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
}

// gravity() - sets initial mode as a string float | fixed | fall
// mode() - needs a TronicData containing a mode to change to float | fixed | fall
class TronicGravity extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicGravity { this.pushed = true; return this; }
    label( label: string ): TronicGravity { this.comment = label; return this; }
    gravity( initialMode: string ): TronicGravity { this.grav = initialMode; return this; }
    
    flowTo( tronic: Entity ): TronicGravity { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    mode( tronic: Entity ): TronicGravity { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicLight extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicLight { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicLight { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicLight { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicLight { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicLight { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    color( tronic: Entity ): TronicLight { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicMove extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    flowTo( tronic: Entity ): TronicMove { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    moveTo( tronic: Entity ): TronicMove { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    lastPosition( tronic: Entity ): TronicMove { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    speed( tronic: Entity ): TronicMove { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicPixel extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicPixel { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicPixel { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicPixel { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicPixel { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicPixel { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    color( tronic: Entity ): TronicPixel { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicSpawn extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicSpawn { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSpawn { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicSpawn { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicSpawn { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    what( tronic: Entity ): TronicSpawn { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    rename( tronic: Entity ): TronicSpawn { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicFlipper extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicFlipper { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicFlipper { this.group = tronic.tronicnum; return this; }
    
    flowTo( tronic: Entity ): TronicFlipper { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    torque( tronic: Entity ): TronicFlipper { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicSpinner extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicSpinner { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSpinner { this.group = tronic.tronicnum; return this; }
    
    flowTo( tronic: Entity ): TronicSpinner { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    torque( tronic: Entity ): TronicSpinner { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// direction - counterclockwise = -1, clockwise = 1
class TronicStepper extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicStepper { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicStepper { this.group = tronic.tronicnum; return this; }
    
    flowTo( tronic: Entity ): TronicStepper { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    direction( tronic: Entity ): TronicStepper { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class Thruster extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): Thruster { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): Thruster { this.group = tronic.tronicnum; return this; }
    label( label: string ): Thruster { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): Thruster { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    thrust( tronic: Entity ): Thruster { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicFan extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicFan { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicFan { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicFan { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicFan { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    thrust( tronic: Entity ): TronicFan { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

class TronicMotor extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicMotor { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicMotor { this.group = tronic.tronicnum; return this; }
    
    flowTo( tronic: Entity ): TronicMotor { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    torque( tronic: Entity ): TronicMotor { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// direction - counterclockwise = -1, clockwise = 1
class TronicTreadmill extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    rotate( angle: string | number ): TronicTreadmill { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicTreadmill { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicTreadmill { this.comment = label; return this; }
    
    flowTo( tronic: Entity ): TronicTreadmill { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    direction( tronic: Entity ): TronicTreadmill { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
}

// calcOperator - undefined = plus, 1 = minus, 2 = multiply, 3 = divide, 4 = combine, 5 = modulo, 6 = exponential, 7 = percentage
class TronicCalc extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicCalc { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicCalc { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicCalc { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicCalc { this.comment = label; return this; }

    calcOperator( operator: string ) { this.calc = operator; return this; }

    flowTo( tronic: Entity ): TronicCalc { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    a( tronic: Entity ): TronicCalc { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    b( tronic: Entity ): TronicCalc { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    result( tronic: Entity ): TronicCalc { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicContains extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicContains { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicContains { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicContains { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicContains { this.comment = label; return this; }

    trueFlowTo( tronic: Entity ): TronicContains { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    falseFlowTo( tronic: Entity ): TronicContains { new Troniccon().set( TronicconPort.FLOW_B, tronic, this ); return this; }
    textToSearch( tronic: Entity ): TronicContains { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    valueToFind( tronic: Entity ): TronicContains { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
}

class TronicDistance extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicDistance { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicDistance { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicDistance { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicDistance { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicDistance { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    positionA( tronic: Entity ): TronicDistance { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    positionB( tronic: Entity ): TronicDistance { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    distanceOut( tronic: Entity ): TronicDistance { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicRandom extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicRandom { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicRandom { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicRandom { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicRandom { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicRandom { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    min( tronic: Entity ): TronicRandom { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    max( tronic: Entity ): TronicRandom { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    output( tronic: Entity ): TronicRandom { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicReplace extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicReplace { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicReplace { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicReplace { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicReplace { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicReplace { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    oldValue( tronic: Entity ): TronicReplace { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    newValue( tronic: Entity ): TronicReplace { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    input( tronic: Entity ): TronicReplace { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
    output( tronic: Entity ): TronicReplace { new Troniccon().set( TronicconPort.DATA_Z, tronic, this ); return this; }
}

class TronicSet extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicSet { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicSet { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSet { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicSet { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicSet { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    input( tronic: Entity ): TronicSet { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    output( tronic: Entity ): TronicSet { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicArrayReplace extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicArrayReplace { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicArrayReplace { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicArrayReplace { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicArrayReplace { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicArrayReplace { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    index( tronic: Entity ): TronicArrayReplace { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    newValue( tronic: Entity ): TronicArrayReplace { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    input( tronic: Entity ): TronicArrayReplace { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
    output( tronic: Entity ): TronicArrayReplace { new Troniccon().set( TronicconPort.DATA_Z, tronic, this ); return this; }
}

class TronicSplit extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicSplit { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicSplit { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSplit { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicSplit { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicSplit { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    input( tronic: Entity ): TronicSplit { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    index( tronic: Entity ): TronicSplit { new Troniccon().set( TronicconPort.DATA_B, tronic, this ); return this; }
    result( tronic: Entity ): TronicSplit { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}

class TronicSplitCount extends Entity {
    constructor( x?: number, y?: number, z?: number ) {
        super( x, y, z );
        this.tronictype = "null";
        this.tronicnum = new Tronicnum().set( this.position.x, this.position.y, this.position.z );
    }
    pushToBackground(): TronicSplitCount { this.pushed = true; return this; }
    rotate( angle: string | number ): TronicSplitCount { this.position.d = angle; return this; }
    groupTo( tronic: Entity ): TronicSplitCount { this.group = tronic.tronicnum; return this; }
    label( label: string ): TronicSplitCount { this.comment = label; return this; }

    flowTo( tronic: Entity ): TronicSplitCount { new Troniccon().set( TronicconPort.FLOW_A, tronic, this ); return this; }
    input( tronic: Entity ): TronicSplitCount { new Troniccon().set( TronicconPort.DATA_A, tronic, this ); return this; }
    count( tronic: Entity ): TronicSplitCount { new Troniccon().set( TronicconPort.DATA_O, tronic, this ); return this; }
}