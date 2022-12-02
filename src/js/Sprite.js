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
            "idle-down": [ [1,0] ],
            "idle-up": [ [1,3] ],
            "idle-left": [ [1,2] ],
            "idle-right": [ [1,1] ],

            "walk-down": [ [0,0], [2,0] ],
            "walk-up": [ [0,3], [2,3] ],
            "walk-left": [ [1,2], [0,2], [1,2], [2,2] ],
            "walk-right": [ [1,1], [0,1], [1,1], [2,1] ],
        }
        this.currentAnimation = "idle-right"; //config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 34;
        this.animationFrameProgress = this.animationFrameLimit;

        //Reference the game Object

        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if(this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        //Downtick frame progress
        if(this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        // Reset counter

        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame +=1;

        if(this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }

    }

    draw(ctx) {

        const x = this.gameObject.x;
        let y = this.gameObject.y;

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX * 120,
            frameY * 120,
            120,
            120,
            x,
            y,
            120,
            120
        );

        this.updateAnimationProgress();
    }
    
}