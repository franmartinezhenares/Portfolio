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
    }

    update() {
    };

}