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

  Troniccon.prototype.set = function (port, tronic, thisArg) {
    var _a;

    if (!thisArg.troniccon) thisArg.troniccon = {};
    thisArg.troniccon = Object.assign(thisArg.troniccon, (_a = {}, _a[port] = tronic.tronicnum, _a));
  };

  return Troniccon;
}();

exports.Troniccon = Troniccon;

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

  Tronicnum.prototype.update = function (axis, newValue, thisArg) {
    if (axis === "x") thisArg.position[axis] = newValue;
    if (axis === "y") thisArg.position[axis] = newValue;
    if (axis === "z") thisArg.position[axis] = newValue;

    if (thisArg.tronicnum) {
      thisArg.tronicnum = this.set(thisArg.position.x, thisArg.position.y, thisArg.position.z);
    }
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

  Entity.prototype.x = function (xCoord) {
    new Tronicnum().update("x", xCoord, this);
    return this;
  };

  ;

  Entity.prototype.y = function (yCoord) {
    new Tronicnum().update("y", yCoord, this);
    return this;
  };

  ;

  Entity.prototype.z = function (zCoord) {
    new Tronicnum().update("z", zCoord, this);
    return this;
  };

  ;
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

  BrickBlue.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  BrickGlow.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  BrickGreen.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  BrickOld.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  BrickRed.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  VirtualBrick.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Cartridge.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Desert.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Dirt.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Moon.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Robot.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Saurus.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Ship.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  BounceBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  ExplosiveBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Eye.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  FertBox.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  IceBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  InvisableBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  KaizoBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  MetalBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  QuestionBlock.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Door.prototype.destinationDoor = function (door) {
    this.door = door.tronicnum;
    return this;
  };

  Door.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  EndDoor.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  WarpDoor.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  LavaSquare.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Water.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Bushes.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Construction.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  LightBulb.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  RampLeft.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  RampRight.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  RobotJoint.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Sign.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Spikes.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  Wheel.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  PipeCurve.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  PipeExtension.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
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

  PipeSteam.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  return PipeSteam;
}(Entity_1.Entity); // takes 2x2 area. Coords represent the bottom left corner when rotation 0. The other blocks rotate around this one. rotation 90 (bottom right) 180 (top right) 270 (bottom left)


var PipeTop =
/** @class */
function (_super) {
  __extends(PipeTop, _super);

  function PipeTop() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeTop.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeTop.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  return PipeTop;
}(Entity_1.Entity); // takes 2x2 area. Coords represent the bottom left corner when rotation 0 water comes out top. The other blocks rotate around this one. rotation 90 (bottom right) 180 (top right) 270 (bottom left)


var PipeWater =
/** @class */
function (_super) {
  __extends(PipeWater, _super);

  function PipeWater() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeWater.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeWater.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  return PipeWater;
}(Entity_1.Entity); // takes 2x2 area. Exactly like PipeTop but spawns a 2nd identical pipe in the 2x2 area to the left of the coords.

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


var TravelPipe =
/** @class */
function (_super) {
  __extends(TravelPipe, _super);

  function TravelPipe() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TravelPipe.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TravelPipe.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TravelPipe.prototype.destinationPipe = function (pipe) {
    this.pipe = pipe.tronicnum;
    return this;
  };

  TravelPipe.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TravelPipe.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  return TravelPipe;
}(Entity_1.Entity);

var Treadmill =
/** @class */
function (_super) {
  __extends(Treadmill, _super);

  function Treadmill() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Treadmill.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  Treadmill.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  return Treadmill;
}(Entity_1.Entity);

var TreadmillRight =
/** @class */
function (_super) {
  __extends(TreadmillRight, _super);

  function TreadmillRight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TreadmillRight.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TreadmillRight.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  return TreadmillRight;
}(Entity_1.Entity);
},{"./Entity":"Zp55"}],"lg+H":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TronicconPort;

(function (TronicconPort) {
  TronicconPort["FLOW_A"] = "fa";
  TronicconPort["FLOW_B"] = "fb";
  TronicconPort["DATA_A"] = "da";
  TronicconPort["DATA_B"] = "db";
  TronicconPort["DATA_O"] = "do";
  TronicconPort["DATA_Z"] = "dz";
})(TronicconPort = exports.TronicconPort || (exports.TronicconPort = {}));

