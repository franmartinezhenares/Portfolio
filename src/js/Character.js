
class Character extends GameObject {
    constructor(config) {
        super(config);
        
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y", -2],
            "down": ["y", 2],
            "left": ["x", -2],
            "right": ["x", 2],
        }
    };

    update(state) {
        if(this.movingProgressRemaining > 0) {
            this.updatePosition();
        } else {
            // Keyboard controled character with arrow pressed
            if(this.isPlayerControlled && state.arrow) {
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                })
            }
            this.updateSprite(state);
        }
    };

    startBehavior(state, behavior) {
        // Set character behavior 
        this.direction = behavior.direction;
        if(behavior.type === "walk") {
            // Stop if space is taken
            if(state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                return;
            }
            // Ready to move
            this.movingProgressRemaining = 60;
        }
    }

    updatePosition() {
        const [property, change] = this.directionUpdate[this.direction];
        this[property] += change;
        this.movingProgressRemaining -=1;
    }

    updateSprite() {

        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-" + this.direction);
            return;
        }
        this.sprite.setAnimation("idle-" + this.direction);
    }
}