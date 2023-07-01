const CONSTANTS = {
    E_BOXES_SPEED: 4,
    WARM_UP_SECONDS: 3, 
    BOX_SPACING: Math.floor(Math.random() * 100) + 300,
    BOX_SIZE: 50
}

function boxSpacing(space) {
    return Math.floor(Math.random() * 100) + space;
}

class Level {
    constructor (dimensions, canvas, options) {
        this.dimensions = dimensions;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.boxSpeed = options.boxSpeed;
        this.boxSpacing = options.boxSpacing;
        this.boxSize = options.boxSize;

        // this.loopLimit = 3;
        // this.loopCount = 0;
        const firstBoxDistance = this.dimensions.width + 100

        this.boxes = [
            this.randomBox(firstBoxDistance),
            this.randomBox(firstBoxDistance + (boxSpacing(this.boxSpacing))),
            this.randomBox(firstBoxDistance + (2 * boxSpacing(this.boxSpacing)))
        ];

        this.drawEboxes();

        setInterval(() => {
            this.boxSpeed += 2;
            // this.boxSize += 10;
        }, 10000);
    //   this.animate();
    }


    handleClick() {
        this.animate
    }

    eachBox(callback) {
        this.boxes.forEach(callback.bind(this))
    }

    
    randomBox(fbd) {
        // return Math.floor(Math.random() * max);
        
        const box = {
            left: fbd,
            right: this.boxSize + fbd
        }
        
        return box
    }


    moveBoxes() {
        this.eachBox((box) => {
            box.left -= this.boxSpeed;
            box.right -= this.boxSpeed;
            if (box.right <= 0) {
                this.boxes.shift();
                // if (this.loopCount < this.loopLimit) {
                    const reX = this.dimensions.width + boxSpacing(this.boxSpacing);
                    this.boxes.push(this.randomBox(reX));
                    // this.loopCount++;
                // }
            }
        });
        // this.drawEboxes();
    }
    
    drawEboxes() {
        this.eachBox((box) => {
            // this.ctx.lineWidth = 5;
            // this.ctx.strokeStyle = "grey";
            // this.ctx.strokeRect(box.left, 443, CONSTANTS.BOX_SIZE, CONSTANTS.BOX_SIZE);
            this.ctx.fillStyle = "#6046F0";
            this.ctx.fillRect(box.left, 444.5, this.boxSize, this.boxSize);
        });
    }


    animate() {
        this.moveBoxes();
        
        this.drawEboxes();
        
        // requestAnimationFrame(this.animate.bind(this));
    }
      


}

export default Level;
// make a level and a game class, prompt the pieces to move 

// make the moving pieces activate on the level class 