;
},{}],"e5pL":[function(require,module,exports) {
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

var Entity_3 = require("./Entity");

var TronicconPort_1 = require("../enum/TronicconPort");

var Tronic =
/** @class */
function () {
  function Tronic() {}

  Tronic.prototype.TronicDelay = function () {
    return new TronicDelay();
  };

  ;

  Tronic.prototype.TronicIf = function () {
    return new TronicIf();
  };

  ;

  Tronic.prototype.TronicBurnout = function () {
    return new TronicBurnout();
  };

  ;

  Tronic.prototype.TronicData = function () {
    return new TronicData();
  };

  ;

  Tronic.prototype.TronicRedData = function () {
    return new TronicRedData();
  };

  ;

  Tronic.prototype.TronicBrick = function () {
    return new TronicBrick();
  };

  ;

  Tronic.prototype.TronicBumper = function () {
    return new TronicBumper();
  };

  ;

  Tronic.prototype.TronicDpad = function () {
    return new TronicDpad();
  };

  ;

  Tronic.prototype.TronicPulse = function () {
    return new TronicPulse();
  };

  ;

  Tronic.prototype.TronicPushButton = function () {
    return new TronicPushButton();
  };

  ;

  Tronic.prototype.TronicTwitch = function () {
    return new TronicTwitch();
  };

  ;

  Tronic.prototype.TronicArea = function () {
    return new TronicArea();
  };

  ;

  Tronic.prototype.TronicPipeArea = function () {
    return new TronicPipeArea();
  };

  ;

  Tronic.prototype.TronicProximity = function () {
    return new TronicProximity();
  };

  ;

  Tronic.prototype.TronicLoadLevel = function () {
    return new TronicLoadLevel();
  };

  ;

  Tronic.prototype.TronicMusic = function () {
    return new TronicMusic();
  };

  ;

  Tronic.prototype.TronicSky = function () {
    return new TronicSky();
  };

  ;

  Tronic.prototype.TronicStarfall = function () {
    return new TronicStarfall();
  };

  ;

  Tronic.prototype.TronicBoss = function () {
    return new TronicBoss();
  };

  ;

  Tronic.prototype.TronicDeadCheck = function () {
    return new TronicDeadCheck();
  };

  ;

  Tronic.prototype.TronicDialog = function () {
    return new TronicDialog();
  };

  ;

  Tronic.prototype.TronicNPC = function () {
    return new TronicNPC();
  };

  ;

  Tronic.prototype.TronicTalk = function () {
    return new TronicTalk();
  };

  ;

  Tronic.prototype.TronicThingCount = function () {
    return new TronicThingCount();
  };

  ;

  Tronic.prototype.TronicWalk = function () {
    return new TronicWalk();
  };

  ;

  Tronic.prototype.TronicDetonator = function () {
    return new TronicDetonator();
  };

  ;

  Tronic.prototype.TronicDisplay = function () {
    return new TronicDisplay();
  };

  ;

  Tronic.prototype.TronicGrabber = function () {
    return new TronicGrabber();
  };

  ;

  Tronic.prototype.TronicGravity = function () {
    return new TronicGravity();
  };

  ;

  Tronic.prototype.TronicLight = function () {
    return new TronicLight();
  };

  ;

  Tronic.prototype.TronicMove = function () {
    return new TronicMove();
  };

  ;

  Tronic.prototype.TronicPixel = function () {
    return new TronicPixel();
  };

  ;

  Tronic.prototype.TronicSpawn = function () {
    return new TronicSpawn();
  };

  ;

  Tronic.prototype.TronicFlipper = function () {
    return new TronicFlipper();
  };

  ;

  Tronic.prototype.TronicSpinner = function () {
    return new TronicSpinner();
  };

  ;

  Tronic.prototype.TronicStepper = function () {
    return new TronicStepper();
  };

  ;

  Tronic.prototype.Thruster = function () {
    return new Thruster();
  };

  ;

  Tronic.prototype.TronicFan = function () {
    return new TronicFan();
  };

  ;

  Tronic.prototype.TronicMotor = function () {
    return new TronicMotor();
  };

  ;

  Tronic.prototype.TronicTreadmill = function () {
    return new TronicTreadmill();
  };

  ;

  Tronic.prototype.TronicCalc = function () {
    return new TronicCalc();
  };

  ;

  Tronic.prototype.TronicContains = function () {
    return new TronicContains();
  };

  ;

  Tronic.prototype.TronicDistance = function () {
    return new TronicDistance();
  };

  ;

  Tronic.prototype.TronicRandom = function () {
    return new TronicRandom();
  };

  ;

  Tronic.prototype.TronicReplace = function () {
    return new TronicReplace();
  };

  ;

  Tronic.prototype.TronicSet = function () {
    return new TronicSet();
  };

  ;

  Tronic.prototype.TronicArrayReplace = function () {
    return new TronicArrayReplace();
  };

  ;

  Tronic.prototype.TronicSplit = function () {
    return new TronicSplit();
  };

  ;

  Tronic.prototype.TronicSplitCount = function () {
    return new TronicSplitCount();
  };

  ;
  return Tronic;
}();

exports.Tronic = Tronic;

var TronicDelay =
/** @class */
function (_super) {
  __extends(TronicDelay, _super);

  function TronicDelay() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDelay.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDelay.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDelay.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDelay.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDelay.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicDelay.prototype.delayInSeconds = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicDelay;
}(Entity_1.Entity);
/**
*	ifOperator - ">" or "="
*/


var TronicIf =
/** @class */
function (_super) {
  __extends(TronicIf, _super);

  function TronicIf() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicIf.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicIf.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicIf.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicIf.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicIf.prototype.ifOperator = function (operator) {
    this.if = operator;
    return this;
  };

  TronicIf.prototype.trueFlowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicIf.prototype.falseFlowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_B, tronic, this);
    return this;
  };

  TronicIf.prototype.a = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicIf.prototype.b = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicIf;
}(Entity_1.Entity);

