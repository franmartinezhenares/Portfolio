const player_image = document.getElementById("player_img"); 

class GameObject {

    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || player_image.src,
        });
        this.movingProgressRemaining = 0;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        }
    }

    update(state) {
        this.updatePosition();

        if(this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 1;
        }
    };

    updatePosition() {
        if(this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -=1;
        }
    }
}