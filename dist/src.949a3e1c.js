// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Zp55":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Position =
/** @class */
function () {
  function Position() {
    this.x = 0;
    this.y = 0;
    this.z = 0; // one of 000, 100, 200

    this.d = 0; // one of 0, 90, 180, 270
  }

  return Position;
}();

var Troniccon =
/** @class */
function () {
  function Troniccon() {}

  return Troniccon;
}();

var Tronicnum =
/** @class */
function () {
  function Tronicnum() {}

  Tronicnum.prototype.set = function (x, y, z) {
    if (Number(x) === 0 && Number(y) === 0 && Number(z) === 0) {
      return String(0); // 0
    }

    if (Number(z) === 0) {
      var zeroPad = "000" + String(y);
      y = zeroPad.substring(zeroPad.length - 3);
      return String(x) + String(y); // xxx0yy
    }

    return String(x) + String(Number(y) + Number(z)); // xxxzyy
  };

  return Tronicnum;
}();

exports.Tronicnum = Tronicnum;

var Entity =
/** @class */
function () {
  function Entity() {
    this.name = this.constructor.name;
    this.position = new Position();
  }

  return Entity;
}();

exports.Entity = Entity;
},{}],"UejY":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Entity_1 = require("./Entity");

var Entity_2 = require("./Entity");

var Block =
/** @class */
function () {
  function Block() {}

  Block.prototype.BrickBlue = function () {
    return new BrickBlue();
  };

  ;

  Block.prototype.BrickGlow = function () {
    return new BrickGlow();
  };

  ;

  Block.prototype.BrickGreen = function () {
    return new BrickGreen();
  };

  ;

  Block.prototype.BrickOld = function () {
    return new BrickOld();
  };

  ;

  Block.prototype.BrickRed = function () {
    return new BrickRed();
  };

  ;

  Block.prototype.VirtualBrick = function () {
    return new VirtualBrick();
  };

  ;

  Block.prototype.Cartridge = function () {
    return new Cartridge();
  };

  ;

  Block.prototype.Desert = function () {
    return new Desert();
  };

  ;

  Block.prototype.Dirt = function () {
    return new Dirt();
  };

  ;

  Block.prototype.Moon = function () {
    return new Moon();
  };

  ;

  Block.prototype.OneWay = function () {
    return new OneWay();
  };

  ;

  Block.prototype.Robot = function () {
    return new Robot();
  };

  ;

  Block.prototype.Saurus = function () {
    return new Saurus();
  };

  ;

  Block.prototype.Ship = function () {
    return new Ship();
  };

  ;

  Block.prototype.BounceBlock = function () {
    return new BounceBlock();
  };

  ;

  Block.prototype.ExplosiveBlock = function () {
    return new ExplosiveBlock();
  };

  ;

  Block.prototype.Eye = function () {
    return new Eye();
  };

  ;

  Block.prototype.FallBlock = function () {
    return new FallBlock();
  };

  ;

  Block.prototype.FertBox = function () {
    return new FertBox();
  };

  ;

  Block.prototype.GravityBlock = function () {
    return new GravityBlock();
  };

  ;

  Block.prototype.IceBlock = function () {
    return new IceBlock();
  };

  ;

  Block.prototype.InvisableBlock = function () {
    return new InvisableBlock();
  };

  ;

  Block.prototype.KaizoBlock = function () {
    return new KaizoBlock();
  };

  ;

  Block.prototype.MetalBlock = function () {
    return new MetalBlock();
  };

  ;

  Block.prototype.QuestionBlock = function () {
    return new QuestionBlock();
  };

  ;

  Block.prototype.FloatBlock = function () {
    return new FloatBlock();
  };

  ;

  Block.prototype.SpringBlock = function () {
    return new SpringBlock();
  };

  ;

  Block.prototype.Chain = function () {
    return new Chain();
  };

  ;

  Block.prototype.ChainBend = function () {
    return new ChainBend();
  };

  ;

  Block.prototype.Door = function () {
    return new Door();
  };

  ;

  Block.prototype.EndDoor = function () {
    return new EndDoor();
  };

  ;

  Block.prototype.WarpDoor = function () {
    return new WarpDoor();
  };

  ;

  Block.prototype.LavaSquare = function () {
    return new LavaSquare();
  };

  ;

  Block.prototype.Water = function () {
    return new Water();
  };

  ;

  Block.prototype.Bushes = function () {
    return new Bushes();
  };

  ;

  Block.prototype.Cloud = function () {
    return new Cloud();
  };

  ;

  Block.prototype.Construction = function () {
    return new Construction();
  };

  ;

  Block.prototype.LightBulb = function () {
    return new LightBulb();
  };

  ;

  Block.prototype.RampLeft = function () {
    return new RampLeft();
  };

  ;

  Block.prototype.RampRight = function () {
    return new RampRight();
  };

  ;

  Block.prototype.RobotJoint = function () {
    return new RobotJoint();
  };

  ;

  Block.prototype.Sign = function () {
    return new Sign();
  };

  ;

  Block.prototype.Spikes = function () {
    return new Spikes();
  };

  ;

  Block.prototype.Wheel = function () {
    return new Wheel();
  };

  ;

  Block.prototype.PipeCurve = function () {
    return new PipeCurve();
  };

  ;

  Block.prototype.PipeExtension = function () {
    return new PipeExtension();
  };

  ;

  Block.prototype.PipeSteam = function () {
    return new PipeSteam();
  };

  ;

  Block.prototype.PipeTop = function () {
    return new PipeTop();
  };

  ;

  Block.prototype.PipeWater = function () {
    return new PipeWater();
  };

  ;

  Block.prototype.TravelPipe = function () {
    return new TravelPipe();
  };

  ;

  Block.prototype.Treadmill = function () {
    return new Treadmill();
  };

  ;

  Block.prototype.TreadmillRight = function () {
    return new TreadmillRight();
  };

  ;
  return Block;
}();

