const PLAYER_CONSTANTS = {

    PLAYER_SIZE: 50
};

class Player {
    constructor(canvas) {
        this.canvas = canvas;
        // this.color = 'rgb(0,0,0)';
        this.ctx = this.canvas.getContext("2d");
        // this.drawBox()
        this.playerSize = PLAYER_CONSTANTS.PLAYER_SIZE
      
        this.keyStates = {
            KeyA: {
                lastPressTime: 0,
                doubleTapDelay: 250
            },

            KeyS: {
                lastPressTime: 0,
                doubleTapDelay: 250 
            },

            KeyD: {
                lastPressTime: 0,
                doubleTapDelay: 250 
            } 
        }

        this.keyBind();

//

        this.colors = {
            r: 0,
            g: 0,
            b: 0
        }

        // this.currentPlayerColor = `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
    }

    currentPlayerColor() {
        return `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
    }

    keyBind() {
        document.addEventListener("keydown", (e) => {
            console.log(e)
            console.log(e.code)

            const keyState = this.keyStates[e.code];

            if (keyState) {
                const currentTime = Date.now();
                if (currentTime - keyState.lastPressTime < keyState.doubleTapDelay) {
                    this.handleDoubleTap(e.code);
                    keyState.lastPressTime = currentTime;
                } else {
                    switch(e.code) {
                        case "KeyA":
                            if (this.colors.r === 0 ) {
                            this.colors.r += 255
                            // this.changeColor(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            console.log('A worked')
                            console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            };
                            break;
                        case "KeyS":
                            if (this.colors.g === 0 ) {
                            this.colors.g += 255
                            // this.changeColor(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            console.log('S worked')
                            console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            }
                            break;
                        case "KeyD":
                            if (this.colors.b === 0 ) {
                            this.colors.b += 255
                            // this.changeColor(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            console.log('D worked')
                            console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                            }
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
                if (this.colors.r === 255 ) {
                this.colors.r -= 255
                console.log('A double worked')
                console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                }
                break;
            case 'KeyS':
                if (this.colors.g === 255 ) {
                this.colors.g -= 255
                console.log('S double worked')
                console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                }
                break;
            case 'KeyD':
                if (this.colors.b === 255 ) {
                this.colors.b -= 255
                console.log('D double worked')
                console.log(`rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`)
                }
                break;
        }
    } 

    changeColor(color) {
        // this.color = `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
        // this.color = color;
    }


    drawBox() {

        // this.ctx.lineWidth = 5
        // this.ctx.strokeStyle = 'grey';
        // this.ctx.strokeRect(2, 443, 50, 50);
       
        this.ctx.fillStyle = `rgb(${this.colors.r}, ${this.colors.g}, ${this.colors.b})`;
        this.ctx.fillRect(0, 0, this.playerSize, 500)
     
    }

    bringToFront() {
        this.canvas.appendChild(this.canvas);
    }
}
// some code
export default Player;
