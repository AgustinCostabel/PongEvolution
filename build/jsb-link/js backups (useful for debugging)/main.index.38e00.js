window.__require = function e(t, o, n) {
function i(c, s) {
if (!o[c]) {
if (!t[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!t[l]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = l;
}
var a = o[c] = {
exports: {}
};
t[c][0].call(a.exports, function(e) {
return i(t[c][1][e] || e);
}, a, a.exports, e, t, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
ControlBallL1: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4da5fopbLlC36nv60AjQJYL", "ControlBallL1");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 300;
t.move = 0;
t.score = 0;
t.label_score = null;
t.black_ball = null;
t.golden_ball = null;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Rectangle<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (5 == this.score ? cc.director.loadScene("Level_2") : cc.director.loadScene("Level_1"));
"RectangleSplit<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (5 == this.score ? cc.director.loadScene("Level_2") : cc.director.loadScene("Level_1"));
};
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.move = Math.random();
};
t.prototype.update = function(e) {
this.node.setPosition(this.node.position.x -= this.speed * e, this.node.position.y);
this.node.y >= 315 && (this.move = 1);
this.node.y <= -315 && (this.move = 0);
this.move > .5 && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.move < .5 && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
if (this.node.x < -485) {
5 == this.score && cc.director.loadScene("Level_1");
this.node.setPosition(485, 630 * Math.random() - 315);
this.move = Math.random();
this.score++;
this.speed += 100;
}
if (5 == this.score) {
this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
}
this.label_score.string = this.score.toString();
};
r([ l(cc.Label) ], t.prototype, "label_score", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "black_ball", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "golden_ball", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ControlBallL2: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "19abdlV7g1ABZVYH86waMks", "ControlBallL2");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 350;
t.move = 0;
t.score = 0;
t.label_score = null;
t.black_ball = null;
t.golden_ball = null;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Rectangle<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (10 == this.score ? cc.director.loadScene("Level_3") : cc.director.loadScene("Level_2"));
"RectangleSplit<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (10 == this.score ? cc.director.loadScene("Level_3") : cc.director.loadScene("Level_2"));
};
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.move = Math.random();
};
t.prototype.update = function(e) {
this.node.setPosition(this.node.position.x -= this.speed * e, this.node.position.y);
this.node.y >= 315 && (this.move = 1);
this.node.y <= -315 && (this.move = 0);
this.move > .5 && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.move < .5 && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
if (this.node.x < -485) {
10 == this.score && cc.director.loadScene("Level_2");
this.node.setPosition(485, 630 * Math.random() - 315);
this.move = Math.random();
this.score++;
this.speed += 50;
}
if (10 == this.score) {
this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
}
this.label_score.string = this.score.toString();
};
r([ l(cc.Label) ], t.prototype, "label_score", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "black_ball", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "golden_ball", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ControlBallL3: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9a018BKCXZF1K23P2bMfcdT", "ControlBallL3");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 200;
t.move = 0;
t.score = 0;
t.label_score = null;
t.black_ball = null;
t.golden_ball = null;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Rectangle<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (15 == this.score ? cc.director.loadScene("Level_4") : cc.director.loadScene("Level_3"));
"RectangleSplit<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (15 == this.score ? cc.director.loadScene("Level_4") : cc.director.loadScene("Level_3"));
};
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.move = Math.random();
};
t.prototype.update = function(e) {
this.node.setPosition(this.node.position.x -= this.speed * e, this.node.position.y);
this.node.y >= 315 && (this.move = 1);
this.node.y <= -315 && (this.move = 0);
this.move > .5 && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.move < .5 && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
if (this.node.x < -485) {
15 == this.score && cc.director.loadScene("Level_3");
this.node.setPosition(485, 630 * Math.random() - 315);
this.move = Math.random();
this.score++;
this.speed += 50;
}
if (15 == this.score) {
this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
}
this.label_score.string = this.score.toString();
};
r([ l(cc.Label) ], t.prototype, "label_score", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "black_ball", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "golden_ball", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
"ControlBallL4.2": [ function(e, t, o) {
"use strict";
cc._RF.push(t, "17a17DcKTlLjbheagqa0bbT", "ControlBallL4.2");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 10;
t.move = 0;
t.score = 0;
t.label_score = null;
t.black_ball = null;
t.golden_ball = null;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Rectangle<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && cc.director.loadScene("Win");
"RectangleSplit<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && cc.director.loadScene("Win");
};
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.move = Math.random();
};
t.prototype.update = function(e) {
if (this.node.x < 490) {
this.node.y >= 315 && (this.move = 1);
this.node.y <= -315 && (this.move = 0);
this.move > .5 && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.move < .5 && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
this.node.x < -485 && this.node.setPosition(485, 630 * Math.random() - 315);
}
if (this.node.x > 490 && this.node.x < 500) {
this.speed = 700;
this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
this.node.setPosition(485, 630 * Math.random() - 315);
}
this.node.setPosition(this.node.position.x -= this.speed * e, this.node.position.y);
};
r([ l(cc.Label) ], t.prototype, "label_score", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "black_ball", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "golden_ball", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ControlBallL4: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2ab51eW671KWoeaeKr3u0Ds", "ControlBallL4");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 300;
t.move = 0;
t.score = 0;
t.label_score = null;
t.black_ball = null;
t.golden_ball = null;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Rectangle<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (10 == this.score ? cc.director.loadScene("Win") : cc.director.loadScene("Level_4"));
"RectangleSplit<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (10 == this.score ? cc.director.loadScene("Win") : cc.director.loadScene("Level_4"));
};
t.prototype.onLoad = function() {};
t.prototype.start = function() {
this.move = Math.random();
};
t.prototype.update = function(e) {
this.node.setPosition(this.node.position.x -= this.speed * e, this.node.position.y);
this.node.y >= 230 && (this.move = 1);
this.node.y <= -230 && (this.move = 0);
this.move > .5 && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.move < .5 && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
if (this.node.x < -570) {
10 == this.score && cc.director.loadScene("Level_4");
this.node.setPosition(570, 630 * Math.random() - 315);
this.move = Math.random();
this.score++;
this.speed += 100;
}
10 == this.score && this.node.destroy();
this.label_score.string = this.score.toString();
};
r([ l(cc.Label) ], t.prototype, "label_score", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "black_ball", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "golden_ball", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ControlBallTutorial: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4fe7fVy6hVDn6f9P90tla99", "ControlBallTutorial");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.speed = 150;
t.move = 0;
t.score = 0;
t.label_score = null;
t.label_keys = null;
t.black_ball = null;
t.golden_ball = null;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Rectangle<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (this.score < 2 ? cc.director.loadScene("Level_Tutorial") : cc.director.loadScene("Level_1"));
"RectangleSplit<BoxCollider>" == e.name && "Ball<CircleCollider>" == t.name && (this.score < 2 ? cc.director.loadScene("Level_Tutorial") : cc.director.loadScene("Level_1"));
};
t.prototype.onLoad = function() {
this.label_keys.string = "DODGE the ball, use ARROWS to go UP and DOWN";
};
t.prototype.start = function() {
this.move = Math.random();
};
t.prototype.update = function(e) {
this.node.setPosition(this.node.position.x -= this.speed * e, this.node.position.y);
this.node.y >= 315 && (this.move = 1);
this.node.y <= -315 && (this.move = 0);
this.move > .5 && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.move < .5 && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
if (this.node.x < -485) {
this.node.setPosition(485, 630 * Math.random() - 315);
this.move = Math.random();
2 == this.score && cc.director.loadScene("Level_Tutorial");
this.score++;
}
1 == this.score && (this.label_keys.string = "Use SPACE to SPLIT the BAR");
if (2 == this.score) {
this.label_keys.string = "HIT the GOLDEN ball to win the level";
this.node.getComponent(cc.Sprite).spriteFrame = this.golden_ball;
this.node.getChildByName("particlesystem").getComponent(cc.ParticleSystem).resetSystem();
}
this.label_score.string = this.score.toString();
};
r([ l(cc.Label) ], t.prototype, "label_score", void 0);
r([ l(cc.Label) ], t.prototype, "label_keys", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "black_ball", void 0);
r([ l(cc.SpriteFrame) ], t.prototype, "golden_ball", void 0);
return r([ s ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
ControlRectangleSplit: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "8ddd3G8IzBNJrwTftrAcj58", "ControlRectangleSplit");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = (c.property, function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveUp = 0;
t.moveDown = 0;
t.speed = 1e3;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Ball<CircleCollider>" == e.name && "Rectangle<BoxCollider>" == t.name && this.node.destroy();
};
t.prototype.moveRectangle = function(e) {
switch (e.keyCode) {
case cc.macro.KEY.up:
this.moveUp = 1;
this.moveDown = 0;
break;

case cc.macro.KEY.down:
this.moveDown = 1;
this.moveUp = 0;
break;

case cc.macro.KEY.space:
this.node.position.x < -500 ? this.node.setPosition(-400, this.node.position.y) : this.node.setPosition(-800, this.node.position.y);
}
};
t.prototype.StopR = function(e) {
switch (e.keyCode) {
case cc.macro.KEY.up:
this.moveUp = 0;
break;

case cc.macro.KEY.down:
this.moveDown = 0;
}
};
t.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRectangle, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.StopR, this);
};
t.prototype.start = function() {};
t.prototype.update = function(e) {
1 == this.moveUp && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
1 == this.moveDown && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.node.y > 195 && this.node.setPosition(this.node.position.x, 195);
this.node.y < -195 && this.node.setPosition(this.node.position.x, -195);
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {} ],
ControlRectangle: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "2a5canghEJLIrnrP/L6b75m", "ControlRectangle");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = (c.property, function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.moveUp = 0;
t.moveDown = 0;
t.speed = 1e3;
return t;
}
t.prototype.onCollisionEnter = function(e, t) {
"Ball<CircleCollider>" == e.name && "Rectangle<BoxCollider>" == t.name && this.node.destroy();
};
t.prototype.moveRectangle = function(e) {
switch (e.keyCode) {
case cc.macro.KEY.up:
this.moveUp = 1;
this.moveDown = 0;
break;

case cc.macro.KEY.down:
this.moveDown = 1;
this.moveUp = 0;
break;

case cc.macro.KEY.space:
this.node.position.x < -500 ? this.node.setPosition(-400, this.node.position.y) : this.node.setPosition(-800, this.node.position.y);
}
};
t.prototype.StopR = function(e) {
switch (e.keyCode) {
case cc.macro.KEY.up:
this.moveUp = 0;
break;

case cc.macro.KEY.down:
this.moveDown = 0;
}
};
t.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.moveRectangle, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.StopR, this);
};
t.prototype.start = function() {};
t.prototype.update = function(e) {
1 == this.moveUp && this.node.setPosition(this.node.position.x, this.node.position.y += this.speed * e);
1 == this.moveDown && this.node.setPosition(this.node.position.x, this.node.position.y -= this.speed * e);
this.node.y > 270 && this.node.setPosition(this.node.position.x, 270);
this.node.y < -270 && this.node.setPosition(this.node.position.x, -270);
};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {} ],
Game: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c1cfbC0CmlDz6sG0ldx/3Ww", "Game");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, l = (c.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
t.prototype.start = function() {};
t.prototype.update = function() {};
return r([ s ], t);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "ControlBallL1", "ControlBallL2", "ControlBallL3", "ControlBallL4.2", "ControlBallL4", "ControlBallTutorial", "ControlRectangle", "ControlRectangleSplit", "Game" ]);