exports.Block = Block;

var BrickBlue =
/** @class */
function (_super) {
  __extends(BrickBlue, _super);

  function BrickBlue() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BrickBlue.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  BrickBlue.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  BrickBlue.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return BrickBlue;
}(Entity_1.Entity);

var BrickGlow =
/** @class */
function (_super) {
  __extends(BrickGlow, _super);

  function BrickGlow() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BrickGlow.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  BrickGlow.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return BrickGlow;
}(Entity_1.Entity);

var BrickGreen =
/** @class */
function (_super) {
  __extends(BrickGreen, _super);

  function BrickGreen() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BrickGreen.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  BrickGreen.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  BrickGreen.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return BrickGreen;
}(Entity_1.Entity);

var BrickOld =
/** @class */
function (_super) {
  __extends(BrickOld, _super);

  function BrickOld() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BrickOld.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  BrickOld.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  BrickOld.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return BrickOld;
}(Entity_1.Entity);

var BrickRed =
/** @class */
function (_super) {
  __extends(BrickRed, _super);

  function BrickRed() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BrickRed.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  BrickRed.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  BrickRed.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return BrickRed;
}(Entity_1.Entity);

var VirtualBrick =
/** @class */
function (_super) {
  __extends(VirtualBrick, _super);

  function VirtualBrick() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  VirtualBrick.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return VirtualBrick;
}(Entity_1.Entity);

var Cartridge =
/** @class */
function (_super) {
  __extends(Cartridge, _super);

  function Cartridge() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Cartridge.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Cartridge.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Cartridge.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Cartridge;
}(Entity_1.Entity);

var Desert =
/** @class */
function (_super) {
  __extends(Desert, _super);

  function Desert() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Desert.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Desert.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Desert.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Desert;
}(Entity_1.Entity);

var Dirt =
/** @class */
function (_super) {
  __extends(Dirt, _super);

  function Dirt() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Dirt.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Dirt.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Dirt.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Dirt;
}(Entity_1.Entity);

var Moon =
/** @class */
function (_super) {
  __extends(Moon, _super);

  function Moon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Moon.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Moon.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Moon.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Moon;
}(Entity_1.Entity);

var OneWay =
/** @class */
function (_super) {
  __extends(OneWay, _super);

  function OneWay() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OneWay.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  OneWay.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return OneWay;
}(Entity_1.Entity);

var Robot =
/** @class */
function (_super) {
  __extends(Robot, _super);

  function Robot() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Robot.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Robot.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Robot.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Robot;
}(Entity_1.Entity);

var Saurus =
/** @class */
function (_super) {
  __extends(Saurus, _super);

  function Saurus() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Saurus.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Saurus.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Saurus.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Saurus;
}(Entity_1.Entity);

var Ship =
/** @class */
function (_super) {
  __extends(Ship, _super);

  function Ship() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Ship.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Ship.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Ship.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Ship;
}(Entity_1.Entity);

