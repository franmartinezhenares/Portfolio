

class Character extends GameObject {
    constructor(config) {
        
        this.movingProgressRemaining = 32;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["y", -1],
            "right": ["y", 1],
        }
    };

    update(state) {
        this.updatePosition();
    };

    updatePosition() {
        if(this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -=1;
        }
    }
}