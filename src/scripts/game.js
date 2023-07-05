import Player from "./player"
import Level from "./level"
import TitleStyling from "./styling"

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.bottomCanvas = document.getElementById('bottom-canvas')
        this.ctx = canvas.getContext('2d');
        this.ctx2 = this.bottomCanvas.getContext('2d')
        this.dimensions = {width: canvas.width, height: canvas.height};
        // this.start();
        this.started = false;
        this.registerStart();
        this.openingText();


        this.timer = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            gameSeconds: 0,
            count: 0
        }
    }

    openingText () {
        this.ctx.lineWidth = 2;
        this.ctx.font = '80px Tahoma'
        this.ctx.strokeStyle = "#FF0000"
        this.ctx.strokeText("Click To Start", 270, 275);

        new TitleStyling()

    }

    closingText() {
        
        this.ctx.lineWidth = 2;
        this.ctx.font = '40px Tahoma'
        this.ctx.strokeStyle = "#FF0000"
        this.ctx.strokeText(`Game Over, Your Time = ${this.savedTime.min} Minutes, ${this.savedTime.sec} Seconds`, 75, 245);

        this.ctx.lineWidth = 2;
        this.ctx.font = '40px Tahoma'
        this.ctx.strokeStyle = "#348888"
        this.ctx.strokeText('Click To Restart', 345, 305);

    }

    registerStart () {

        document.addEventListener('mousedown', (e) => {
            console.log(e)
            if (!this.started && e) {
                this.started = true;
                    this.start();
                }
            });
    }


    countTimer() {

        
        this.timer.count++;

        if (this.timer.count === 60) {
            this.timer.seconds++;
            this.timer.gameSeconds++;
            this.timer.count = 0; 
        }

        if (this.timer.seconds === 60) {
            this.timer.minutes++;
            this.timer.seconds = 0;
        }

        if (this.timer.minutes === 60 ) {
            this.timer.hours++;
            this.timer.minutes = 0;
    
        }
                
            
    }
        
    drawTimer() {
        this.ctx2.lineWidth = 4;
        this.ctx2.font = '50px Tahoma'
        this.ctx2.strokeStyle = "#FF0000"
        this.ctx2.strokeText(`${this.timer.gameSeconds}`, 32, 50);
        
        
    }

    resetTimer () {

        this.timer.count = 0;
        this.timer.hours = 0;
        this.timer.minutes = 0;
        this.timer.seconds = 0;
        this.timer.gameSeconds = 0;
    }

    start() {

        this.level = new Level(this.dimensions, this.canvas, {
            boxSize: 50,
            boxSpeed: 4,
            boxSpacing: 400
        });


        this.player = new Player(this.canvas);

        this.animate();

    }


    gameOver() {
        return (
            this.level.collide(this.player.playerSize, this.player.currentPlayerColor())
        );
    }

    animate() {
        // Drawing background //
        // ctx.translate(0.5, 0.5);
        this.ctx.clearRect(0, 0, 1000, 1000);
        this.ctx2.clearRect(0,0,1000,1000)
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
        
        // this.ctx.lineWidth = 11;
        // this.ctx.strokeStyle = "#348888";
        // this.ctx.beginPath();
        // this.ctx.moveTo(0, 500)
        // this.ctx.lineTo(1000, 500);
        
        // this.ctx.stroke();
        // Background //

        this.level.animate();
        this.player.drawBox();
        this.countTimer();
        this.drawTimer();


        if (this.gameOver()) {
            // alert('game over');
            this.savedTime = {
                min: this.timer.minutes,
                sec: this.timer.seconds
            }
            this.ctx.clearRect(0,0,1000,1000);
            this.ctx2.clearRect(0,0,1000,1000)

            this.closingText();
            this.resetTimer();
            this.started = false;
            console.log('collision has occured')
        } 
        if (this.started) {
            requestAnimationFrame(this.animate.bind(this));
        }
    } 


}

export default Game;