var BounceBlock =
/** @class */
function (_super) {
  __extends(BounceBlock, _super);

  function BounceBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BounceBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return BounceBlock;
}(Entity_1.Entity);

var ExplosiveBlock =
/** @class */
function (_super) {
  __extends(ExplosiveBlock, _super);

  function ExplosiveBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ExplosiveBlock.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  ExplosiveBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  ExplosiveBlock.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return ExplosiveBlock;
}(Entity_1.Entity);

var Eye =
/** @class */
function (_super) {
  __extends(Eye, _super);

  function Eye() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Eye.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return Eye;
}(Entity_1.Entity);

var FallBlock =
/** @class */
function (_super) {
  __extends(FallBlock, _super);

  function FallBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return FallBlock;
}(Entity_1.Entity);

var FertBox =
/** @class */
function (_super) {
  __extends(FertBox, _super);

  function FertBox() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FertBox.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  FertBox.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  FertBox.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return FertBox;
}(Entity_1.Entity);

var GravityBlock =
/** @class */
function (_super) {
  __extends(GravityBlock, _super);

  function GravityBlock() {
    var _this = _super.call(this) || this;

    _this.grav = "2"; // This cannot be toggled to FIXED or FLOAT, only FALL

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  GravityBlock.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  GravityBlock.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  return GravityBlock;
}(Entity_1.Entity);

var IceBlock =
/** @class */
function (_super) {
  __extends(IceBlock, _super);

  function IceBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IceBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  IceBlock.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return IceBlock;
}(Entity_1.Entity);

var InvisableBlock =
/** @class */
function (_super) {
  __extends(InvisableBlock, _super);

  function InvisableBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  InvisableBlock.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  InvisableBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  InvisableBlock.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return InvisableBlock;
}(Entity_1.Entity);

var KaizoBlock =
/** @class */
function (_super) {
  __extends(KaizoBlock, _super);

  function KaizoBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  KaizoBlock.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  KaizoBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  KaizoBlock.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return KaizoBlock;
}(Entity_1.Entity);

var MetalBlock =
/** @class */
function (_super) {
  __extends(MetalBlock, _super);

  function MetalBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MetalBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return MetalBlock;
}(Entity_1.Entity);

var QuestionBlock =
/** @class */
function (_super) {
  __extends(QuestionBlock, _super);

  function QuestionBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  QuestionBlock.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  QuestionBlock.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  QuestionBlock.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return QuestionBlock;
}(Entity_1.Entity);

var FloatBlock =
/** @class */
function (_super) {
  __extends(FloatBlock, _super);

  function FloatBlock() {
    var _this = _super.call(this) || this;

    _this.tronictype = "";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  FloatBlock.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  return FloatBlock;
}(Entity_1.Entity);

var SpringBlock =
/** @class */
function (_super) {
  __extends(SpringBlock, _super);

  function SpringBlock() {
    var _this = _super.call(this) || this;

    _this.tronictype = "";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  SpringBlock.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  return SpringBlock;
}(Entity_1.Entity);

var Chain =
/** @class */
function (_super) {
  __extends(Chain, _super);

  function Chain() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Chain.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Chain.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  return Chain;
}(Entity_1.Entity);

var ChainBend =
/** @class */
function (_super) {
  __extends(ChainBend, _super);

  function ChainBend() {
    var _this = _super.call(this) || this;

    _this.name = "Chain Bend"; // exceptionally has a space in name, therefore the constructor.name is not used here

    return _this;
  }

  ChainBend.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  ChainBend.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  return ChainBend;
}(Entity_1.Entity); // TODO Must make 2 doors and have their tronicnum refer each other


var Door =
/** @class */
function (_super) {
  __extends(Door, _super);

  function Door() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Door.prototype.destinationDoor = function (tronicnum) {
    this.door = tronicnum;
    return this;
  };

  Door.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Door.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  return Door;
}(Entity_1.Entity);

var EndDoor =
/** @class */
function (_super) {
  __extends(EndDoor, _super);

  function EndDoor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EndDoor.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  EndDoor.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  return EndDoor;
}(Entity_1.Entity);

var WarpDoor =
/** @class */
function (_super) {
  __extends(WarpDoor, _super);

  function WarpDoor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  WarpDoor.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  WarpDoor.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  WarpDoor.prototype.warpTo = function (level) {
    this.warp = level;
    return this;
  };

  return WarpDoor;
}(Entity_1.Entity);

var LavaSquare =
/** @class */
function (_super) {
  __extends(LavaSquare, _super);

  function LavaSquare() {
    var _this = _super.call(this) || this;

    _this.load = "t"; // Lava always spawn with a load option of "t" (for transparent ?)

    return _this;
  }

  LavaSquare.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return LavaSquare;
}(Entity_1.Entity);

var Water =
/** @class */
function (_super) {
  __extends(Water, _super);

  function Water() {
    var _this = _super.call(this) || this;

    _this.load = "t"; // Water always spawn with a load option of "t" (for transparent ?)

    return _this;
  }

  Water.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return Water;
}(Entity_1.Entity); // Takes up 1x4 area. Coords represent its base, therefore it occupies 3 more squares in the direction of its rotation.


var Bushes =
/** @class */
function (_super) {
  __extends(Bushes, _super);

  function Bushes() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Bushes.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  Bushes.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return Bushes;
}(Entity_1.Entity); // Takes up 4x1 area, Coords represent the 3rd block from the left, therefore it occupies 2 squares left and 1 square right of where it is placed
// Even if it can be rotated, it stays in the same shape, therefore I do not include a parameter to affect rotation.


var Cloud =
/** @class */
function (_super) {
  __extends(Cloud, _super);

  function Cloud() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Cloud;
}(Entity_1.Entity);

var Construction =
/** @class */
function (_super) {
  __extends(Construction, _super);

  function Construction() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Construction.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  Construction.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  Construction.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return Construction;
}(Entity_1.Entity);

var LightBulb =
/** @class */
function (_super) {
  __extends(LightBulb, _super);

  function LightBulb() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LightBulb.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  LightBulb.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  LightBulb.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return LightBulb;
}(Entity_1.Entity); // when placed it occupies a 1x2 area. Coords represent the left-most of the two squares when rotation is 0. (Yellow block, angled like a front-slash)


var RampLeft =
/** @class */
function (_super) {
  __extends(RampLeft, _super);

  function RampLeft() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RampLeft.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  RampLeft.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return RampLeft;
}(Entity_1.Entity); // when placed it occupies a 1x2 area. Coords represent the right-most of the two squares when rotation is 0. (Blue block, angled like a back-slash)


var RampRight =
/** @class */
function (_super) {
  __extends(RampRight, _super);

  function RampRight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RampRight.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  RampRight.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return RampRight;
}(Entity_1.Entity); // when placed it occupies a 1x2 area. Coords represent the right-most of the two squares when rotation is 0.
// The left-most square can be overlayed on top of a pinball flipper's pointy side to create an articulate joint (when in 2 seperate block groups).


var RobotJoint =
/** @class */
function (_super) {
  __extends(RobotJoint, _super);

  function RobotJoint() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RobotJoint.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  RobotJoint.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return RobotJoint;
}(Entity_1.Entity);

var Sign =
/** @class */
function (_super) {
  __extends(Sign, _super);

  function Sign() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Sign.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  Sign.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  Sign.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  Sign.prototype.message = function (message) {
    this.text = message;
    return this;
  };

  return Sign;
}(Entity_1.Entity);

var Spikes =
/** @class */
function (_super) {
  __extends(Spikes, _super);

  function Spikes() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Spikes.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  Spikes.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return Spikes;
}(Entity_1.Entity);

var Wheel =
/** @class */
function (_super) {
  __extends(Wheel, _super);

  function Wheel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Wheel.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return Wheel;
}(Entity_1.Entity); // takes 2x2 area. Coords represent the top left corner. rotation 0 (bottom-left corner) rotation 90 (bottom-right corner) rotation 180 (top-right corner) rotation 270 (top-left corner)


var PipeCurve =
/** @class */
function (_super) {
  __extends(PipeCurve, _super);

  function PipeCurve() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeCurve.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeCurve.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return PipeCurve;
}(Entity_1.Entity); // takes 2x2 area. Coords represent the top left corner when rotation 0. The other blocks rotate around this one. rotation 90 (bottom left) 180 (bottom right) 270 (top right)


var PipeExtension =
/** @class */
function (_super) {
  __extends(PipeExtension, _super);

  function PipeExtension() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeExtension.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeExtension.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return PipeExtension;
}(Entity_1.Entity); // takes 2x2 area. Coords represent the bottom left corner when rotation 0 steam goes up. The other blocks rotate around this one. rotation 90 (bottom right) 180 (top right) 270 (bottom left)


var PipeSteam =
/** @class */
function (_super) {
  __extends(PipeSteam, _super);

  function PipeSteam() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeSteam.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeSteam.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  return PipeSteam;
}(Entity_1.Entity);

var PipeTop =
/** @class */
function (_super) {
  __extends(PipeTop, _super);

  function PipeTop() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return PipeTop;
}(Entity_1.Entity);

var PipeWater =
/** @class */
function (_super) {
  __extends(PipeWater, _super);

  function PipeWater() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return PipeWater;
}(Entity_1.Entity);

var TravelPipe =
/** @class */
function (_super) {
  __extends(TravelPipe, _super);

  function TravelPipe() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return TravelPipe;
}(Entity_1.Entity);

var Treadmill =
/** @class */
function (_super) {
  __extends(Treadmill, _super);

  function Treadmill() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Treadmill;
}(Entity_1.Entity);

var TreadmillRight =
/** @class */
function (_super) {
  __extends(TreadmillRight, _super);

  function TreadmillRight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return TreadmillRight;
}(Entity_1.Entity);
},{"./Entity":"Zp55"}],"e5pL":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Entity_1 = require("./Entity");

var Tronic =
/** @class */
function (_super) {
  __extends(Tronic, _super);

  function Tronic() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Tronic;
}(Entity_1.Entity);

exports.Tronic = Tronic;
},{"./Entity":"Zp55"}],"Tdn4":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Entity_1 = require("./Entity");

