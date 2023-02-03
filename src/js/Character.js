import GameObject from "./GameObject";

export default class Character extends GameObject {
    constructor(config) {
        super(config);
        
        this.movingProgressRemaining = 0;

        this.blockedMovement = false;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y", -3],
            "down": ["y", 3],
            "left": ["x", -3],
            "right": ["x", 3],
        }
    };

    update(state) {
        if(this.movingProgressRemaining > 0 && !this.blockedMovement) {
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

            let door = state.map.checkForDoor(this.x, this.y, this.direction);
            if(door != undefined) {
                setTimeout(() => {
                    utils.showContentModal(door);
                }, 500);
            }

            let action = state.map.checkForAction(this.x, this.y, this.direction);
            if(action != undefined) {
                if(action === "close_directions") {
                    utils.closeInstructions(action);
                } else if (action === "contact") {
                    utils.openInstructions(action);
                } else if (action === "close_contact") {
                    utils.closeInstructions(action);
                } else if (action === "close_about") {
                    utils.closeInstructions(action);
                } else if (action === "close_cv") {
                    utils.closeInstructions(action);
                } else if (action === "close_projects") {
                    utils.closeInstructions(action);
                }
            }

            this.movingProgressRemaining = 40;
        }
    }

    updatePosition() {
        const [property, change] = this.directionUpdate[this.direction];
        this[property] += change;
        this.movingProgressRemaining -=1;
    }

    updateSprite() {

        if(this.movingProgressRemaining > 0 && !this.blockedMovement) {
            this.sprite.setAnimation("walk-" + this.direction);
            return;
        }
        if(!this.blockedMovement) {
            this.sprite.setAnimation("idle-" + this.direction);
        }

    }
}