var TronicBurnout =
/** @class */
function (_super) {
  __extends(TronicBurnout, _super);

  function TronicBurnout() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBurnout.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicBurnout.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicBurnout.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicBurnout.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicBurnout.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  return TronicBurnout;
}(Entity_1.Entity);

var TronicData =
/** @class */
function (_super) {
  __extends(TronicData, _super);

  function TronicData() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicData.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicData.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicData.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicData.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicData.prototype.data = function (data) {
    this.text = data;
    return this;
  };

  return TronicData;
}(Entity_1.Entity);

var TronicRedData =
/** @class */
function (_super) {
  __extends(TronicRedData, _super);

  function TronicRedData() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicRedData.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicRedData.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicRedData.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicRedData.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicRedData.prototype.data = function (data) {
    this.text = data;
    return this;
  };

  return TronicRedData;
}(Entity_1.Entity);

var TronicBrick =
/** @class */
function (_super) {
  __extends(TronicBrick, _super);

  function TronicBrick() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBrick.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicBrick.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicBrick.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicBrick.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  return TronicBrick;
}(Entity_1.Entity);

var TronicBumper =
/** @class */
function (_super) {
  __extends(TronicBumper, _super);

  function TronicBumper() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBumper.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicBumper.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicBumper.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicBumper.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  return TronicBumper;
}(Entity_1.Entity);

var TronicDpad =
/** @class */
function (_super) {
  __extends(TronicDpad, _super);

  function TronicDpad() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDpad.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDpad.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDpad.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDpad.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDpad.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicDpad.prototype.directionOut = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicDpad;
}(Entity_1.Entity);

var TronicPulse =
/** @class */
function (_super) {
  __extends(TronicPulse, _super);

  function TronicPulse() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPulse.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicPulse.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicPulse.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicPulse.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicPulse.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicPulse.prototype.delayInSeconds = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicPulse.prototype.toggleTrueFalse = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicPulse;
}(Entity_1.Entity);

var TronicPushButton =
/** @class */
function (_super) {
  __extends(TronicPushButton, _super);

  function TronicPushButton() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPushButton.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicPushButton.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicPushButton.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicPushButton.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  return TronicPushButton;
}(Entity_1.Entity);

var TronicTwitch =
/** @class */
function (_super) {
  __extends(TronicTwitch, _super);

  function TronicTwitch() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicTwitch.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicTwitch.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicTwitch.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicTwitch.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicTwitch.prototype.bangCommand = function (command) {
    this.bang = command;
    return this;
  };

  TronicTwitch.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicTwitch.prototype.commandOutput = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicTwitch;
}(Entity_1.Entity); // detects a 3x5 box above itself


var TronicArea =
/** @class */
function (_super) {
  __extends(TronicArea, _super);

  function TronicArea() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicArea.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicArea.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicArea.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicArea.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicArea.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicArea.prototype.what = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicArea;
}(Entity_1.Entity); // coords are bottom left of a 2x3 detection area at rotation 0 (rotate counterclockwise)


var TronicPipeArea =
/** @class */
function (_super) {
  __extends(TronicPipeArea, _super);

  function TronicPipeArea() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPipeArea.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicPipeArea.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicPipeArea.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicPipeArea.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicPipeArea.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicPipeArea.prototype.what = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicPipeArea;
}(Entity_1.Entity);

var TronicProximity =
/** @class */
function (_super) {
  __extends(TronicProximity, _super);

  function TronicProximity() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicProximity.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicProximity.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicProximity.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicProximity.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicProximity.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicProximity.prototype.what = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicProximity;
}(Entity_1.Entity);

var TronicLoadLevel =
/** @class */
function (_super) {
  __extends(TronicLoadLevel, _super);

  function TronicLoadLevel() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicLoadLevel.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicLoadLevel.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicLoadLevel.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicLoadLevel.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicLoadLevel.prototype.levelName = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicLoadLevel;
}(Entity_1.Entity);

var TronicMusic =
/** @class */
function (_super) {
  __extends(TronicMusic, _super);

  function TronicMusic() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicMusic.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicMusic.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicMusic.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicMusic.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicMusic.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicMusic.prototype.trackNum = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicMusic;
}(Entity_1.Entity);