var Monster =
/** @class */
function (_super) {
  __extends(Monster, _super);

  function Monster() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Monster;
}(Entity_1.Entity);

exports.Monster = Monster;
},{"./Entity":"Zp55"}],"yMxt":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Entity_1 = require("./Entity");

var Item =
/** @class */
function (_super) {
  __extends(Item, _super);

  function Item() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Item;
}(Entity_1.Entity);

exports.Item = Item;
},{"./Entity":"Zp55"}],"Gwg2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Block_1 = require("./Block");

var Tronic_1 = require("./Tronic");

var Monster_1 = require("./Monster");

var Item_1 = require("./Item");

var Js2tronic =
/** @class */
function () {
  function Js2tronic() {
    this.block = new Block_1.Block();
    this.tronic = new Tronic_1.Tronic();
    this.monster = new Monster_1.Monster();
    this.item = new Item_1.Item();
  }

  return Js2tronic;
}();

exports.Js2tronic = Js2tronic;
},{"./Block":"UejY","./Tronic":"e5pL","./Monster":"Tdn4","./Item":"yMxt"}],"JkVb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Stuffable;

(function (Stuffable) {
  Stuffable["BLIP"] = "Blip";
  Stuffable["BLIPBAT"] = "BlipBat";
  Stuffable["BLIPGHOST"] = "BlipGhost";
  Stuffable["BLIPSHADOW"] = "BlipShadow";
  Stuffable["BOUNCINGBLIP"] = "BouncingBlip";
  Stuffable["BRIGHTBLIP"] = "BrightBlip";
  Stuffable["COINBLIP"] = "CoinBlip";
  Stuffable["LAVABLIP"] = "LavaBlip";
  Stuffable["NEKO"] = "Neko";
  Stuffable["NEKOPILOT"] = "NekoPilot";
  Stuffable["NEKOPOLICE"] = "NekoPolice";
  Stuffable["NEKOPOLICECHIEF"] = "NekoPoliceChief";
  Stuffable["PUGAXE"] = "PugAxe";
  Stuffable["GAMEKID"] = "GameKid";
  Stuffable["GAMEKIDBLUE"] = "GameKidBlue";
  Stuffable["GAMEKIDRED"] = "GameKidRed";
  Stuffable["GRUBBY"] = "Grubby";
  Stuffable["PRAIRIEPIRANHA"] = "PrairiePiranha";
  Stuffable["YELLOWMAN"] = "YellowMan";
  Stuffable["PENGUIN"] = "Penguin";
  Stuffable["MUMMY"] = "Mummy";
  Stuffable["SKELETON"] = "Skeleton";
  Stuffable["SKELETONKNIGHT"] = "SkeletonKnight";
  Stuffable["SKELETONRED"] = "SkeletonRed";
  Stuffable["FIRESNAIL"] = "FireSnail";
  Stuffable["SNAIL"] = "Snail";
  Stuffable["SNAILFLY"] = "SnailFly";
  Stuffable["COIN"] = "Coin";
  Stuffable["ONEUP"] = "OneUp";
  Stuffable["STARSHARD"] = "StarShard";
  Stuffable["DONUT"] = "Donut";
  Stuffable["LIGHTBLOCK"] = "LightBlock";
  Stuffable["ASTROICECREAM"] = "AstroIcecream";
  Stuffable["BOMBERGET"] = "BomberGet";
  Stuffable["BOOT"] = "Boot";
  Stuffable["CHEESEBURGER"] = "CheeseBurger";
  Stuffable["COOKIE"] = "Cookie";
  Stuffable["FIREBALL"] = "Fireball";
  Stuffable["GETHAPPY"] = "GetHappy";
  Stuffable["HAT"] = "Hat";
  Stuffable["SANICBURGER"] = "SanicBurger";
  Stuffable["VIDEOGAME"] = "VideoGame";
  Stuffable["WALKGUY"] = "WalkGuy";
  Stuffable["WATERMELON"] = "Watermelon";
  Stuffable["BOMB"] = "Bomb";
  Stuffable["FIRESHELL"] = "FireShell";
  Stuffable["SHELL"] = "Shell";
  Stuffable["SKATEBOARD"] = "Skateboard";
})(Stuffable = exports.Stuffable || (exports.Stuffable = {}));

