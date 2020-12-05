var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);
var Hero = /** @class */ (function () {
    function Hero() {
        this.imageEl = new Image();
    }
    Hero.prototype.draw = function (posx, posy, width, height) {
        ctx.beginPath();
        ctx.rect(posx, posy, width, height);
        ctx.fill();
    };
    return Hero;
}());
var myHero = new Hero();
var halfWidth = canvas.width / 2;
var halfHeight = canvas.height / 2;
myHero.draw(halfWidth, halfHeight, 50, 50);
