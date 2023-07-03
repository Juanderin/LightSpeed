class Player {
    constructor(canvas) {
        this.main = main;
        this.canvas = canvas;
        this.color = 'black';
        this.ctx = this.canvas.getContext("2d");
        // this.drawBox()
      
        this.keyStates = {
            KeyA: {
                lastPressTime: 0,
                doubleTapDelay: 500
            },

            KeyS: {
                lastPressTime: 0,
                doubleTapDelay: 500 
            },

            KeyD: {
                lastPressTime: 0,
                doubleTapDelay: 500 
            } 
        }

        this.keyBind();



        this.colors = {
            r: 0,
            g: 0,
            b: 0
        }
    }

    keyBind() {
        document.addEventListener("keydown", (e) => {
            console.log(e)

            const keyState = this.keyStates[e.code];

            if (keyState) {
                const currentTime = Date.now();
                if (currentTime - keyState.lastPressTime < keyState.doubleTapDelay) {
                    this.handleDoubleTap(e.code);
                    keyState.lastPressTime = currentTime;
                } else {
                    switch(e.code) {
                        case "KeyA":
                            this.colors.r += 255
                            // this.changeColor(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            break;
                        case "KeyS":
                            this.colors.g += 255
                            // this.changeColor(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            break;
                        case "KeyD":
                            this.colors.b += 255
                            // this.changeColor(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            break;

                        }
                        keyState.lastPressTime = currentTime;
                    }
            }



        });
    }

    handleDoubleTap(key) {
        switch(key) {
            case 'KeyA':
                this.colors.r -= 255
                break;
            case 'KeyS':
                this.colors.g -= 255
                break;
            case 'KeyD':
                this.colors.b -= 255
                break;
        }
    } 

    changeColor(color) {
        // this.color = `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
        // this.color = color;
    }

    // converColor(color) {

    // }

    drawBox() {

        // this.ctx.lineWidth = 5
        // this.ctx.strokeStyle = 'grey';
        // this.ctx.strokeRect(2, 443, 50, 50);
        this.ctx.fillStyle = `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
        this.ctx.fillRect(0, 444.5, 50, 50)
        
     
    }

    bringToFront() {
        this.canvas.appendChild(this.canvas);
    }
}
// some code
export default Player;