;
},{}],"W7xP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CartridgeVariant;

(function (CartridgeVariant) {
  CartridgeVariant["FLOOR"] = "cartridge_3";
  CartridgeVariant["FILLER"] = "cartridge_5";
  CartridgeVariant["CEILING"] = "cartridge_7";
})(CartridgeVariant = exports.CartridgeVariant || (exports.CartridgeVariant = {}));
},{}],"JJoq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DesertVariant;

(function (DesertVariant) {
  DesertVariant["TOP_LEFT_CORNER"] = "desert_0";
  DesertVariant["TOP_PURPLE_BLUE"] = "desert_1";
  DesertVariant["TOP_RIGHT_CORNER"] = "desert_2";
  DesertVariant["FILLER"] = "desert_3";
  DesertVariant["TOP_GREEN"] = "desert_4";
  DesertVariant["TOP_ORANGE"] = "desert_5";
  DesertVariant["BOTTOM_LEFT_CORNER"] = "desert_6";
  DesertVariant["BOTTOM"] = "desert_7";
  DesertVariant["BOTTOM_RIGHT_CORNER"] = "desert_8";
})(DesertVariant = exports.DesertVariant || (exports.DesertVariant = {}));
},{}],"8VLF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DirtVariant;

(function (DirtVariant) {
  DirtVariant["TOP_LONG"] = "ground_0";
  DirtVariant["TOP_SHORT"] = "ground_1";
  DirtVariant["TOP_RIGHT_CORNER"] = "ground_2";
  DirtVariant["TOP_LEFT_CORNER"] = "ground_3";
  DirtVariant["FILLER"] = "ground_4";
  DirtVariant["FILLER_ONE_PATCH"] = "ground_5";
  DirtVariant["FILLER_TWO_PATCHES"] = "ground_6";
  DirtVariant["BOTTOM_LONG"] = "ground_7";
  DirtVariant["BOTTOM_SHORT"] = "ground_8";
})(DirtVariant = exports.DirtVariant || (exports.DirtVariant = {}));
},{}],"WxEB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MoonVariant;

