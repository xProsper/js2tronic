import { ColorParser, AngleParser } from "./Utility";

export class Settings {
    [propName: string]: any;
    skyColorString: string;
    sunColorString: string;
    sunAngleString: string;
    continueString: string;
    output: string;
    constructor() {
        this.skyColorString = "0,0.7771231,1";
        this.sunColorString = "0.6640735,0.6640735,0.6640735";
        this.sunAngleString = "49.8952,1.608433,180";
        this.continueString = "O";
        this.output = "";
        this.refresh();
    }
    private refresh() {
        this.output = "\n**************";
        this.output += "\nColor:" + this.skyColorString;
        this.output += "\nSunC:" + this.sunColorString;
        this.output += "\nSunR:" + this.sunAngleString;
        this.output += "\nContinue:" + this.continueString;
        this.output += "\n*begin data*";
    }
    SkyColor( color: string ): void { this.skyColorString = new SkyColor( color ).color; this.refresh();};
    SunColor( color: string ): void { this.sunColorString = new SunColor( color ).color; this.refresh();};
    SunAngle( xAxis: number, yAxis: number ): void { this.sunAngleString = new SunAngle( xAxis, yAxis ).angle; this.refresh();};
    Continue( trueOrFalse: boolean ): void { this.continueString = new Continue( trueOrFalse ).continue; this.refresh();};
}

class SkyColor {
    color: string;
    name: string;
    constructor( color: string ) {
        this.name = "Color";
        this.color = this.parseColor( color );
    }
    private parseColor( rawColor: string ) { return new ColorParser().set(rawColor); }
}

class SunColor {
    color: string;
    name: string;
    constructor( color: string ) {
        this.name = "SunC";
        this.color = this.parseColor( color );
    }
    private parseColor( rawColor: string ) { return new ColorParser().set(rawColor); }
}

class SunAngle {
    angle: string;
    name: string;

    /**
     * when the light is set right in the middle it is the 360/0 degree angle
     * when decrementing the degree decrements from 360 going down
     * when incrementing the degree increments from 0 going up
     * 
     * Example: new SunAngle(300, 300); would put the light source in top left quadrant.
     * 
     * Or maybe its the opposite, fiddling with the numbers or using the ingame editor
     * is recommended to get the jist of it.
     * 
     * +----+----+
     * |x-y-|x+y-|
     * +-(360/0)-+
     * |x-y+|x+y+|
     * +----+----+
     * @param xAxis 0-360
     * @param yAxis 0-360
     */
    constructor( xAxis: number, yAxis: number ) {
        this.name = "SunR";
        this.angle = this.parseAngle( xAxis, yAxis );
    }
    private parseAngle( x: number, y: number ) { return new AngleParser().set(x, y); }
}

export class Continue {
    continue: string;
    constructor( trueOrFalse: boolean ) {
        this.continue = "O";
        if (trueOrFalse) this.continue = "X";
    }
}