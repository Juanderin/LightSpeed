const CONSTANTS = {
    E_BOXES_SPEED: 4,
    WARM_UP_SECONDS: 3, 
    BOX_SPACING: Math.floor(Math.random() * 100) + 300,
    BOX_SIZE: 50
}

function boxSpacing(space) {
    return Math.floor(Math.random() * 600) + space;
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
        
        // this.swatches = {
        //     KeyA: {
        //         r: Math.floor(Math.random() * 256), 
        //         g: Math.floor(Math.random() * 256), 
        //         b: Math.floor(Math.random() * 256)
        //     },
        //     KeyS: {
        //         r: Math.floor(Math.random() * 256), 
        //         g: Math.floor(Math.random() * 256), 
        //         b: Math.floor(Math.random() * 256)
        //     },
        //     KeyD: {
        //         r: Math.floor(Math.random() * 256), 
        //         g: Math.floor(Math.random() * 256), 
        //         b: Math.floor(Math.random() * 256)
        //     }
        // };
        this.swatches = {
            KeyA: {
                r: 255,
                g: 0,
                b: 0
            },
            KeyS: {
                r: 0,
                g: 255,
                b: 0
            },
            KeyD: {
                r: 0,
                g: 0,
                b: 255
            }
        };

        this.mixColors = this.generateRandomColorMix();

        this.boxes = [
            this.randomBox(firstBoxDistance),
            this.randomBox(firstBoxDistance + (boxSpacing(this.boxSpacing))),
            this.randomBox(firstBoxDistance + (2 * boxSpacing(this.boxSpacing)))
        ];


        this.drawEboxes();

        setInterval(() => {
            this.boxSpeed += 0.5;
            // this.boxSize += 10;
        }, 15000);
    //   this.animate();
    }

    eachBox(callback) {
        this.boxes.forEach(callback.bind(this))
    }

    generateRandomColorMix() {
        const colors = [
            this.swatches.KeyA,
            this.swatches.KeyS,
            this.swatches.KeyD,
            {
                r: this.swatches.KeyA.r + this.swatches.KeyS.r,
                g: this.swatches.KeyA.g + this.swatches.KeyS.g,
                b: this.swatches.KeyA.b + this.swatches.KeyS.b
            },
            {
                r: this.swatches.KeyA.r + this.swatches.KeyD.r,
                g: this.swatches.KeyA.g + this.swatches.KeyD.g,
                b: this.swatches.KeyA.b + this.swatches.KeyD.b
            },
            {
                r: this.swatches.KeyD.r + this.swatches.KeyS.r,
                g: this.swatches.KeyD.g + this.swatches.KeyS.g,
                b: this.swatches.KeyD.b + this.swatches.KeyS.b
            },
            {
                r: this.swatches.KeyA.r + this.swatches.KeyD.r + this.swatches.KeyS.r,
                g: this.swatches.KeyA.g + this.swatches.KeyD.g + this.swatches.KeyS.g,
                b: this.swatches.KeyA.b + this.swatches.KeyD.b + this.swatches.KeyS.b
            }
        ];

        return colors.map(color => `rgb(${color.r}, ${color.g}, ${color.b})`);
    }

    changeLevel() {
        this.swatches = {
            KeyA: {
                r: Math.floor(Math.random() * 256), 
                g: Math.floor(Math.random() * 256), 
                b: Math.floor(Math.random() * 256)
            },
            KeyS: {
                r: Math.floor(Math.random() * 256), 
                g: Math.floor(Math.random() * 256), 
                b: Math.floor(Math.random() * 256)
            },
            KeyD: {
                r: Math.floor(Math.random() * 256), 
                g: Math.floor(Math.random() * 256), 
                b: Math.floor(Math.random() * 256)
            }
        };
    }

    
    randomBox(fbd) {
        // return Math.floor(Math.random() * max);

        // const colors = this.generateRandomColorMix();

        // const primaryColors = [
        //     'rgb(255, 0, 0)',
        //     'rgb(0, 255, 0)',
        //     'rgb(0, 0, 255)'
        // ]
        
        let temp = 'rgb(0, 0, 0'
         
        if (this.mixColors[Math.floor(Math.random() * this.mixColors.length)] !== 'rgb(255, 255, 255') { 
            temp = this.mixColors[Math.floor(Math.random() * this.mixColors.length)]
        }

        const box = {
            left: fbd,
            right: this.boxSize + fbd + this.boxSpacing,
            color: temp
            // initialColor: primaryColors[Math.floor(Math.random() * primaryColors.length)]
        }
        
        return box
    }


    moveBoxes() {
        this.eachBox((box) => {
            box.left -= this.boxSpeed;
            box.right -= this.boxSpeed;
            if (box.left + 50 <= 0) {
                this.boxes.shift();
                // if (this.loopCount < this.loopLimit) {
                    const reX = this.boxes.at(-1).left + 50 + boxSpacing(this.boxSpacing);
                    this.boxes.push(this.randomBox(reX));
                    // this.loopCount++;
                // }
            }
        });
        // this.drawEboxes();
    }
    
    drawEboxes() {
        this.eachBox((box) => {
           
            this.ctx.fillStyle = box.color;
            this.ctx.fillRect(box.left, 0, this.boxSize, 500)

        });
    }

    collide(playerSize, playerColor) {

      
        let collision = false;
        
        if (playerSize >= this.boxes[0].left && playerColor !== this.boxes[0].color) {
         
            collision = true;
        }

        return collision;
    }


    animate() {
        this.moveBoxes();
        
        this.drawEboxes();
        
     
    }
      


}

export default Level;