(function (MoonVariant) {
  MoonVariant["TOP_FLAT"] = "moon_0";
  MoonVariant["TOP_BUMP"] = "moon_1";
  MoonVariant["TOP_RIGHT_CORNER"] = "moon_2";
  MoonVariant["TOP_LEFT_CORNER"] = "moon_3";
  MoonVariant["FILLER"] = "moon_4";
  MoonVariant["FILLER_SMALL_CRATER"] = "moon_5";
  MoonVariant["FILLER_BIG_CRATER"] = "moon_6";
  MoonVariant["BOTTOM_LONG"] = "moon_7";
  MoonVariant["BOTTOM_SHORT"] = "moon_8";
})(MoonVariant = exports.MoonVariant || (exports.MoonVariant = {}));
},{}],"luA9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var OneWayVariant;

(function (OneWayVariant) {
  OneWayVariant["TOP_LEFT_CORNER"] = "platform_0";
  OneWayVariant["TOP_RIGHT_CORNER"] = "platform_1";
  OneWayVariant["BOTTOM_RIGHT_CORNER"] = "platform_2";
  OneWayVariant["BOTTOM_LEFT_CORNER"] = "platform_3";
  OneWayVariant["TOP"] = "platform_4";
  OneWayVariant["BOTTOM"] = "platform_5";
  OneWayVariant["FILLER"] = "platform_6";
})(OneWayVariant = exports.OneWayVariant || (exports.OneWayVariant = {}));
},{}],"/RE3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RobotVariant;

