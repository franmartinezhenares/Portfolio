class Sprite {
    constructor(config) {

        // Setup image
        
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }


        // Configure Animations & Initial State
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //Reference the game Object

        this.gameObject = config.gameObject;
    }

    draw(ctx) {

        const x = this.gameObject.x;
        let y = this.gameObject.y;

        this.isLoaded && ctx.drawImage(this.image,
            0,
            0,
            48,
            72,
            x,
            y,
            32,
            48
            );
    }
    
}