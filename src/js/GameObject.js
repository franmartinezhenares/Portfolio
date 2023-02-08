import Sprite from "./Sprite.js";

export default class GameObject {

    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: document.getElementById("character").src,
        });
        this.movingProgressRemaining = 0;
    }

    update() {
    };

}