var TronicSky =
/** @class */
function (_super) {
  __extends(TronicSky, _super);

  function TronicSky() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSky.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicSky.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicSky.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicSky.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicSky.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicSky.prototype.backgroundColor = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicSky.prototype.lightColor = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicSky;
}(Entity_1.Entity);

var TronicStarfall =
/** @class */
function (_super) {
  __extends(TronicStarfall, _super);

  function TronicStarfall() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicStarfall;
}(Entity_1.Entity);

var TronicBoss =
/** @class */
function (_super) {
  __extends(TronicBoss, _super);

  function TronicBoss() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicBoss;
}(Entity_1.Entity);

var TronicDeadCheck =
/** @class */
function (_super) {
  __extends(TronicDeadCheck, _super);

  function TronicDeadCheck() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicDeadCheck;
}(Entity_1.Entity);

var TronicDialog =
/** @class */
function (_super) {
  __extends(TronicDialog, _super);

  function TronicDialog() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicDialog;
}(Entity_1.Entity);

var TronicNPC =
/** @class */
function (_super) {
  __extends(TronicNPC, _super);

  function TronicNPC() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicNPC;
}(Entity_1.Entity);

var TronicTalk =
/** @class */
function (_super) {
  __extends(TronicTalk, _super);

  function TronicTalk() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicTalk;
}(Entity_1.Entity);

var TronicThingCount =
/** @class */
function (_super) {
  __extends(TronicThingCount, _super);

  function TronicThingCount() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicThingCount;
}(Entity_1.Entity);

var TronicWalk =
/** @class */
function (_super) {
  __extends(TronicWalk, _super);

  function TronicWalk() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicWalk;
}(Entity_1.Entity);

var TronicDetonator =
/** @class */
function (_super) {
  __extends(TronicDetonator, _super);

  function TronicDetonator() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicDetonator;
}(Entity_1.Entity);

var TronicDisplay =
/** @class */
function (_super) {
  __extends(TronicDisplay, _super);

  function TronicDisplay() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicDisplay;
}(Entity_1.Entity);

var TronicGrabber =
/** @class */
function (_super) {
  __extends(TronicGrabber, _super);

  function TronicGrabber() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicGrabber;
}(Entity_1.Entity);

var TronicGravity =
/** @class */
function (_super) {
  __extends(TronicGravity, _super);

  function TronicGravity() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicGravity;
}(Entity_1.Entity);

var TronicLight =
/** @class */
function (_super) {
  __extends(TronicLight, _super);

  function TronicLight() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicLight;
}(Entity_1.Entity);

var TronicMove =
/** @class */
function (_super) {
  __extends(TronicMove, _super);

  function TronicMove() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicMove;
}(Entity_1.Entity);

var TronicPixel =
/** @class */
function (_super) {
  __extends(TronicPixel, _super);

  function TronicPixel() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicPixel;
}(Entity_1.Entity);

var TronicSpawn =
/** @class */
function (_super) {
  __extends(TronicSpawn, _super);

  function TronicSpawn() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicSpawn;
}(Entity_1.Entity);

var TronicFlipper =
/** @class */
function (_super) {
  __extends(TronicFlipper, _super);

  function TronicFlipper() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicFlipper;
}(Entity_1.Entity);

var TronicSpinner =
/** @class */
function (_super) {
  __extends(TronicSpinner, _super);

  function TronicSpinner() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicSpinner;
}(Entity_1.Entity);

var TronicStepper =
/** @class */
function (_super) {
  __extends(TronicStepper, _super);

  function TronicStepper() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicStepper;
}(Entity_1.Entity);

var Thruster =
/** @class */
function (_super) {
  __extends(Thruster, _super);

  function Thruster() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return Thruster;
}(Entity_1.Entity);

var TronicFan =
/** @class */
function (_super) {
  __extends(TronicFan, _super);

  function TronicFan() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicFan;
}(Entity_1.Entity);

var TronicMotor =
/** @class */
function (_super) {
  __extends(TronicMotor, _super);

  function TronicMotor() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicMotor;
}(Entity_1.Entity);

var TronicTreadmill =
/** @class */
function (_super) {
  __extends(TronicTreadmill, _super);

  function TronicTreadmill() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicTreadmill;
}(Entity_1.Entity);

var TronicCalc =
/** @class */
function (_super) {
  __extends(TronicCalc, _super);

  function TronicCalc() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicCalc;
}(Entity_1.Entity);

var TronicContains =
/** @class */
function (_super) {
  __extends(TronicContains, _super);

  function TronicContains() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicContains;
}(Entity_1.Entity);

var TronicDistance =
/** @class */
function (_super) {
  __extends(TronicDistance, _super);

  function TronicDistance() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicDistance;
}(Entity_1.Entity);

var TronicRandom =
/** @class */
function (_super) {
  __extends(TronicRandom, _super);

  function TronicRandom() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicRandom;
}(Entity_1.Entity);

