import Player from "./player"
import Level from "./level"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.dimensions = {width: canvas.width, height: canvas.height};
        // this.start();
        this.registerStart();
        this.openingText();
    }

    openingText () {
        this.ctx.font = '80px Arial'
        this.ctx.strokeText("Click To Start", 300, 500);

        // document.addEventListener('mousedown', (e) => {
        //     console.log(e)
        //     if (e) {
        //         this.ctx.clearRect(0,0,1000,1000);
        //     }
        // });
    }

    registerStart () {

        // this.boundClick = this.boundClick.bind(this);
        document.addEventListener('mousedown', (e) => {
            console.log(e)
            let clickCount = 0
            if (e && clickCount < 2) {
                this.ctx.clearRect(0, 0, 1000, 1000);
                this.start();
                clickCount += 1;
            }

            console.log(`${clickCount} this is clicks`)
        });
    }

    start() {

        this.level = new Level(this.dimensions, this.canvas, {
            boxSize: 50,
            boxSpeed: 4,
            boxSpacing: 1000
        });


        this.player = new Player(this.canvas);

        this.animate();

    }


    animate() {
        // Drawing background //
        // ctx.translate(0.5, 0.5);
        this.ctx.clearRect(0, 0, 1000, 1000);

        const canvasHeight = 1000;
        const rectSize = canvasHeight / 4;

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                const colorValue = 255 - (255 / 5) * j;
                const grayscale = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
                this.ctx.fillStyle = grayscale;
                this.ctx.fillRect(j * rectSize, i * rectSize, rectSize, rectSize);
            }
        }
        
        this.ctx.lineWidth = 11;
        this.ctx.strokeStyle = "#348888";
        this.ctx.beginPath();
        this.ctx.moveTo(0, 500)
        this.ctx.lineTo(1000, 500);
        
        this.ctx.stroke();
        // Background //

        this.level.animate();
        this.player.drawBox();
        requestAnimationFrame(this.animate.bind(this));
    } 


}

export default Game;