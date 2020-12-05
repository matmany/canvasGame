const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;



console.log(canvas)

interface coordinates{
    posx: number, 
    posy: number, 
    width: number, 
    height: number
}

class Hero{
    imageEl = new Image()

    constructor(path: string){
        this.imageEl.src = path
    }

    draw(coord: coordinates):void{
        ctx.beginPath();
        ctx.rect(posx, posy, width, height);
        ctx.fill();
    }

    drawSprite(coord: coordinates){

    }

    move()
}

const myHero = new Hero();
const halfWidth = canvas.width/2;
const halfHeight = canvas.height/2;

myHero.draw(halfWidth, halfHeight, 10, 10);

