
import Example from "./scripts/example"
import Player from "./scripts/player"
import Level from "./scripts/level"
import TitleStyling from './scripts/styling'
import Game from "./scripts/game"


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("my-canvas");
    const ctx = canvas.getContext("2d")
    const dimensions = {width: canvas.width, height: canvas.height };
  
    
    new Game(canvas)
    



}) 


    //////////////////////////
    // const level = new Level(dimensions, canvas, {
    //     boxSize: 50,
    //     boxSpeed: 4,
    //     boxSpacing: 200
    // });

    // const player = new Player(canvas);

    // const canvasHeight = 1000;
    // const rectSize = canvasHeight / 4;
  

    // function animate() {
    //     // Drawing background //
    //     // ctx.translate(0.5, 0.5);
    //     ctx.clearRect(0, 0, 1000, 1000);

  
    //     for (let i = 0; i < 6; i++) {
    //         for (let j = 0; j < 6; j++) {
    //             const colorValue = 255 - (255 / 5) * j;
    //             const grayscale = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
    //             ctx.fillStyle = grayscale;
    //             ctx.fillRect(j * rectSize, i * rectSize, rectSize, rectSize);
    //         }
    //     }
        
    //     ctx.lineWidth = 11;
    //     ctx.strokeStyle = "#348888";
    //     ctx.beginPath();
    //     ctx.moveTo(0, 500)
    //     ctx.lineTo(1000, 500);
        
    //     ctx.stroke();
    //     // Background //

    //     level.animate();
    //     player.drawBox();
    //     requestAnimationFrame(animate);
    // }

    // animate();
  
    
