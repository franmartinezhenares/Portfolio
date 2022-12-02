class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerMap = new Image();
        this.lowerMap.src = config.lowerSrc;

        this.upperMap = new Image();
        this.upperMap.src = config.upperSrc;
    }

    drawLowerMap(ctx) {
        ctx.drawImage(this.lowerMap, 0, 0)
    }

    drawUpperMap(ctx) {
        ctx.drawImage(this.upperMap, 0, 0)
    }
}

const background_lower_map = document.getElementById("background_img")
const background_upper = document.getElementById("spritesheet_img")

window.OverworldMaps = {
    DemoMap: {
        lowerSrc: background_lower_map.src,
        upperSrc: background_upper.src,
        gameObjects: {
            player: new Character({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(1),
            })
        }
    },

    Demo2: {
        lowerSrc: "/assets/images/game_background_test.jpg",
        upperSrc: "/assets/images/player_spritesheet.png",
        gameObjects: {
            player: new GameObject({
                x:4,
                y:4,
            })
        }
    }

}