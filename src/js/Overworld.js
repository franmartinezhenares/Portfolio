class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

            // LOWER LAYER
            this.map.drawLowerMap(this.ctx);

            // GAME LAYER

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                });
                object.sprite.draw(this.ctx);
            })

            // UPPER LAYER

            this.map.drawUpperMap(this.ctx);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {

        this.map = new OverworldMap(window.OverworldMaps.DemoMap);

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        // this.directionInput.direction;

        this.startGameLoop();

    }
}