(function (RobotVariant) {
  RobotVariant["TOP_ACCENT"] = "robotblock_0";
  RobotVariant["TOP"] = "robotblock_1";
  RobotVariant["TOP_RIGHT_CORNER"] = "robotblock_2";
  RobotVariant["TOP_LEFT_CORNER"] = "robotblock_3";
  RobotVariant["FILLER"] = "robotblock_4";
  RobotVariant["FILLER_ACCENT"] = "robotblock_5";
  RobotVariant["BOTTOM_LEFT_CORNER"] = "robotblock_6";
  RobotVariant["BOTTOM"] = "robotblock_7";
  RobotVariant["BOTTOM_RIGHT_CORNER"] = "robotblock_8";
})(RobotVariant = exports.RobotVariant || (exports.RobotVariant = {}));
},{}],"mRcx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SaurusVariant;

(function (SaurusVariant) {
  SaurusVariant["TOP_LEFT_CORNER"] = "Saurus_0";
  SaurusVariant["TOP"] = "Saurus_1";
  SaurusVariant["TOP_RIGHT_CORNER"] = "Saurus_2";
  SaurusVariant["FILLER_THREE_SCALES"] = "Saurus_3";
  SaurusVariant["FILLER_ONE_SCALE"] = "Saurus_4";
  SaurusVariant["FILLER_TWO_SCALES"] = "Saurus_5";
  SaurusVariant["BOTTOM_LEFT_CORNER"] = "Saurus_6";
  SaurusVariant["BOTTOM"] = "Saurus_7";
  SaurusVariant["BOTTOM_RIGHT_CORNER"] = "Saurus_8";
})(SaurusVariant = exports.SaurusVariant || (exports.SaurusVariant = {}));
},{}],"qFE2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ShipVariant;

(function (ShipVariant) {
  ShipVariant["BOTTOM_FIN"] = "airship_0";
  ShipVariant["BOTTOM"] = "airship_1";
  ShipVariant["BOTTOM_RIGHT_CORNER"] = "airship_2";
  ShipVariant["BOTTOM_LEFT_CORNER"] = "airship_3";
  ShipVariant["FILLER_SURFACE_NOTCH"] = "airship_4";
  ShipVariant["FILLER_RIGHT_NOTCH"] = "airship_5";
  ShipVariant["PORTHOLE"] = "airship_6";
  ShipVariant["FILLER_LEFT_TOP_RIGHT_NOTCHES_VARIANT_A"] = "airship_7";
  ShipVariant["FILLER_LEFT_TOP_RIGHT_NOTCHES_VARIANT_B"] = "airship_8";
})(ShipVariant = exports.ShipVariant || (exports.ShipVariant = {}));
},{}],"mIhr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RotationAngle;

(function (RotationAngle) {
  RotationAngle[RotationAngle["UPRIGHT"] = 0] = "UPRIGHT";
  RotationAngle[RotationAngle["CLOCKWISE"] = 90] = "CLOCKWISE";
  RotationAngle[RotationAngle["UPSIDE_DOWN"] = 180] = "UPSIDE_DOWN";
  RotationAngle[RotationAngle["COUNTER_CLOCKWISE"] = 270] = "COUNTER_CLOCKWISE";
})(RotationAngle = exports.RotationAngle || (exports.RotationAngle = {}));

;
},{}],"IIep":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GravityState;

(function (GravityState) {
  GravityState["FIXED"] = "0";
  GravityState["FLOAT"] = "1";
  GravityState["FALL"] = "2";
})(GravityState = exports.GravityState || (exports.GravityState = {}));

;
},{}],"7QCb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Js2tronic_1 = require("./class/Js2tronic");

var Stuffable_1 = require("./enum/Stuffable");

