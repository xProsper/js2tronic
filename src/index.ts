import { j2t } from "./global";
import { Stuffable } from "./enum/Stuffable";
import { CartridgeVariant } from "./enum/CartridgeVariant";
import { DesertVariant } from "./enum/DesertVariant";
import { DirtVariant } from "./enum/DirtVariant";
import { MoonVariant } from "./enum/MoonVariant";
import { OneWayVariant } from "./enum/OneWayVariant";
import { RobotVariant } from "./enum/RobotVariant";
import { SaurusVariant } from "./enum/SaurusVariant";
import { ShipVariant } from "./enum/ShipVariant";
import { RotationAngle } from "./enum/RotationAngle";
import { GravityState } from "./enum/GravityState";
import { IfOperator } from "./enum/IfOperator";

// DOM accessible functions
function readSingleFile(e: any) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
   
    var reader = new FileReader();
    reader.onload = function(e) {
        if (e && e.target && e.target.result) {
            var contents: string | ArrayBuffer = e.target.result;
            var mutated: string = contents.toString();
            var delimiter: string = "*begin data*";
            mutated = mutated.substring(mutated.indexOf(delimiter) + delimiter.length);
            j2t.input = mutated;
            j2t.import();
            console.log(j2t.world);
            console.log(j2t.output);
            displayContents(mutated);
        }
    };
    reader.readAsText(file);
}

function displayContents(contents: any) {
    var element = document.getElementById('file-content');
    if (element && contents) element.textContent = contents;
}
var fileInput: any = document.getElementById('file-input');
if (fileInput) {
    fileInput.addEventListener('change', readSingleFile, false);
}



console.log(GravityState.FALL);

console.log(j2t);
let test = j2t.block.BrickBlue();
console.log(j2t.output);
console.log(test);
test.pushToBackground().stuffWith(Stuffable.GRUBBY);
console.log(test);
let cartrdige = j2t.block.Cartridge();
cartrdige.spriteVariant(CartridgeVariant.FLOOR);
console.log(cartrdige);
let desert = j2t.block.Desert();
desert.spriteVariant(DesertVariant.TOP_ORANGE);
console.log(desert);
let dirt = j2t.block.Dirt();
dirt.spriteVariant(DirtVariant.TOP_LONG);
console.log(dirt);
let moon = j2t.block.Moon();
moon.spriteVariant(MoonVariant.TOP_BUMP);
console.log(moon);
let oneWay = j2t.block.OneWay();
oneWay.spriteVariant(OneWayVariant.FILLER);
console.log(oneWay);
let robot = j2t.block.Robot();
robot.spriteVariant(RobotVariant.BOTTOM_LEFT_CORNER);
console.log(robot);
let saurus = j2t.block.Saurus();
saurus.spriteVariant(SaurusVariant.FILLER_THREE_SCALES);
console.log(saurus);
let ship = j2t.block.Ship();
ship.spriteVariant(ShipVariant.FILLER_LEFT_TOP_RIGHT_NOTCHES_VARIANT_A);
console.log(ship);
let fertbox = j2t.block.FertBox();
console.log(j2t.output);
fertbox.rotate(RotationAngle.UPSIDE_DOWN);
console.log(fertbox);
let gravBlock = j2t.block.GravityBlock();
gravBlock.label("test label").pushToBackground();
console.log(gravBlock);
console.log(gravBlock.tronicnum);
let iceblock = j2t.block.IceBlock();
console.log(iceblock);
iceblock.stuffWith(Stuffable.GRUBBY);
console.log(iceblock);
let InvisableBlock = j2t.block.InvisableBlock();
InvisableBlock.rotate(RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable.BOOT);
console.log(InvisableBlock);
let KaizoBlock = j2t.block.KaizoBlock();
KaizoBlock.rotate(RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable.BOOT);
console.log(KaizoBlock);
let MetalBlock = j2t.block.MetalBlock();
MetalBlock;
console.log(MetalBlock);
let QuestionBlock = j2t.block.QuestionBlock();
QuestionBlock.rotate(RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable.BOOT);
console.log(QuestionBlock);
let FloatBlock = j2t.block.FloatBlock();
FloatBlock.rotate(RotationAngle.COUNTER_CLOCKWISE);
console.log(FloatBlock);
let ChainBend = j2t.block.ChainBend();
console.log(j2t.output);
ChainBend.pushToBackground().rotate(RotationAngle.COUNTER_CLOCKWISE);
console.log(ChainBend);

var myDoor = j2t.block.Door(22,55,44);

myDoor.place(222, 33, 100);
myDoor.exit.place(111, 22, 0);

console.log(myDoor);
console.log("======[ V Tronics V ]======");
console.log(gravBlock);
let TronicDelay = j2t.tronic.TronicDelay();
TronicDelay.flowTo(gravBlock).delayInSeconds(gravBlock);
console.log(TronicDelay);
let TronicIf = j2t.tronic.TronicIf();
TronicIf.pushToBackground().rotate(RotationAngle.CLOCKWISE).trueFlowTo(gravBlock).falseFlowTo(gravBlock).a(gravBlock).b(gravBlock).groupTo(gravBlock).ifOperator(IfOperator.EQUAL);
console.log(TronicIf);
TronicIf.place(2,40,200);
console.log(TronicIf);
TronicIf.place(399, 49, 100);

let obj = { test: j2t.tronic.TronicCalc() };
console.log(obj.test);
obj.test.place(4,23,0).label("changed position");
console.log(obj.test);

console.log(j2t.world);
console.log(j2t.output);