var TronicReplace =
/** @class */
function (_super) {
  __extends(TronicReplace, _super);

  function TronicReplace() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicReplace;
}(Entity_1.Entity);

var TronicSet =
/** @class */
function (_super) {
  __extends(TronicSet, _super);

  function TronicSet() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicSet;
}(Entity_1.Entity);

var TronicArrayReplace =
/** @class */
function (_super) {
  __extends(TronicArrayReplace, _super);

  function TronicArrayReplace() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicArrayReplace;
}(Entity_1.Entity);

var TronicSplit =
/** @class */
function (_super) {
  __extends(TronicSplit, _super);

  function TronicSplit() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicSplit;
}(Entity_1.Entity);

var TronicSplitCount =
/** @class */
function (_super) {
  __extends(TronicSplitCount, _super);

  function TronicSplitCount() {
    var _this = _super.call(this) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  return TronicSplitCount;
}(Entity_1.Entity);
},{"./Entity":"Zp55","../enum/TronicconPort":"lg+H"}],"Tdn4":[function(require,module,exports) {
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
function () {
  function Monster() {}

  Monster.prototype.Blip = function () {
    return new Blip();
  };

  Monster.prototype.BlipBat = function () {
    return new BlipBat();
  };

  Monster.prototype.BlipGhost = function () {
    return new BlipGhost();
  };

  Monster.prototype.BlipShadow = function () {
    return new BlipShadow();
  };

  Monster.prototype.BouncingBlip = function () {
    return new BouncingBlip();
  };

  Monster.prototype.BrightBlip = function () {
    return new BrightBlip();
  };

  Monster.prototype.CoinBlip = function () {
    return new CoinBlip();
  };

  Monster.prototype.LavaBlip = function () {
    return new LavaBlip();
  };

  Monster.prototype.Neko = function () {
    return new Neko();
  };

  Monster.prototype.NekoPilot = function () {
    return new NekoPilot();
  };

  Monster.prototype.NekoPolice = function () {
    return new NekoPolice();
  };

  Monster.prototype.NekoPoliceChief = function () {
    return new NekoPoliceChief();
  };

  Monster.prototype.PugAxe = function () {
    return new PugAxe();
  };

  Monster.prototype.GameKid = function () {
    return new GameKid();
  };

  Monster.prototype.GameKidBlue = function () {
    return new GameKidBlue();
  };

  Monster.prototype.GameKidRed = function () {
    return new GameKidRed();
  };

  Monster.prototype.Grubby = function () {
    return new Grubby();
  };

  Monster.prototype.PrairiePiranha = function () {
    return new PrairiePiranha();
  };

  Monster.prototype.YellowMan = function () {
    return new YellowMan();
  };

  Monster.prototype.Penguin = function () {
    return new Penguin();
  };

  Monster.prototype.Chibi = function () {
    return new Chibi();
  };

  Monster.prototype.Normish = function () {
    return new Normish();
  };

  Monster.prototype.Mummy = function () {
    return new Mummy();
  };

  Monster.prototype.Skeleton = function () {
    return new Skeleton();
  };

  Monster.prototype.SkeletonKnight = function () {
    return new SkeletonKnight();
  };

  Monster.prototype.SkeletonRed = function () {
    return new SkeletonRed();
  };

  Monster.prototype.FireSnail = function () {
    return new FireSnail();
  };

  Monster.prototype.Snail = function () {
    return new Snail();
  };

  Monster.prototype.SnailFly = function () {
    return new SnailFly();
  };

  Monster.prototype.PipeMonster = function () {
    return new PipeMonster();
  };

  Monster.prototype.PipeMonsterFire = function () {
    return new PipeMonsterFire();
  };

  Monster.prototype.Zilla = function () {
    return new Zilla();
  };

  Monster.prototype.ZillaBullet = function () {
    return new ZillaBullet();
  };

  Monster.prototype.ZillaJetpack = function () {
    return new ZillaJetpack();
  };

  Monster.prototype.ZillaJump = function () {
    return new ZillaJump();
  };

  Monster.prototype.ZillaVac = function () {
    return new ZillaVac();
  };

  Monster.prototype.BlipKing = function () {
    return new BlipKing();
  };

  return Monster;
}();

exports.Monster = Monster;

var Blip =
/** @class */
function (_super) {
  __extends(Blip, _super);

  function Blip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Blip;
}(Entity_1.Entity);

var BlipBat =
/** @class */
function (_super) {
  __extends(BlipBat, _super);

  function BlipBat() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return BlipBat;
}(Entity_1.Entity);

var BlipGhost =
/** @class */
function (_super) {
  __extends(BlipGhost, _super);

  function BlipGhost() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return BlipGhost;
}(Entity_1.Entity);

var BlipShadow =
/** @class */
function (_super) {
  __extends(BlipShadow, _super);

  function BlipShadow() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return BlipShadow;
}(Entity_1.Entity);

var BouncingBlip =
/** @class */
function (_super) {
  __extends(BouncingBlip, _super);

  function BouncingBlip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return BouncingBlip;
}(Entity_1.Entity);

var BrightBlip =
/** @class */
function (_super) {
  __extends(BrightBlip, _super);

  function BrightBlip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return BrightBlip;
}(Entity_1.Entity);

var CoinBlip =
/** @class */
function (_super) {
  __extends(CoinBlip, _super);

  function CoinBlip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CoinBlip;
}(Entity_1.Entity);

var LavaBlip =
/** @class */
function (_super) {
  __extends(LavaBlip, _super);

  function LavaBlip() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return LavaBlip;
}(Entity_1.Entity);

var Neko =
/** @class */
function (_super) {
  __extends(Neko, _super);

  function Neko() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Neko;
}(Entity_1.Entity);

var NekoPilot =
/** @class */
function (_super) {
  __extends(NekoPilot, _super);

  function NekoPilot() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return NekoPilot;
}(Entity_1.Entity);

var NekoPolice =
/** @class */
function (_super) {
  __extends(NekoPolice, _super);

  function NekoPolice() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return NekoPolice;
}(Entity_1.Entity);

var NekoPoliceChief =
/** @class */
function (_super) {
  __extends(NekoPoliceChief, _super);

  function NekoPoliceChief() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return NekoPoliceChief;
}(Entity_1.Entity);

var PugAxe =
/** @class */
function (_super) {
  __extends(PugAxe, _super);

  function PugAxe() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return PugAxe;
}(Entity_1.Entity);

var GameKid =
/** @class */
function (_super) {
  __extends(GameKid, _super);

  function GameKid() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return GameKid;
}(Entity_1.Entity);

var GameKidBlue =
/** @class */
function (_super) {
  __extends(GameKidBlue, _super);

  function GameKidBlue() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return GameKidBlue;
}(Entity_1.Entity);

var GameKidRed =
/** @class */
function (_super) {
  __extends(GameKidRed, _super);

  function GameKidRed() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return GameKidRed;
}(Entity_1.Entity);

var Grubby =
/** @class */
function (_super) {
  __extends(Grubby, _super);

  function Grubby() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Grubby;
}(Entity_1.Entity);

var PrairiePiranha =
/** @class */
function (_super) {
  __extends(PrairiePiranha, _super);

  function PrairiePiranha() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return PrairiePiranha;
}(Entity_1.Entity);

var YellowMan =
/** @class */
function (_super) {
  __extends(YellowMan, _super);

  function YellowMan() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return YellowMan;
}(Entity_1.Entity);

var Penguin =
/** @class */
function (_super) {
  __extends(Penguin, _super);

  function Penguin() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Penguin;
}(Entity_1.Entity); // TODO: split spriteVariant in hair/shirt/color.. etc..


var Chibi =
/** @class */
function (_super) {
  __extends(Chibi, _super);

  function Chibi() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Chibi.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Chibi;
}(Entity_1.Entity);

var Normish =
/** @class */
function (_super) {
  __extends(Normish, _super);

  function Normish() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Normish.prototype.spriteVariant = function (spriteVariant) {
    if (spriteVariant) {
      this.load = spriteVariant;
    }

    ;
    return this;
  };

  return Normish;
}(Entity_1.Entity);

var Mummy =
/** @class */
function (_super) {
  __extends(Mummy, _super);

  function Mummy() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Mummy;
}(Entity_1.Entity);

var Skeleton =
/** @class */
function (_super) {
  __extends(Skeleton, _super);

  function Skeleton() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Skeleton;
}(Entity_1.Entity);

var SkeletonKnight =
/** @class */
function (_super) {
  __extends(SkeletonKnight, _super);

  function SkeletonKnight() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SkeletonKnight;
}(Entity_1.Entity);

var SkeletonRed =
/** @class */
function (_super) {
  __extends(SkeletonRed, _super);

  function SkeletonRed() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SkeletonRed;
}(Entity_1.Entity);

var FireSnail =
/** @class */
function (_super) {
  __extends(FireSnail, _super);

  function FireSnail() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return FireSnail;
}(Entity_1.Entity);

var Snail =
/** @class */
function (_super) {
  __extends(Snail, _super);

  function Snail() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Snail;
}(Entity_1.Entity);

var SnailFly =
/** @class */
function (_super) {
  __extends(SnailFly, _super);

  function SnailFly() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SnailFly;
}(Entity_1.Entity);

var PipeMonster =
/** @class */
function (_super) {
  __extends(PipeMonster, _super);

  function PipeMonster() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeMonster.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeMonster.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  PipeMonster.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return PipeMonster;
}(Entity_1.Entity);

var PipeMonsterFire =
/** @class */
function (_super) {
  __extends(PipeMonsterFire, _super);

  function PipeMonsterFire() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PipeMonsterFire.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  PipeMonsterFire.prototype.groupTo = function (tronicnum) {
    this.group = tronicnum;
    return this;
  };

  PipeMonsterFire.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return PipeMonsterFire;
}(Entity_1.Entity);

var Zilla =
/** @class */
function (_super) {
  __extends(Zilla, _super);

  function Zilla() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Zilla;
}(Entity_1.Entity);

var ZillaBullet =
/** @class */
function (_super) {
  __extends(ZillaBullet, _super);

  function ZillaBullet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ZillaBullet;
}(Entity_1.Entity);

var ZillaJetpack =
/** @class */
function (_super) {
  __extends(ZillaJetpack, _super);

  function ZillaJetpack() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ZillaJetpack;
}(Entity_1.Entity);

var ZillaJump =
/** @class */
function (_super) {
  __extends(ZillaJump, _super);

  function ZillaJump() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ZillaJump;
}(Entity_1.Entity);

var ZillaVac =
/** @class */
function (_super) {
  __extends(ZillaVac, _super);

  function ZillaVac() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ZillaVac;
}(Entity_1.Entity);

var BlipKing =
/** @class */
function (_super) {
  __extends(BlipKing, _super);

  function BlipKing() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BlipKing.prototype.stuffWith = function (stuffable) {
    this.contain = stuffable;
    return this;
  };

  return BlipKing;
}(Entity_1.Entity);
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
function () {
  function Item() {}

  Item.prototype.Coin = function () {
    return new Coin();
  };

  ;

  Item.prototype.OneUp = function () {
    return new OneUp();
  };

  ;

  Item.prototype.StarShard = function () {
    return new StarShard();
  };

  ;

  Item.prototype.Donut = function () {
    return new Donut();
  };

  ;

  Item.prototype.LightBlock = function () {
    return new LightBlock();
  };

  ;

  Item.prototype.AstroIcecream = function () {
    return new AstroIcecream();
  };

  ;

  Item.prototype.BomberGet = function () {
    return new BomberGet();
  };

  ;

  Item.prototype.Boot = function () {
    return new Boot();
  };

  ;

  Item.prototype.CheeseBurger = function () {
    return new CheeseBurger();
  };

  ;

  Item.prototype.Cookie = function () {
    return new Cookie();
  };

  ;

  Item.prototype.Fireball = function () {
    return new Fireball();
  };

  ;

  Item.prototype.GetHappy = function () {
    return new GetHappy();
  };

  ;

  Item.prototype.Hat = function () {
    return new Hat();
  };

  ;

  Item.prototype.SanicBurger = function () {
    return new SanicBurger();
  };

  ;

  Item.prototype.VideoGame = function () {
    return new VideoGame();
  };

  ;

  Item.prototype.WalkGuy = function () {
    return new WalkGuy();
  };

  ;

  Item.prototype.Watermelon = function () {
    return new Watermelon();
  };

  ;

  Item.prototype.Bomb = function () {
    return new Bomb();
  };

  ;

  Item.prototype.FireShell = function () {
    return new FireShell();
  };

  ;

  Item.prototype.Shell = function () {
    return new Shell();
  };

  ;

  Item.prototype.Skateboard = function () {
    return new Skateboard();
  };

  ;
  return Item;
}();

exports.Item = Item;

var Coin =
/** @class */
function (_super) {
  __extends(Coin, _super);

  function Coin() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Coin;
}(Entity_1.Entity);

var OneUp =
/** @class */
function (_super) {
  __extends(OneUp, _super);

  function OneUp() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return OneUp;
}(Entity_1.Entity);

var StarShard =
/** @class */
function (_super) {
  __extends(StarShard, _super);

  function StarShard() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return StarShard;
}(Entity_1.Entity);

var Donut =
/** @class */
function (_super) {
  __extends(Donut, _super);

  function Donut() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Donut;
}(Entity_1.Entity);

var LightBlock =
/** @class */
function (_super) {
  __extends(LightBlock, _super);

  function LightBlock() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return LightBlock;
}(Entity_1.Entity);

var AstroIcecream =
/** @class */
function (_super) {
  __extends(AstroIcecream, _super);

  function AstroIcecream() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return AstroIcecream;
}(Entity_1.Entity);

var BomberGet =
/** @class */
function (_super) {
  __extends(BomberGet, _super);

  function BomberGet() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return BomberGet;
}(Entity_1.Entity);

var Boot =
/** @class */
function (_super) {
  __extends(Boot, _super);

  function Boot() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Boot;
}(Entity_1.Entity);

var CheeseBurger =
/** @class */
function (_super) {
  __extends(CheeseBurger, _super);

  function CheeseBurger() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return CheeseBurger;
}(Entity_1.Entity);

var Cookie =
/** @class */
function (_super) {
  __extends(Cookie, _super);

  function Cookie() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Cookie;
}(Entity_1.Entity);

var Fireball =
/** @class */
function (_super) {
  __extends(Fireball, _super);

  function Fireball() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Fireball;
}(Entity_1.Entity);

var GetHappy =
/** @class */
function (_super) {
  __extends(GetHappy, _super);

  function GetHappy() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return GetHappy;
}(Entity_1.Entity);

var Hat =
/** @class */
function (_super) {
  __extends(Hat, _super);

  function Hat() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Hat;
}(Entity_1.Entity);

var SanicBurger =
/** @class */
function (_super) {
  __extends(SanicBurger, _super);

  function SanicBurger() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SanicBurger;
}(Entity_1.Entity);

var VideoGame =
/** @class */
function (_super) {
  __extends(VideoGame, _super);

  function VideoGame() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return VideoGame;
}(Entity_1.Entity);

var WalkGuy =
/** @class */
function (_super) {
  __extends(WalkGuy, _super);

  function WalkGuy() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return WalkGuy;
}(Entity_1.Entity);

var Watermelon =
/** @class */
function (_super) {
  __extends(Watermelon, _super);

  function Watermelon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Watermelon;
}(Entity_1.Entity);

var Bomb =
/** @class */
function (_super) {
  __extends(Bomb, _super);

  function Bomb() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Bomb;
}(Entity_1.Entity);

var FireShell =
/** @class */
function (_super) {
  __extends(FireShell, _super);

  function FireShell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return FireShell;
}(Entity_1.Entity);

var Shell =
/** @class */
function (_super) {
  __extends(Shell, _super);

  function Shell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Shell;
}(Entity_1.Entity);

var Skateboard =
/** @class */
function (_super) {
  __extends(Skateboard, _super);

  function Skateboard() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Skateboard.prototype.rotateTo = function (angle) {
    this.position.d = angle;
    return this;
  };

  return Skateboard;
}(Entity_1.Entity);
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
},{}],"/GIV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var IfOperator;

