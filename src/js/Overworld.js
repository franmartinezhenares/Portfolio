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

            // Establish character camera 
            const characterCamera = this.map.gameObjects.player;

            // Update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
            })});

            // LOWER LAYER
            this.map.drawLowerMap(this.ctx, characterCamera);

            // GAME LAYER

            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, characterCamera);
            })

            // UPPER LAYER

            this.map.drawUpperMap(this.ctx, characterCamera);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {

        this.map = new OverworldMap(window.OverworldMaps.DemoMap);

        console.log(this.map.walls);

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.directionInput.direction;

        this.startGameLoop();

    }
}