var CartridgeVariant_1 = require("./enum/CartridgeVariant");

var DesertVariant_1 = require("./enum/DesertVariant");

var DirtVariant_1 = require("./enum/DirtVariant");

var MoonVariant_1 = require("./enum/MoonVariant");

var OneWayVariant_1 = require("./enum/OneWayVariant");

var RobotVariant_1 = require("./enum/RobotVariant");

var SaurusVariant_1 = require("./enum/SaurusVariant");

var ShipVariant_1 = require("./enum/ShipVariant");

var RotationAngle_1 = require("./enum/RotationAngle");

var GravityState_1 = require("./enum/GravityState");

console.log(GravityState_1.GravityState.FALL);
var j2t = new Js2tronic_1.Js2tronic();
console.log(j2t);
var test = j2t.block.BrickBlue();
console.log(test);
test.pushToBackground().groupTo(331144).stuffWith(Stuffable_1.Stuffable.GRUBBY);
console.log(test);
var cartrdige = j2t.block.Cartridge();
cartrdige.spriteVariant(CartridgeVariant_1.CartridgeVariant.FLOOR);
console.log(cartrdige);
var desert = j2t.block.Desert();
desert.spriteVariant(DesertVariant_1.DesertVariant.TOP_ORANGE);
console.log(desert);
var dirt = j2t.block.Dirt();
dirt.spriteVariant(DirtVariant_1.DirtVariant.TOP_LONG);
console.log(dirt);
var moon = j2t.block.Moon();
moon.spriteVariant(MoonVariant_1.MoonVariant.TOP_BUMP);
console.log(moon);
var oneWay = j2t.block.OneWay();
oneWay.spriteVariant(OneWayVariant_1.OneWayVariant.FILLER);
console.log(oneWay);
var robot = j2t.block.Robot();
robot.spriteVariant(RobotVariant_1.RobotVariant.BOTTOM_LEFT_CORNER);
console.log(robot);
var saurus = j2t.block.Saurus();
saurus.spriteVariant(SaurusVariant_1.SaurusVariant.FILLER_THREE_SCALES);
console.log(saurus);
var ship = j2t.block.Ship();
ship.spriteVariant(ShipVariant_1.ShipVariant.FILLER_LEFT_TOP_RIGHT_NOTCHES_VARIANT_A);
console.log(ship);
var fertbox = j2t.block.FertBox();
fertbox.rotateTo(RotationAngle_1.RotationAngle.UPSIDE_DOWN);
console.log(fertbox);
var gravBlock = j2t.block.GravityBlock();
gravBlock.label("test label").pushToBackground();
console.log(gravBlock);
console.log(gravBlock.tronicnum);
var iceblock = j2t.block.IceBlock();
console.log(iceblock);
iceblock.groupTo(221144).stuffWith(Stuffable_1.Stuffable.GRUBBY);
console.log(iceblock);
var InvisableBlock = j2t.block.InvisableBlock();
InvisableBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT).groupTo(122435);
console.log(InvisableBlock);
var KaizoBlock = j2t.block.KaizoBlock();
KaizoBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT).groupTo(122435);
console.log(KaizoBlock);
var MetalBlock = j2t.block.MetalBlock();
MetalBlock.groupTo(54123);
console.log(MetalBlock);
var QuestionBlock = j2t.block.QuestionBlock();
QuestionBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT).groupTo(122435);
console.log(QuestionBlock);
var FloatBlock = j2t.block.FloatBlock();
FloatBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE);
console.log(FloatBlock);
var ChainBend = j2t.block.ChainBend();
ChainBend.pushToBackground().rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE);
console.log(ChainBend);
var Door = j2t.block.Door();
Door.groupTo(25566).destinationDoor(224466).label("test label door");
console.log(Door);
},{"./class/Js2tronic":"Gwg2","./enum/Stuffable":"JkVb","./enum/CartridgeVariant":"W7xP","./enum/DesertVariant":"JJoq","./enum/DirtVariant":"8VLF","./enum/MoonVariant":"WxEB","./enum/OneWayVariant":"luA9","./enum/RobotVariant":"/RE3","./enum/SaurusVariant":"mRcx","./enum/ShipVariant":"qFE2","./enum/RotationAngle":"mIhr","./enum/GravityState":"IIep"}]},{},["7QCb"], null)
//# sourceMappingURL=https://xprosper.github.io/js2tronic/src.949a3e1c.js.map