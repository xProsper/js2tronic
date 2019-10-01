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

var global_1 = require("../global");

var Position =
/** @class */
function () {
  function Position(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z; // one of 000, 100, 200

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

  return Tronicnum;
}();

exports.Tronicnum = Tronicnum;

var Entity =
/** @class */
function () {
  /**
   * instantiate by supplying coordinates for original placement if left blank,
   * it will be placed in the first available spot outside the world (0-399, 50+, 200)
   *
   * tip: can be moved by using .place() method.
   * @param x - 0-399 left to right horizontal axis
   * @param y - 0-49 bottom to top vertical axis (50+ places outside the playable world)
   * @param z - can be 0, 100, 200 (enum - ZLayer)
   */
  function Entity(x, y, z) {
    if (!x) x = 0;
    if (!y) y = 0;
    if (!z) z = 0;
    this.name = this.constructor.name;
    this.position = new Position(x, y, z);
    if (this.name !== "Entity") global_1.j2t.register(this);
  }
  /**
   * define the position of an entity
   *
   * @param x - 0-399 left to right horizontal axis
   * @param y - 0-49 bottom to top vertical axis (50+ places outside the playable world)
   * @param z - can be 0, 100, 200 (enum - ZLayer)
   */


  Entity.prototype.place = function (x, y, z) {
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
    return this;
  };

  return Entity;
}();

exports.Entity = Entity;
},{"../global":"dgRt"}],"UejY":[function(require,module,exports) {
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

  Block.prototype.BrickBlue = function (x, y, z) {
    return new BrickBlue(x, y, z);
  };

  ;

  Block.prototype.BrickGlow = function (x, y, z) {
    return new BrickGlow(x, y, z);
  };

  ;

  Block.prototype.BrickGreen = function (x, y, z) {
    return new BrickGreen(x, y, z);
  };

  ;

  Block.prototype.BrickOld = function (x, y, z) {
    return new BrickOld(x, y, z);
  };

  ;

  Block.prototype.BrickRed = function (x, y, z) {
    return new BrickRed(x, y, z);
  };

  ;

  Block.prototype.VirtualBrick = function (x, y, z) {
    return new VirtualBrick(x, y, z);
  };

  ;

  Block.prototype.Cartridge = function (x, y, z) {
    return new Cartridge(x, y, z);
  };

  ;

  Block.prototype.Desert = function (x, y, z) {
    return new Desert(x, y, z);
  };

  ;

  Block.prototype.Dirt = function (x, y, z) {
    return new Dirt(x, y, z);
  };

  ;

  Block.prototype.Moon = function (x, y, z) {
    return new Moon(x, y, z);
  };

  ;

  Block.prototype.OneWay = function (x, y, z) {
    return new OneWay(x, y, z);
  };

  ;

  Block.prototype.Robot = function (x, y, z) {
    return new Robot(x, y, z);
  };

  ;

  Block.prototype.Saurus = function (x, y, z) {
    return new Saurus(x, y, z);
  };

  ;

  Block.prototype.Ship = function (x, y, z) {
    return new Ship(x, y, z);
  };

  ;

  Block.prototype.BounceBlock = function (x, y, z) {
    return new BounceBlock(x, y, z);
  };

  ;

  Block.prototype.ExplosiveBlock = function (x, y, z) {
    return new ExplosiveBlock(x, y, z);
  };

  ;

  Block.prototype.Eye = function (x, y, z) {
    return new Eye(x, y, z);
  };

  ;

  Block.prototype.FallBlock = function (x, y, z) {
    return new FallBlock(x, y, z);
  };

  ;

  Block.prototype.FertBox = function (x, y, z) {
    return new FertBox(x, y, z);
  };

  ;

  Block.prototype.GravityBlock = function (x, y, z) {
    return new GravityBlock(x, y, z);
  };

  ;

  Block.prototype.IceBlock = function (x, y, z) {
    return new IceBlock(x, y, z);
  };

  ;

  Block.prototype.InvisableBlock = function (x, y, z) {
    return new InvisableBlock(x, y, z);
  };

  ;

  Block.prototype.KaizoBlock = function (x, y, z) {
    return new KaizoBlock(x, y, z);
  };

  ;

  Block.prototype.MetalBlock = function (x, y, z) {
    return new MetalBlock(x, y, z);
  };

  ;

  Block.prototype.QuestionBlock = function (x, y, z) {
    return new QuestionBlock(x, y, z);
  };

  ;

  Block.prototype.FloatBlock = function (x, y, z) {
    return new FloatBlock(x, y, z);
  };

  ;

  Block.prototype.SpringBlock = function (x, y, z) {
    return new SpringBlock(x, y, z);
  };

  ;

  Block.prototype.Chain = function (x, y, z) {
    return new Chain(x, y, z);
  };

  ;

  Block.prototype.ChainBend = function (x, y, z) {
    return new ChainBend(x, y, z);
  };

  ;

  Block.prototype.Door = function (x, y, z) {
    return new Door(x, y, z);
  };

  ;

  Block.prototype.EndDoor = function (x, y, z) {
    return new EndDoor(x, y, z);
  };

  ;

  Block.prototype.WarpDoor = function (x, y, z) {
    return new WarpDoor(x, y, z);
  };

  ;

  Block.prototype.LavaSquare = function (x, y, z) {
    return new LavaSquare(x, y, z);
  };

  ;

  Block.prototype.Water = function (x, y, z) {
    return new Water(x, y, z);
  };

  ;

  Block.prototype.Bushes = function (x, y, z) {
    return new Bushes(x, y, z);
  };

  ;

  Block.prototype.Cloud = function (x, y, z) {
    return new Cloud(x, y, z);
  };

  ;

  Block.prototype.Construction = function (x, y, z) {
    return new Construction(x, y, z);
  };

  ;

  Block.prototype.LightBulb = function (x, y, z) {
    return new LightBulb(x, y, z);
  };

  ;

  Block.prototype.RampLeft = function (x, y, z) {
    return new RampLeft(x, y, z);
  };

  ;

  Block.prototype.RampRight = function (x, y, z) {
    return new RampRight(x, y, z);
  };

  ;

  Block.prototype.RobotJoint = function (x, y, z) {
    return new RobotJoint(x, y, z);
  };

  ;

  Block.prototype.Sign = function (x, y, z) {
    return new Sign(x, y, z);
  };

  ;

  Block.prototype.Spikes = function (x, y, z) {
    return new Spikes(x, y, z);
  };

  ;

  Block.prototype.Wheel = function (x, y, z) {
    return new Wheel(x, y, z);
  };

  ;

  Block.prototype.PipeCurve = function (x, y, z) {
    return new PipeCurve(x, y, z);
  };

  ;

  Block.prototype.PipeExtension = function (x, y, z) {
    return new PipeExtension(x, y, z);
  };

  ;

  Block.prototype.PipeSteam = function (x, y, z) {
    return new PipeSteam(x, y, z);
  };

  ;

  Block.prototype.PipeTop = function (x, y, z) {
    return new PipeTop(x, y, z);
  };

  ;

  Block.prototype.PipeWater = function (x, y, z) {
    return new PipeWater(x, y, z);
  };

  ;

  Block.prototype.TravelPipe = function (x, y, z) {
    return new TravelPipe(x, y, z);
  };

  ;

  Block.prototype.Treadmill = function (x, y, z) {
    return new Treadmill(x, y, z);
  };

  ;

  Block.prototype.TreadmillRight = function (x, y, z) {
    return new TreadmillRight(x, y, z);
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

  FertBox.prototype.rotate = function (angle) {
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

  function GravityBlock(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

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

  InvisableBlock.prototype.rotate = function (angle) {
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

  KaizoBlock.prototype.rotate = function (angle) {
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

  QuestionBlock.prototype.rotate = function (angle) {
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

  function FloatBlock(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  FloatBlock.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  return FloatBlock;
}(Entity_1.Entity);

var SpringBlock =
/** @class */
function (_super) {
  __extends(SpringBlock, _super);

  function SpringBlock(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  SpringBlock.prototype.rotate = function (angle) {
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

  Chain.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  return Chain;
}(Entity_1.Entity);

var ChainBend =
/** @class */
function (_super) {
  __extends(ChainBend, _super);

  function ChainBend(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.name = "Chain Bend"; // exceptionally has a space in name, therefore the constructor.name is not used here

    return _this;
  }

  ChainBend.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  ChainBend.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  return ChainBend;
}(Entity_1.Entity);
/**
 * when a door is instanciated, it will create its exit 1 space to its left and a reference to it is kept in property this.exit
 *
 * after initial placement, both the entrance and the exit can be moved elsewhere
 *
 * Example : var myDoor = j2t.block.Door(333, 44, 100);
 *
 * myDoor.place(222, 33, 100);
 * myDoor.exit.place(111, 22, 0);
 *
 * Result :
 *
 * Door|222,33,100,0|door:111022
 * Door|111,22,0,0|door:222133
 */


var Door =
/** @class */
function (_super) {
  __extends(Door, _super);

  function Door(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.exit = new ExitDoor(_this);
    return _this;
  }

  Door.prototype.place = function (x, y, z) {
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
    this.exit.position.x = x + 1;
    this.exit.position.y = y;
    this.exit.position.z = z;
    this.door = new Entity_2.Tronicnum().set(this.exit.position.x, this.exit.position.y, this.exit.position.z);
    this.exit.door = new Entity_2.Tronicnum().set(this.position.x, this.position.y, this.position.z);
    return this;
  };

  Door.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  Door.prototype.label = function (label) {
    this.comment = label;
    this.exit.comment = label;
    return this;
  };

  return Door;
}(Entity_1.Entity);

var ExitDoor =
/** @class */
function (_super) {
  __extends(ExitDoor, _super);

  function ExitDoor(entrance) {
    var _this = _super.call(this) || this;

    _this.entrance = entrance;
    _this.name = "Door";
    _this.door = new Entity_2.Tronicnum().set(entrance.position.x + 1, entrance.position.y, entrance.position.z);

    _this.place(entrance.position.x + 1, entrance.position.y, entrance.position.z);

    entrance.door = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  ExitDoor.prototype.place = function (x, y, z) {
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
    this.entrance.door = new Entity_2.Tronicnum().set(this.position.x, this.position.y, this.position.z);
    return this;
  };

  ExitDoor.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  return ExitDoor;
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

  function LavaSquare(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

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

  function Water(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

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

  Bushes.prototype.rotate = function (angle) {
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

  Construction.prototype.rotate = function (angle) {
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

  LightBulb.prototype.rotate = function (angle) {
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

  RampLeft.prototype.rotate = function (angle) {
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

  RampRight.prototype.rotate = function (angle) {
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

  RobotJoint.prototype.rotate = function (angle) {
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

  Sign.prototype.rotate = function (angle) {
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

  Spikes.prototype.rotate = function (angle) {
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

  PipeCurve.prototype.rotate = function (angle) {
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

  PipeExtension.prototype.rotate = function (angle) {
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

  PipeSteam.prototype.rotate = function (angle) {
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

  PipeTop.prototype.rotate = function (angle) {
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

  PipeWater.prototype.rotate = function (angle) {
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

  TravelPipe.prototype.rotate = function (angle) {
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

  Treadmill.prototype.rotate = function (angle) {
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

  TreadmillRight.prototype.rotate = function (angle) {
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

  Tronic.prototype.TronicDelay = function (x, y, z) {
    return new TronicDelay(x, y, z);
  };

  ;

  Tronic.prototype.TronicIf = function (x, y, z) {
    return new TronicIf(x, y, z);
  };

  ;

  Tronic.prototype.TronicBurnout = function (x, y, z) {
    return new TronicBurnout(x, y, z);
  };

  ;

  Tronic.prototype.TronicData = function (x, y, z) {
    return new TronicData(x, y, z);
  };

  ;

  Tronic.prototype.TronicRedData = function (x, y, z) {
    return new TronicRedData(x, y, z);
  };

  ;

  Tronic.prototype.TronicBrick = function (x, y, z) {
    return new TronicBrick(x, y, z);
  };

  ;

  Tronic.prototype.TronicBumper = function (x, y, z) {
    return new TronicBumper(x, y, z);
  };

  ;

  Tronic.prototype.TronicDpad = function (x, y, z) {
    return new TronicDpad(x, y, z);
  };

  ;

  Tronic.prototype.TronicPulse = function (x, y, z) {
    return new TronicPulse(x, y, z);
  };

  ;

  Tronic.prototype.TronicPushButton = function (x, y, z) {
    return new TronicPushButton(x, y, z);
  };

  ;

  Tronic.prototype.TronicTwitch = function (x, y, z) {
    return new TronicTwitch(x, y, z);
  };

  ;

  Tronic.prototype.TronicArea = function (x, y, z) {
    return new TronicArea(x, y, z);
  };

  ;

  Tronic.prototype.TronicPipeArea = function (x, y, z) {
    return new TronicPipeArea(x, y, z);
  };

  ;

  Tronic.prototype.TronicProximity = function (x, y, z) {
    return new TronicProximity(x, y, z);
  };

  ;

  Tronic.prototype.TronicLoadLevel = function (x, y, z) {
    return new TronicLoadLevel(x, y, z);
  };

  ;

  Tronic.prototype.TronicMusic = function (x, y, z) {
    return new TronicMusic(x, y, z);
  };

  ;

  Tronic.prototype.TronicSky = function (x, y, z) {
    return new TronicSky(x, y, z);
  };

  ;

  Tronic.prototype.TronicStarfall = function (x, y, z) {
    return new TronicStarfall(x, y, z);
  };

  ;

  Tronic.prototype.TronicBoss = function (x, y, z) {
    return new TronicBoss(x, y, z);
  };

  ;

  Tronic.prototype.TronicDeadCheck = function (x, y, z) {
    return new TronicDeadCheck(x, y, z);
  };

  ;

  Tronic.prototype.TronicDialog = function (x, y, z) {
    return new TronicDialog(x, y, z);
  };

  ;

  Tronic.prototype.TronicNPC = function (x, y, z) {
    return new TronicNPC(x, y, z);
  };

  ;

  Tronic.prototype.TronicTalk = function (x, y, z) {
    return new TronicTalk(x, y, z);
  };

  ;

  Tronic.prototype.TronicThingCount = function (x, y, z) {
    return new TronicThingCount(x, y, z);
  };

  ;

  Tronic.prototype.TronicWalk = function (x, y, z) {
    return new TronicWalk(x, y, z);
  };

  ;

  Tronic.prototype.TronicDetonator = function (x, y, z) {
    return new TronicDetonator(x, y, z);
  };

  ;

  Tronic.prototype.TronicDisplay = function (x, y, z) {
    return new TronicDisplay(x, y, z);
  };

  ;

  Tronic.prototype.TronicGrabber = function (x, y, z) {
    return new TronicGrabber(x, y, z);
  };

  ;

  Tronic.prototype.TronicGravity = function (x, y, z) {
    return new TronicGravity(x, y, z);
  };

  ;

  Tronic.prototype.TronicLight = function (x, y, z) {
    return new TronicLight(x, y, z);
  };

  ;

  Tronic.prototype.TronicMove = function (x, y, z) {
    return new TronicMove(x, y, z);
  };

  ;

  Tronic.prototype.TronicPixel = function (x, y, z) {
    return new TronicPixel(x, y, z);
  };

  ;

  Tronic.prototype.TronicSpawn = function (x, y, z) {
    return new TronicSpawn(x, y, z);
  };

  ;

  Tronic.prototype.TronicFlipper = function (x, y, z) {
    return new TronicFlipper(x, y, z);
  };

  ;

  Tronic.prototype.TronicSpinner = function (x, y, z) {
    return new TronicSpinner(x, y, z);
  };

  ;

  Tronic.prototype.TronicStepper = function (x, y, z) {
    return new TronicStepper(x, y, z);
  };

  ;

  Tronic.prototype.Thruster = function (x, y, z) {
    return new Thruster(x, y, z);
  };

  ;

  Tronic.prototype.TronicFan = function (x, y, z) {
    return new TronicFan(x, y, z);
  };

  ;

  Tronic.prototype.TronicMotor = function (x, y, z) {
    return new TronicMotor(x, y, z);
  };

  ;

  Tronic.prototype.TronicTreadmill = function (x, y, z) {
    return new TronicTreadmill(x, y, z);
  };

  ;

  Tronic.prototype.TronicCalc = function (x, y, z) {
    return new TronicCalc(x, y, z);
  };

  ;

  Tronic.prototype.TronicContains = function (x, y, z) {
    return new TronicContains(x, y, z);
  };

  ;

  Tronic.prototype.TronicDistance = function (x, y, z) {
    return new TronicDistance(x, y, z);
  };

  ;

  Tronic.prototype.TronicRandom = function (x, y, z) {
    return new TronicRandom(x, y, z);
  };

  ;

  Tronic.prototype.TronicReplace = function (x, y, z) {
    return new TronicReplace(x, y, z);
  };

  ;

  Tronic.prototype.TronicSet = function (x, y, z) {
    return new TronicSet(x, y, z);
  };

  ;

  Tronic.prototype.TronicArrayReplace = function (x, y, z) {
    return new TronicArrayReplace(x, y, z);
  };

  ;

  Tronic.prototype.TronicSplit = function (x, y, z) {
    return new TronicSplit(x, y, z);
  };

  ;

  Tronic.prototype.TronicSplitCount = function (x, y, z) {
    return new TronicSplitCount(x, y, z);
  };

  ;
  return Tronic;
}();

exports.Tronic = Tronic;

var TronicDelay =
/** @class */
function (_super) {
  __extends(TronicDelay, _super);

  function TronicDelay(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDelay.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDelay.prototype.rotate = function (angle) {
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

  function TronicIf(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicIf.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicIf.prototype.rotate = function (angle) {
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

  function TronicBurnout(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBurnout.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicBurnout.prototype.rotate = function (angle) {
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

  function TronicData(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicData.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicData.prototype.rotate = function (angle) {
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

  function TronicRedData(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicRedData.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicRedData.prototype.rotate = function (angle) {
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

  function TronicBrick(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBrick.prototype.rotate = function (angle) {
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

  function TronicBumper(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBumper.prototype.rotate = function (angle) {
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

  function TronicDpad(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDpad.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDpad.prototype.rotate = function (angle) {
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

  function TronicPulse(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPulse.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicPulse.prototype.rotate = function (angle) {
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

  function TronicPushButton(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPushButton.prototype.rotate = function (angle) {
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

  function TronicTwitch(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicTwitch.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicTwitch.prototype.rotate = function (angle) {
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

  function TronicArea(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicArea.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicArea.prototype.rotate = function (angle) {
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

  function TronicPipeArea(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPipeArea.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicPipeArea.prototype.rotate = function (angle) {
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

  function TronicProximity(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicProximity.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicProximity.prototype.rotate = function (angle) {
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

  function TronicLoadLevel(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicLoadLevel.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicLoadLevel.prototype.rotate = function (angle) {
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

  function TronicMusic(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicMusic.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicMusic.prototype.rotate = function (angle) {
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

  function TronicSky(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSky.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicSky.prototype.rotate = function (angle) {
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

  function TronicStarfall(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicStarfall.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicStarfall.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicStarfall.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicStarfall.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicStarfall.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicStarfall.prototype.toggleOnOff = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicStarfall;
}(Entity_1.Entity);

var TronicBoss =
/** @class */
function (_super) {
  __extends(TronicBoss, _super);

  function TronicBoss(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicBoss.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicBoss.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicBoss.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicBoss.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicBoss.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicBoss.prototype.who = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicBoss.prototype.hp = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicBoss;
}(Entity_1.Entity);

var TronicDeadCheck =
/** @class */
function (_super) {
  __extends(TronicDeadCheck, _super);

  function TronicDeadCheck(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDeadCheck.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDeadCheck.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDeadCheck.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDeadCheck.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDeadCheck.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicDeadCheck.prototype.who = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicDeadCheck;
}(Entity_1.Entity);

var TronicDialog =
/** @class */
function (_super) {
  __extends(TronicDialog, _super);

  function TronicDialog(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDialog.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDialog.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDialog.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDialog.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDialog.prototype.dialog = function (text) {
    this.text = text;
    return this;
  };

  TronicDialog.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicDialog.prototype.continue = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicDialog;
}(Entity_1.Entity); // Mode wander stopleft stopright safe danger


var TronicNPC =
/** @class */
function (_super) {
  __extends(TronicNPC, _super);

  function TronicNPC(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicNPC.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicNPC.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicNPC.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicNPC.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicNPC.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicNPC.prototype.who = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicNPC.prototype.mode = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicNPC;
}(Entity_1.Entity);

var TronicTalk =
/** @class */
function (_super) {
  __extends(TronicTalk, _super);

  function TronicTalk(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicTalk.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicTalk.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicTalk.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicTalk.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicTalk.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicTalk.prototype.who = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicTalk.prototype.say = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicTalk;
}(Entity_1.Entity);

var TronicThingCount =
/** @class */
function (_super) {
  __extends(TronicThingCount, _super);

  function TronicThingCount(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicThingCount.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicThingCount.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicThingCount.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicThingCount.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicThingCount.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicThingCount.prototype.who = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicThingCount.prototype.howMany = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicThingCount;
}(Entity_1.Entity);

var TronicWalk =
/** @class */
function (_super) {
  __extends(TronicWalk, _super);

  function TronicWalk(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicWalk.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicWalk.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicWalk.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicWalk.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicWalk.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicWalk.prototype.who = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicWalk.prototype.goHere = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicWalk;
}(Entity_1.Entity);

var TronicDetonator =
/** @class */
function (_super) {
  __extends(TronicDetonator, _super);

  function TronicDetonator(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDetonator.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDetonator.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDetonator.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDetonator.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  return TronicDetonator;
}(Entity_1.Entity);

var TronicDisplay =
/** @class */
function (_super) {
  __extends(TronicDisplay, _super);

  function TronicDisplay(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDisplay.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDisplay.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDisplay.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDisplay.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDisplay.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicDisplay.prototype.print = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicDisplay;
}(Entity_1.Entity); // state open | closing | closed
// in order to be set, must be connected to the output of a TronicSet.
// TronicData[<state>] -> TronicSet -> TronicGrabber


var TronicGrabber =
/** @class */
function (_super) {
  __extends(TronicGrabber, _super);

  function TronicGrabber(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicGrabber.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicGrabber.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicGrabber.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicGrabber.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  return TronicGrabber;
}(Entity_1.Entity); // gravity() - sets initial mode as a string float | fixed | fall
// mode() - needs a TronicData containing a mode to change to float | fixed | fall


var TronicGravity =
/** @class */
function (_super) {
  __extends(TronicGravity, _super);

  function TronicGravity(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicGravity.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicGravity.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicGravity.prototype.gravity = function (initialMode) {
    this.grav = initialMode;
    return this;
  };

  TronicGravity.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicGravity.prototype.mode = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicGravity;
}(Entity_1.Entity);

var TronicLight =
/** @class */
function (_super) {
  __extends(TronicLight, _super);

  function TronicLight(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicLight.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicLight.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicLight.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicLight.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicLight.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicLight.prototype.color = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicLight;
}(Entity_1.Entity);

var TronicMove =
/** @class */
function (_super) {
  __extends(TronicMove, _super);

  function TronicMove(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicMove.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicMove.prototype.moveTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicMove.prototype.lastPosition = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicMove.prototype.speed = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicMove;
}(Entity_1.Entity);

var TronicPixel =
/** @class */
function (_super) {
  __extends(TronicPixel, _super);

  function TronicPixel(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicPixel.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicPixel.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicPixel.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicPixel.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicPixel.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicPixel.prototype.color = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicPixel;
}(Entity_1.Entity);

var TronicSpawn =
/** @class */
function (_super) {
  __extends(TronicSpawn, _super);

  function TronicSpawn(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSpawn.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicSpawn.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicSpawn.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicSpawn.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicSpawn.prototype.what = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicSpawn.prototype.rename = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicSpawn;
}(Entity_1.Entity);

var TronicFlipper =
/** @class */
function (_super) {
  __extends(TronicFlipper, _super);

  function TronicFlipper(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicFlipper.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicFlipper.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicFlipper.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicFlipper.prototype.torque = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicFlipper;
}(Entity_1.Entity);

var TronicSpinner =
/** @class */
function (_super) {
  __extends(TronicSpinner, _super);

  function TronicSpinner(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSpinner.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicSpinner.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicSpinner.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicSpinner.prototype.torque = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicSpinner;
}(Entity_1.Entity); // direction - counterclockwise = -1, clockwise = 1


var TronicStepper =
/** @class */
function (_super) {
  __extends(TronicStepper, _super);

  function TronicStepper(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicStepper.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicStepper.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicStepper.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicStepper.prototype.direction = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicStepper;
}(Entity_1.Entity);

var Thruster =
/** @class */
function (_super) {
  __extends(Thruster, _super);

  function Thruster(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  Thruster.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  Thruster.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  Thruster.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  Thruster.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  Thruster.prototype.thrust = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return Thruster;
}(Entity_1.Entity);

var TronicFan =
/** @class */
function (_super) {
  __extends(TronicFan, _super);

  function TronicFan(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicFan.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicFan.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicFan.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicFan.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicFan.prototype.thrust = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicFan;
}(Entity_1.Entity);

var TronicMotor =
/** @class */
function (_super) {
  __extends(TronicMotor, _super);

  function TronicMotor(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicMotor.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicMotor.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicMotor.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicMotor.prototype.torque = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicMotor;
}(Entity_1.Entity); // direction - counterclockwise = -1, clockwise = 1


var TronicTreadmill =
/** @class */
function (_super) {
  __extends(TronicTreadmill, _super);

  function TronicTreadmill(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicTreadmill.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicTreadmill.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicTreadmill.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicTreadmill.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicTreadmill.prototype.direction = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  return TronicTreadmill;
}(Entity_1.Entity); // calcOperator - undefined = plus, 1 = minus, 2 = multiply, 3 = divide, 4 = combine, 5 = modulo, 6 = exponential, 7 = percentage


var TronicCalc =
/** @class */
function (_super) {
  __extends(TronicCalc, _super);

  function TronicCalc(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicCalc.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicCalc.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicCalc.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicCalc.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicCalc.prototype.calcOperator = function (operator) {
    this.calc = operator;
    return this;
  };

  TronicCalc.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicCalc.prototype.a = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicCalc.prototype.b = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicCalc.prototype.result = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicCalc;
}(Entity_1.Entity);

var TronicContains =
/** @class */
function (_super) {
  __extends(TronicContains, _super);

  function TronicContains(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicContains.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicContains.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicContains.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicContains.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicContains.prototype.trueFlowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicContains.prototype.falseFlowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_B, tronic, this);
    return this;
  };

  TronicContains.prototype.textToSearch = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicContains.prototype.valueToFind = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  return TronicContains;
}(Entity_1.Entity);

var TronicDistance =
/** @class */
function (_super) {
  __extends(TronicDistance, _super);

  function TronicDistance(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicDistance.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicDistance.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicDistance.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicDistance.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicDistance.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicDistance.prototype.positionA = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicDistance.prototype.positionB = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicDistance.prototype.distanceOut = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicDistance;
}(Entity_1.Entity);

var TronicRandom =
/** @class */
function (_super) {
  __extends(TronicRandom, _super);

  function TronicRandom(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicRandom.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicRandom.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicRandom.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicRandom.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicRandom.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicRandom.prototype.min = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicRandom.prototype.max = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicRandom.prototype.output = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicRandom;
}(Entity_1.Entity);

var TronicReplace =
/** @class */
function (_super) {
  __extends(TronicReplace, _super);

  function TronicReplace(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicReplace.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicReplace.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicReplace.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicReplace.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicReplace.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicReplace.prototype.oldValue = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicReplace.prototype.newValue = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicReplace.prototype.input = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  TronicReplace.prototype.output = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_Z, tronic, this);
    return this;
  };

  return TronicReplace;
}(Entity_1.Entity);

var TronicSet =
/** @class */
function (_super) {
  __extends(TronicSet, _super);

  function TronicSet(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSet.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicSet.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicSet.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicSet.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicSet.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicSet.prototype.input = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicSet.prototype.output = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicSet;
}(Entity_1.Entity);

var TronicArrayReplace =
/** @class */
function (_super) {
  __extends(TronicArrayReplace, _super);

  function TronicArrayReplace(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicArrayReplace.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicArrayReplace.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicArrayReplace.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicArrayReplace.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicArrayReplace.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicArrayReplace.prototype.index = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicArrayReplace.prototype.newValue = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicArrayReplace.prototype.input = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  TronicArrayReplace.prototype.output = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_Z, tronic, this);
    return this;
  };

  return TronicArrayReplace;
}(Entity_1.Entity);

var TronicSplit =
/** @class */
function (_super) {
  __extends(TronicSplit, _super);

  function TronicSplit(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSplit.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicSplit.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicSplit.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicSplit.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicSplit.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicSplit.prototype.input = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicSplit.prototype.index = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_B, tronic, this);
    return this;
  };

  TronicSplit.prototype.result = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

  return TronicSplit;
}(Entity_1.Entity);

var TronicSplitCount =
/** @class */
function (_super) {
  __extends(TronicSplitCount, _super);

  function TronicSplitCount(x, y, z) {
    var _this = _super.call(this, x, y, z) || this;

    _this.tronictype = "null";
    _this.tronicnum = new Entity_2.Tronicnum().set(_this.position.x, _this.position.y, _this.position.z);
    return _this;
  }

  TronicSplitCount.prototype.pushToBackground = function () {
    this.pushed = true;
    return this;
  };

  TronicSplitCount.prototype.rotate = function (angle) {
    this.position.d = angle;
    return this;
  };

  TronicSplitCount.prototype.groupTo = function (tronic) {
    this.group = tronic.tronicnum;
    return this;
  };

  TronicSplitCount.prototype.label = function (label) {
    this.comment = label;
    return this;
  };

  TronicSplitCount.prototype.flowTo = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.FLOW_A, tronic, this);
    return this;
  };

  TronicSplitCount.prototype.input = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_A, tronic, this);
    return this;
  };

  TronicSplitCount.prototype.count = function (tronic) {
    new Entity_3.Troniccon().set(TronicconPort_1.TronicconPort.DATA_O, tronic, this);
    return this;
  };

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

  Monster.prototype.Blip = function (x, y, z) {
    return new Blip(x, y, z);
  };

  Monster.prototype.BlipBat = function (x, y, z) {
    return new BlipBat(x, y, z);
  };

  Monster.prototype.BlipGhost = function (x, y, z) {
    return new BlipGhost(x, y, z);
  };

  Monster.prototype.BlipShadow = function (x, y, z) {
    return new BlipShadow(x, y, z);
  };

  Monster.prototype.BouncingBlip = function (x, y, z) {
    return new BouncingBlip(x, y, z);
  };

  Monster.prototype.BrightBlip = function (x, y, z) {
    return new BrightBlip(x, y, z);
  };

  Monster.prototype.CoinBlip = function (x, y, z) {
    return new CoinBlip(x, y, z);
  };

  Monster.prototype.LavaBlip = function (x, y, z) {
    return new LavaBlip(x, y, z);
  };

  Monster.prototype.Neko = function (x, y, z) {
    return new Neko(x, y, z);
  };

  Monster.prototype.NekoPilot = function (x, y, z) {
    return new NekoPilot(x, y, z);
  };

  Monster.prototype.NekoPolice = function (x, y, z) {
    return new NekoPolice(x, y, z);
  };

  Monster.prototype.NekoPoliceChief = function (x, y, z) {
    return new NekoPoliceChief(x, y, z);
  };

  Monster.prototype.PugAxe = function (x, y, z) {
    return new PugAxe(x, y, z);
  };

  Monster.prototype.GameKid = function (x, y, z) {
    return new GameKid(x, y, z);
  };

  Monster.prototype.GameKidBlue = function (x, y, z) {
    return new GameKidBlue(x, y, z);
  };

  Monster.prototype.GameKidRed = function (x, y, z) {
    return new GameKidRed(x, y, z);
  };

  Monster.prototype.Grubby = function (x, y, z) {
    return new Grubby(x, y, z);
  };

  Monster.prototype.PrairiePiranha = function (x, y, z) {
    return new PrairiePiranha(x, y, z);
  };

  Monster.prototype.YellowMan = function (x, y, z) {
    return new YellowMan(x, y, z);
  };

  Monster.prototype.Penguin = function (x, y, z) {
    return new Penguin(x, y, z);
  };

  Monster.prototype.Chibi = function (x, y, z) {
    return new Chibi(x, y, z);
  };

  Monster.prototype.Normish = function (x, y, z) {
    return new Normish(x, y, z);
  };

  Monster.prototype.Mummy = function (x, y, z) {
    return new Mummy(x, y, z);
  };

  Monster.prototype.Skeleton = function (x, y, z) {
    return new Skeleton(x, y, z);
  };

  Monster.prototype.SkeletonKnight = function (x, y, z) {
    return new SkeletonKnight(x, y, z);
  };

  Monster.prototype.SkeletonRed = function (x, y, z) {
    return new SkeletonRed(x, y, z);
  };

  Monster.prototype.FireSnail = function (x, y, z) {
    return new FireSnail(x, y, z);
  };

  Monster.prototype.Snail = function (x, y, z) {
    return new Snail(x, y, z);
  };

  Monster.prototype.SnailFly = function (x, y, z) {
    return new SnailFly(x, y, z);
  };

  Monster.prototype.PipeMonster = function (x, y, z) {
    return new PipeMonster(x, y, z);
  };

  Monster.prototype.PipeMonsterFire = function (x, y, z) {
    return new PipeMonsterFire(x, y, z);
  };

  Monster.prototype.Zilla = function (x, y, z) {
    return new Zilla(x, y, z);
  };

  Monster.prototype.ZillaBullet = function (x, y, z) {
    return new ZillaBullet(x, y, z);
  };

  Monster.prototype.ZillaJetpack = function (x, y, z) {
    return new ZillaJetpack(x, y, z);
  };

  Monster.prototype.ZillaJump = function (x, y, z) {
    return new ZillaJump(x, y, z);
  };

  Monster.prototype.ZillaVac = function (x, y, z) {
    return new ZillaVac(x, y, z);
  };

  Monster.prototype.BlipKing = function (x, y, z) {
    return new BlipKing(x, y, z);
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

  PipeMonster.prototype.rotate = function (angle) {
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

  PipeMonsterFire.prototype.rotate = function (angle) {
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

  Item.prototype.Coin = function (x, y, z) {
    return new Coin(x, y, z);
  };

  ;

  Item.prototype.OneUp = function (x, y, z) {
    return new OneUp(x, y, z);
  };

  ;

  Item.prototype.StarShard = function (x, y, z) {
    return new StarShard(x, y, z);
  };

  ;

  Item.prototype.Donut = function (x, y, z) {
    return new Donut(x, y, z);
  };

  ;

  Item.prototype.LightBlock = function (x, y, z) {
    return new LightBlock(x, y, z);
  };

  ;

  Item.prototype.AstroIcecream = function (x, y, z) {
    return new AstroIcecream(x, y, z);
  };

  ;

  Item.prototype.BomberGet = function (x, y, z) {
    return new BomberGet(x, y, z);
  };

  ;

  Item.prototype.Boot = function (x, y, z) {
    return new Boot(x, y, z);
  };

  ;

  Item.prototype.CheeseBurger = function (x, y, z) {
    return new CheeseBurger(x, y, z);
  };

  ;

  Item.prototype.Cookie = function (x, y, z) {
    return new Cookie(x, y, z);
  };

  ;

  Item.prototype.Fireball = function (x, y, z) {
    return new Fireball(x, y, z);
  };

  ;

  Item.prototype.GetHappy = function (x, y, z) {
    return new GetHappy(x, y, z);
  };

  ;

  Item.prototype.Hat = function (x, y, z) {
    return new Hat(x, y, z);
  };

  ;

  Item.prototype.SanicBurger = function (x, y, z) {
    return new SanicBurger(x, y, z);
  };

  ;

  Item.prototype.VideoGame = function (x, y, z) {
    return new VideoGame(x, y, z);
  };

  ;

  Item.prototype.WalkGuy = function (x, y, z) {
    return new WalkGuy(x, y, z);
  };

  ;

  Item.prototype.Watermelon = function (x, y, z) {
    return new Watermelon(x, y, z);
  };

  ;

  Item.prototype.Bomb = function (x, y, z) {
    return new Bomb(x, y, z);
  };

  ;

  Item.prototype.FireShell = function (x, y, z) {
    return new FireShell(x, y, z);
  };

  ;

  Item.prototype.Shell = function (x, y, z) {
    return new Shell(x, y, z);
  };

  ;

  Item.prototype.Skateboard = function (x, y, z) {
    return new Skateboard(x, y, z);
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

  Skateboard.prototype.rotate = function (angle) {
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

var Entity_1 = require("./Entity");

var global_1 = require("../global");

var Js2tronic =
/** @class */
function () {
  function Js2tronic() {
    this.block = new Block_1.Block();
    this.tronic = new Tronic_1.Tronic();
    this.monster = new Monster_1.Monster();
    this.item = new Item_1.Item();
    this.input = "";
    this.world = [];
    this.output = "";
  }
  /**
   * an entity is assigned a physical position in the world based on its x, y, z coordinates
   *
   * when no position is specified (ie. x=0, y=0, z=0) or if the position is already occupied, the entity gets registered outside the world (y 50+)
   *
   * @param entity - any valid entity (Block, Tronic, Item, Monster)
   */


  Js2tronic.prototype.register = function (entity) {
    var occupied = 0;
    var maxWidth = 399;
    var heightAtWhichOutsideWorldStarts = 50;
    var layerWithOutsideWorld = 200;
    var outsideWorldTargetX = 0;
    var outsideWorldTargetY = 50; // register outside world

    if (entity.position.x === 0 && entity.position.y === 0 && entity.position.z === 0) {
      if (this.world.length > 0) {
        this.world.forEach(function (point) {
          if (point.position.z === layerWithOutsideWorld) {
            if (point.position.y >= heightAtWhichOutsideWorldStarts) {
              // detect the highest x, y coordinate in order to append next entity
              if (point.position.y > outsideWorldTargetY) {
                outsideWorldTargetY = point.position.y;
                outsideWorldTargetX = 0;
              }

              if (point.position.x > outsideWorldTargetX && outsideWorldTargetY === point.position.y) {
                outsideWorldTargetX = point.position.x;
              }
            }
          }
        });
      }

      outsideWorldTargetX++;

      if (outsideWorldTargetX > maxWidth) {
        outsideWorldTargetX = 0;
        outsideWorldTargetY++;
      }

      entity.position.x = outsideWorldTargetX;
      entity.position.y = outsideWorldTargetY;
      entity.position.z = layerWithOutsideWorld;
    } // attempt register at specified position in world


    if (this.world.length > 0) {
      for (var _i = 0, _a = this.world; _i < _a.length; _i++) {
        var point = _a[_i];

        if (point.position.x === entity.position.x && point.position.y === entity.position.y && point.position.z === entity.position.z && point.pushed === entity.pushed) {
          occupied++;
          break;
        }
      }
    } // Successful registration


    if (occupied === 0) {
      this.world.push(entity);
    } // Unsuccessful registration - override coordinates and place outside world


    if (occupied !== 0) {
      entity.position.x = 0;
      entity.position.y = 0;
      entity.position.z = 0;
      this.register(entity);
    }

    occupied = 0;
    this.tronifyWorld();
  };
  /**
   * use private method to convert this.input tronic strings to this.world js objects
   *
   * @param inputTronicString - optionnally pass in tronic strings manually
   */


  Js2tronic.prototype.import = function (inputTronicString) {
    if (inputTronicString) this.input = inputTronicString;
    if (this.input.length > 0) this.jsifyWorld();
  };
  /**
   * generate a tronic string of text that Super Tony Land can understand
   */


  Js2tronic.prototype.jsifyWorld = function () {
    var tronicArray;
    var tronicProps;
    var entity;
    var delimiter = "|";
    var comma = ",";
    var colon = ":";
    var newLine = "\n";

    if (this.input.length > 0) {
      tronicArray = this.input.split(newLine);

      for (var _i = 0, tronicArray_1 = tronicArray; _i < tronicArray_1.length; _i++) {
        var tronicString = tronicArray_1[_i];

        if (tronicString.length > 1) {
          tronicProps = [];
          tronicProps = tronicString.split(delimiter);
          var tronicName = tronicProps[0];
          var tronicPosition = tronicProps[1].split(comma);
          var x = parseInt(tronicPosition[0]);
          var y = parseInt(tronicPosition[1]);
          var z = parseInt(tronicPosition[2]);
          var skip = false;

          switch (true) {
            case typeof global_1.j2t.block[tronicName.replace(/\s+/, "")] === "function":
              entity = global_1.j2t.block[tronicName.replace(/\s+/, "")]().place(x, y, z);
              break;

            case typeof global_1.j2t.tronic[tronicName.replace(/\s+/, "")] === "function":
              entity = global_1.j2t.tronic[tronicName.replace(/\s+/, "")]().place(x, y, z);
              break;

            case typeof global_1.j2t.item[tronicName.replace(/\s+/, "")] === "function":
              entity = global_1.j2t.item[tronicName.replace(/\s+/, "")]().place(x, y, z);
              break;

            case typeof global_1.j2t.monster[tronicName.replace(/\s+/, "")] === "function":
              entity = global_1.j2t.monster[tronicName.replace(/\s+/, "")]().place(x, y, z);
              break;

            default:
              // if the tronicName is not found for some reason, skip this iteration of the for loop.
              skip = true;
              entity = new Entity_1.Entity();
              break;
          }

          if (!skip) {
            entity.name = tronicName;
            tronicProps.shift();

            if (tronicProps.length > 0) {
              for (var _a = 0, tronicProps_1 = tronicProps; _a < tronicProps_1.length; _a++) {
                var unknownProperty = tronicProps_1[_a];

                switch (true) {
                  case unknownProperty.toLowerCase().startsWith("tronictype"):
                    entity.tronictype = unknownProperty.split(colon).length > 1 ? unknownProperty.split(colon)[1] : "";
                    break;

                  case unknownProperty.toLowerCase().startsWith("tronicnum"):
                    entity.tronicnum = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("door"):
                    console.log(unknownProperty);
                    entity.door = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("pipe"):
                    entity.pipe = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("troniccon"):
                    if (!entity.troniccon) entity.troniccon = {};
                    var unknownPort = unknownProperty.split(colon)[1];

                    switch (true) {
                      case unknownPort.toLowerCase().startsWith("fa"):
                        entity.troniccon.fa = unknownPort.split(comma)[1];
                        break;

                      case unknownPort.toLowerCase().startsWith("fb"):
                        entity.troniccon.fb = unknownPort.split(comma)[1];
                        break;

                      case unknownPort.toLowerCase().startsWith("da"):
                        entity.troniccon.da = unknownPort.split(comma)[1];
                        break;

                      case unknownPort.toLowerCase().startsWith("db"):
                        entity.troniccon.db = unknownPort.split(comma)[1];
                        break;

                      case unknownPort.toLowerCase().startsWith("do"):
                        entity.troniccon.do = unknownPort.split(comma)[1];
                        break;

                      case unknownPort.toLowerCase().startsWith("dz"):
                        entity.troniccon.dz = unknownPort.split(comma)[1];
                        break;
                    }

                    break;

                  case unknownProperty.toLowerCase().startsWith("pushed"):
                    entity.pushed = true;
                    break;

                  case unknownProperty.toLowerCase().startsWith("grav"):
                    entity.grav = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("dir"):
                    entity.dir = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("group"):
                    entity.group = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("load"):
                    //TODO handle chibi/normish sprite detail props
                    entity.load = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("contain"):
                    entity.contain = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("calc"):
                    entity.calc = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("if"):
                    entity.if = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("comment"):
                    entity.comment = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("text"):
                    entity.text = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("bang"):
                    entity.bang = unknownProperty.split(colon)[1];
                    break;

                  case unknownProperty.toLowerCase().startsWith("warp"):
                    entity.warp = unknownProperty.split(colon)[1];
                    break;
                }
              }
            }
          }
        }
      }
    }
  };
  /**
   * generate a tronic string of text that Super Tony Land can understand
   */


  Js2tronic.prototype.tronifyWorld = function () {
    var tronicString = "";
    var delimiter = "|";
    var comma = ",";
    var colon = ":";
    var newLine = "\n";

    if (this.world.length > 0) {
      for (var _i = 0, _a = this.world; _i < _a.length; _i++) {
        var entity = _a[_i];

        if (entity.name) {
          tronicString += entity.name;
        }

        if (entity.position && entity.position.x) {
          tronicString += delimiter + entity.position.x;
        } else {
          tronicString += delimiter + "0";
        }

        if (entity.position && entity.position.y) {
          tronicString += comma + entity.position.y;
        } else {
          tronicString += comma + "0";
        }

        if (entity.position && entity.position.z) {
          tronicString += comma + entity.position.z;
        } else {
          tronicString += comma + "0";
        }

        if (entity.position && entity.position.d) {
          tronicString += comma + entity.position.d;
        } else {
          tronicString += comma + "0";
        }

        if (entity.tronictype === "null") {
          tronicString += delimiter + "tronictype" + colon + "null";
        } else if (entity.tronicnum && entity.tronictype === "") {
          tronicString += delimiter + "tronictype" + colon + "";
        }

        if (entity.tronicnum) {
          tronicString += delimiter + "tronicnum" + colon + String(entity.tronicnum);
        }

        if (entity.troniccon && entity.troniccon.fa) {
          tronicString += delimiter + "troniccon" + colon + "fa" + comma + String(entity.troniccon.fa);
        }

        if (entity.troniccon && entity.troniccon.fb) {
          tronicString += delimiter + "troniccon" + colon + "fb" + comma + String(entity.troniccon.fb);
        }

        if (entity.troniccon && entity.troniccon.da) {
          tronicString += delimiter + "troniccon" + colon + "da" + comma + String(entity.troniccon.da);
        }

        if (entity.troniccon && entity.troniccon.db) {
          tronicString += delimiter + "troniccon" + colon + "db" + comma + String(entity.troniccon.db);
        }

        if (entity.troniccon && entity.troniccon.do) {
          tronicString += delimiter + "troniccon" + colon + "do" + comma + String(entity.troniccon.do);
        }

        if (entity.troniccon && entity.troniccon.dz) {
          tronicString += delimiter + "troniccon" + colon + "dz" + comma + String(entity.troniccon.dz);
        }

        if (entity.pushed) {
          tronicString += delimiter + "pushed";
        }

        if (entity.grav) {
          tronicString += delimiter + "grav" + colon + entity.grav;
        }

        if (entity.dir) {
          tronicString += delimiter + "dir" + colon + entity.dir;
        }

        if (entity.group) {
          tronicString += delimiter + "group" + colon + entity.group;
        }

        if (entity.load) {
          tronicString += delimiter + "load" + colon + entity.load;
        }

        if (entity.contain) {
          tronicString += delimiter + "contain" + colon + entity.contain;
        }

        if (entity.calc) {
          tronicString += delimiter + "calc" + colon + entity.calc;
        }

        if (entity.if) {
          tronicString += delimiter + "if" + colon + entity.if;
        }

        if (entity.comment) {
          tronicString += delimiter + "comment" + colon + entity.comment;
        }

        if (entity.text) {
          tronicString += delimiter + "text" + colon + entity.text;
        }

        if (entity.bang) {
          tronicString += delimiter + "bang" + colon + entity.bang;
        }

        if (entity.warp) {
          tronicString += delimiter + "warp" + colon + entity.warp;
        }

        if (entity.door) {
          tronicString += delimiter + "door" + colon + String(entity.door);
        }

        if (entity.pipe) {
          tronicString += delimiter + "pipe" + colon + String(entity.pipe);
        }

        tronicString += newLine;
      }
    }

    this.output = tronicString;
  };

  return Js2tronic;
}();

exports.Js2tronic = Js2tronic;
},{"./Block":"UejY","./Tronic":"e5pL","./Monster":"Tdn4","./Item":"yMxt","./Entity":"Zp55","../global":"dgRt"}],"dgRt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Js2tronic_1 = require("./class/Js2tronic");

exports.j2t = new Js2tronic_1.Js2tronic();
},{"./class/Js2tronic":"Gwg2"}],"JkVb":[function(require,module,exports) {
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

var global_1 = require("./global");

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

var IfOperator_1 = require("./enum/IfOperator"); // DOM accessible functions


function readSingleFile(e) {
  var file = e.target.files[0];

  if (!file) {
    return;
  }

  var reader = new FileReader();

  reader.onload = function (e) {
    if (e && e.target && e.target.result) {
      var contents = e.target.result;
      var mutated = contents.toString();
      var delimiter = "*begin data*";
      mutated = mutated.substring(mutated.indexOf(delimiter) + delimiter.length);
      global_1.j2t.input = mutated;
      global_1.j2t.import();
      console.log(global_1.j2t.world);
      console.log(global_1.j2t.output);
      displayContents(mutated);
    }
  };

  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  if (element && contents) element.textContent = contents;
}

var fileInput = document.getElementById('file-input');

if (fileInput) {
  fileInput.addEventListener('change', readSingleFile, false);
}

console.log(GravityState_1.GravityState.FALL);
console.log(global_1.j2t);
var test = global_1.j2t.block.BrickBlue();
console.log(global_1.j2t.output);
console.log(test);
test.pushToBackground().stuffWith(Stuffable_1.Stuffable.GRUBBY);
console.log(test);
var cartrdige = global_1.j2t.block.Cartridge();
cartrdige.spriteVariant(CartridgeVariant_1.CartridgeVariant.FLOOR);
console.log(cartrdige);
var desert = global_1.j2t.block.Desert();
desert.spriteVariant(DesertVariant_1.DesertVariant.TOP_ORANGE);
console.log(desert);
var dirt = global_1.j2t.block.Dirt();
dirt.spriteVariant(DirtVariant_1.DirtVariant.TOP_LONG);
console.log(dirt);
var moon = global_1.j2t.block.Moon();
moon.spriteVariant(MoonVariant_1.MoonVariant.TOP_BUMP);
console.log(moon);
var oneWay = global_1.j2t.block.OneWay();
oneWay.spriteVariant(OneWayVariant_1.OneWayVariant.FILLER);
console.log(oneWay);
var robot = global_1.j2t.block.Robot();
robot.spriteVariant(RobotVariant_1.RobotVariant.BOTTOM_LEFT_CORNER);
console.log(robot);
var saurus = global_1.j2t.block.Saurus();
saurus.spriteVariant(SaurusVariant_1.SaurusVariant.FILLER_THREE_SCALES);
console.log(saurus);
var ship = global_1.j2t.block.Ship();
ship.spriteVariant(ShipVariant_1.ShipVariant.FILLER_LEFT_TOP_RIGHT_NOTCHES_VARIANT_A);
console.log(ship);
var fertbox = global_1.j2t.block.FertBox();
console.log(global_1.j2t.output);
fertbox.rotate(RotationAngle_1.RotationAngle.UPSIDE_DOWN);
console.log(fertbox);
var gravBlock = global_1.j2t.block.GravityBlock();
gravBlock.label("test label").pushToBackground();
console.log(gravBlock);
console.log(gravBlock.tronicnum);
var iceblock = global_1.j2t.block.IceBlock();
console.log(iceblock);
iceblock.stuffWith(Stuffable_1.Stuffable.GRUBBY);
console.log(iceblock);
var InvisableBlock = global_1.j2t.block.InvisableBlock();
InvisableBlock.rotate(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT);
console.log(InvisableBlock);
var KaizoBlock = global_1.j2t.block.KaizoBlock();
KaizoBlock.rotate(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT);
console.log(KaizoBlock);
var MetalBlock = global_1.j2t.block.MetalBlock();
MetalBlock;
console.log(MetalBlock);
var QuestionBlock = global_1.j2t.block.QuestionBlock();
QuestionBlock.rotate(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE).stuffWith(Stuffable_1.Stuffable.BOOT);
console.log(QuestionBlock);
var FloatBlock = global_1.j2t.block.FloatBlock();
FloatBlock.rotate(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE);
console.log(FloatBlock);
var ChainBend = global_1.j2t.block.ChainBend();
console.log(global_1.j2t.output);
ChainBend.pushToBackground().rotate(RotationAngle_1.RotationAngle.COUNTER_CLOCKWISE);
console.log(ChainBend);
var myDoor = global_1.j2t.block.Door(22, 55, 44);
myDoor.place(222, 33, 100);
myDoor.exit.place(111, 22, 0);
console.log(myDoor);
console.log("======[ V Tronics V ]======");
console.log(gravBlock);
var TronicDelay = global_1.j2t.tronic.TronicDelay();
TronicDelay.flowTo(gravBlock).delayInSeconds(gravBlock);
console.log(TronicDelay);
var TronicIf = global_1.j2t.tronic.TronicIf();
TronicIf.pushToBackground().rotate(RotationAngle_1.RotationAngle.CLOCKWISE).trueFlowTo(gravBlock).falseFlowTo(gravBlock).a(gravBlock).b(gravBlock).groupTo(gravBlock).ifOperator(IfOperator_1.IfOperator.EQUAL);
console.log(TronicIf);
TronicIf.place(2, 40, 200);
console.log(TronicIf);
TronicIf.place(399, 49, 100);
var obj = {
  test: global_1.j2t.tronic.TronicCalc()
};
console.log(obj.test);
obj.test.place(4, 23, 0).label("changed position");
console.log(obj.test);
console.log(global_1.j2t.world);
console.log(global_1.j2t.output);
},{"./global":"dgRt","./enum/Stuffable":"JkVb","./enum/CartridgeVariant":"W7xP","./enum/DesertVariant":"JJoq","./enum/DirtVariant":"8VLF","./enum/MoonVariant":"WxEB","./enum/OneWayVariant":"luA9","./enum/RobotVariant":"/RE3","./enum/SaurusVariant":"mRcx","./enum/ShipVariant":"qFE2","./enum/RotationAngle":"mIhr","./enum/GravityState":"IIep","./enum/IfOperator":"/GIV"}]},{},["7QCb"], null)
//# sourceMappingURL=https://xprosper.github.io/js2tronic/src.f1c395fd.js.map