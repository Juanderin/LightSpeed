class Player {
    constructor(canvas) {
        this.main = main;
        this.canvas = canvas;
        this.color = '#F24405';
        this.ctx = this.canvas.getContext("2d");
        // this.drawBox()
      
        this.keyBind();
    }

    keyBind() {
        document.addEventListener("keydown", (e) => {
            switch(e.code) {
                case "KeyA":
                    this.changeColor("#FFFF00");
                    break;
                case "KeyS":
                    this.changeColor("#FF00FF");
                    break;
                case "KeyD":
                    this.changeColor("#00FFFF");
                    break;
            }
        });
    }

    changeColor(color) {
        this.color = color;
    }

    drawBox() {

        // this.ctx.lineWidth = 5
        // this.ctx.strokeStyle = 'grey';
        // this.ctx.strokeRect(2, 443, 50, 50);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 444.5, 50, 50)
        
     
    }

    bringToFront() {
        this.canvas.appendChild(this.canvas);
    }
}
// some code
export default Player;
