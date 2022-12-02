class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.walls = config.walls || {};

        this.lowerMap = new Image();
        this.lowerMap.src = config.lowerSrc;

        this.upperMap = new Image();
        this.upperMap.src = config.upperSrc;


    }

    drawLowerMap(ctx, characterCamera) {
        ctx.drawImage(this.lowerMap,
            utils.withGrid(4.5) - characterCamera.x,
            utils.withGrid(2.5) - characterCamera.y)
    }

    drawUpperMap(ctx, characterCamera) {
        ctx.drawImage(this.upperMap,
            utils.withGrid(4.5) - characterCamera.x,
            utils.withGrid(2.5) - characterCamera.y)
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x}, ${y}`];
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
                y: utils.withGrid(3),
            })
        },
        walls: {
            [utils.asGridCoord(1,1)] : true,
            [utils.asGridCoord(1,2)] : true,
            [utils.asGridCoord(1,3)] : true,
            [utils.asGridCoord(1,4)] : true,
            [utils.asGridCoord(2,1)] : true,
            [utils.asGridCoord(2,2)] : true,
            [utils.asGridCoord(2,3)] : true,
            [utils.asGridCoord(2,4)] : true,
            [utils.asGridCoord(3,1)] : true,
            [utils.asGridCoord(3,2)] : true,
            [utils.asGridCoord(3,3)] : true,
            [utils.asGridCoord(3,4)] : true,
            [utils.asGridCoord(4,1)] : true,
            [utils.asGridCoord(4,2)] : true,
            [utils.asGridCoord(4,3)] : true,
            [utils.asGridCoord(4,4)] : true,
        }
    },
}