(function (IfOperator) {
  IfOperator["GREATER_THAN"] = ">";
  IfOperator["EQUAL"] = "=";
})(IfOperator = exports.IfOperator || (exports.IfOperator = {}));

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

var IfOperator_1 = require("./enum/IfOperator");

console.log(GravityState_1.GravityState.FALL);
var j2t = new Js2tronic_1.Js2tronic();
console.log(j2t);
var test = j2t.block.BrickBlue();
console.log(test);
test.pushToBackground().stuffWith(Stuffable_1.Stuffable.GRUBBY);
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
iceblock.stuffWith(Stuffable_1.Stuffable.GRUBBY);
console.log(iceblock);
var InvisableBlock = j2t.block.InvisableBlock();
InvisableBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT);
console.log(InvisableBlock);
var KaizoBlock = j2t.block.KaizoBlock();
KaizoBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT);
console.log(KaizoBlock);
var MetalBlock = j2t.block.MetalBlock();
MetalBlock;
console.log(MetalBlock);
var QuestionBlock = j2t.block.QuestionBlock();
QuestionBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT);
console.log(QuestionBlock);
var FloatBlock = j2t.block.FloatBlock();
FloatBlock.rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE);
console.log(FloatBlock);
var ChainBend = j2t.block.ChainBend();
ChainBend.pushToBackground().rotateTo(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE);
console.log(ChainBend);
var Door = j2t.block.Door();
Door.label("test label door");
console.log(Door);
console.log("======[ V Tronics V ]======");
console.log(gravBlock);
var TronicDelay = j2t.tronic.TronicDelay();
TronicDelay.flowTo(gravBlock).delayInSeconds(gravBlock);
console.log(TronicDelay);
TronicDelay.x(3);
console.log(TronicDelay);
TronicDelay.y(47);
console.log(TronicDelay);
TronicDelay.z(200);
console.log(TronicDelay);
var TronicIf = j2t.tronic.TronicIf();
TronicIf.pushToBackground().rotateTo(RotationAngle_1.RotationAngle.CLOCKWISE).trueFlowTo(gravBlock).falseFlowTo(gravBlock).a(gravBlock).b(gravBlock).groupTo(gravBlock).ifOperator(IfOperator_1.IfOperator.EQUAL);
console.log(TronicIf);
},{"./class/Js2tronic":"Gwg2","./enum/Stuffable":"JkVb","./enum/CartridgeVariant":"W7xP","./enum/DesertVariant":"JJoq","./enum/DirtVariant":"8VLF","./enum/MoonVariant":"WxEB","./enum/OneWayVariant":"luA9","./enum/RobotVariant":"/RE3","./enum/SaurusVariant":"mRcx","./enum/ShipVariant":"qFE2","./enum/RotationAngle":"mIhr","./enum/GravityState":"IIep","./enum/IfOperator":"/GIV"}]},{},["7QCb"], null)
//# sourceMappingURL=https://xprosper.github.io/js2tronic/src.b7c74cbf.js.map