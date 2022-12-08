class OverworldMap {
    constructor(config) {


        this.overworld = null;

        this.gameObjects = config.gameObjects;

        this.walls = config.walls || {};
        this.doors = config.doors || {};

        this.actions = config.actions || {};

        // this.doors.events = config.doors.events;

        this.lowerMap = new Image();
        this.lowerMap.src = config.lowerSrc;

        this.upperMap = new Image();
        this.upperMap.src = config.upperSrc;

        // this.isCutscenePlaying = true;
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

    checkForDoor(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.doors[`${x}, ${y}`];
    }

    checkForAction(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.actions[`${x}, ${y}`];
    }
}

const background_lower_map = document.getElementById("background_bottom")
const background_upper = document.getElementById("background_top")


window.OverworldMaps = {
    DemoMap: {
        lowerSrc: background_lower_map.src,
        upperSrc: background_upper.src,
        gameObjects: {
            player: new Character({
                isPlayerControlled: true,
                x: utils.withGrid(11),
                y: utils.withGrid(10),
            })
        },
        walls: {
            [utils.asGridCoord(8,2)] : true,
            [utils.asGridCoord(9,2)] : true,
            [utils.asGridCoord(10,2)] : true,
            [utils.asGridCoord(8,3)] : true,
            [utils.asGridCoord(9,3)] : true,
            [utils.asGridCoord(10,3)] : true,
            [utils.asGridCoord(8,4)] : true,
            [utils.asGridCoord(10,4)] : true,

            [utils.asGridCoord(1,4)] : true,
            [utils.asGridCoord(1,5)] : true,
            [utils.asGridCoord(1,6)] : true,
            [utils.asGridCoord(1,7)] : true,
            [utils.asGridCoord(1,8)] : true,
            [utils.asGridCoord(2,4)] : true,
            [utils.asGridCoord(2,5)] : true,
            [utils.asGridCoord(2,6)] : true,
            [utils.asGridCoord(2,7)] : true,
            [utils.asGridCoord(2,8)] : true,
            [utils.asGridCoord(2,9)] : true,
            [utils.asGridCoord(3,4)] : true,
            [utils.asGridCoord(3,5)] : true,
            [utils.asGridCoord(3,6)] : true,
            [utils.asGridCoord(3,7)] : true,
            [utils.asGridCoord(3,8)] : true,
            [utils.asGridCoord(4,4)] : true,
            [utils.asGridCoord(4,5)] : true,
            [utils.asGridCoord(4,6)] : true,
            [utils.asGridCoord(4,7)] : true,
            [utils.asGridCoord(4,8)] : true,
            [utils.asGridCoord(4,9)] : true,
            [utils.asGridCoord(5,4)] : true,
            [utils.asGridCoord(5,5)] : true,
            [utils.asGridCoord(5,6)] : true,
            [utils.asGridCoord(5,7)] : true,
            [utils.asGridCoord(5,8)] : true,

            [utils.asGridCoord(15,7)] : true,
            [utils.asGridCoord(15,8)] : true,
            [utils.asGridCoord(15,9)] : true,
            [utils.asGridCoord(16,6)] : true,
            [utils.asGridCoord(16,7)] : true,
            [utils.asGridCoord(16,8)] : true,
            [utils.asGridCoord(16,9)] : true,
            [utils.asGridCoord(17,6)] : true,
            [utils.asGridCoord(17,7)] : true,
            [utils.asGridCoord(17,8)] : true,
            [utils.asGridCoord(18,6)] : true,
            [utils.asGridCoord(18,7)] : true,
            [utils.asGridCoord(18,8)] : true,
            [utils.asGridCoord(18,9)] : true,
            
            // MailBox
            [utils.asGridCoord(11,5)] : true,

            // Outher Trees

            [utils.asGridCoord(0,0)] : true,
            [utils.asGridCoord(1,0)] : true,
            [utils.asGridCoord(2,0)] : true,
            [utils.asGridCoord(3,0)] : true,
            [utils.asGridCoord(4,0)] : true,
            [utils.asGridCoord(5,0)] : true,
            [utils.asGridCoord(6,0)] : true,
            [utils.asGridCoord(7,0)] : true,
            [utils.asGridCoord(8,0)] : true,
            [utils.asGridCoord(9,0)] : true,
            [utils.asGridCoord(10,0)] : true,
            [utils.asGridCoord(11,0)] : true,
            [utils.asGridCoord(12,0)] : true,
            [utils.asGridCoord(13,0)] : true,
            [utils.asGridCoord(14,0)] : true,
            [utils.asGridCoord(15,0)] : true,
            [utils.asGridCoord(16,0)] : true,
            [utils.asGridCoord(17,0)] : true,
            [utils.asGridCoord(18,0)] : true,
            [utils.asGridCoord(19,0)] : true,

            [utils.asGridCoord(0,1)] : true,
            [utils.asGridCoord(0,2)] : true,
            [utils.asGridCoord(0,3)] : true,
            [utils.asGridCoord(0,4)] : true,
            [utils.asGridCoord(0,5)] : true,
            [utils.asGridCoord(0,6)] : true,
            [utils.asGridCoord(0,7)] : true,
            [utils.asGridCoord(0,8)] : true,
            [utils.asGridCoord(0,9)] : true,
            [utils.asGridCoord(0,10)] : true,
            [utils.asGridCoord(0,11)] : true,
            [utils.asGridCoord(0,12)] : true,
            [utils.asGridCoord(0,13)] : true,
            [utils.asGridCoord(0,14)] : true,

            [utils.asGridCoord(1,14)] : true,
            [utils.asGridCoord(2,14)] : true,
            [utils.asGridCoord(3,14)] : true,
            [utils.asGridCoord(4,14)] : true,
            [utils.asGridCoord(5,14)] : true,
            [utils.asGridCoord(6,14)] : true,
            [utils.asGridCoord(7,14)] : true,
            [utils.asGridCoord(8,14)] : true,
            [utils.asGridCoord(9,14)] : true,
            [utils.asGridCoord(10,14)] : true,
            [utils.asGridCoord(11,14)] : true,
            [utils.asGridCoord(12,14)] : true,
            [utils.asGridCoord(13,14)] : true,
            [utils.asGridCoord(14,14)] : true,
            [utils.asGridCoord(15,14)] : true,
            [utils.asGridCoord(16,14)] : true,
            [utils.asGridCoord(17,14)] : true,
            [utils.asGridCoord(18,14)] : true,
            [utils.asGridCoord(19,14)] : true,

            [utils.asGridCoord(19,1)] : true,
            [utils.asGridCoord(19,2)] : true,
            [utils.asGridCoord(19,3)] : true,
            [utils.asGridCoord(19,4)] : true,
            [utils.asGridCoord(19,5)] : true,
            [utils.asGridCoord(19,6)] : true,
            [utils.asGridCoord(19,7)] : true,
            [utils.asGridCoord(19,8)] : true,
            [utils.asGridCoord(19,9)] : true,
            [utils.asGridCoord(19,10)] : true,
            [utils.asGridCoord(19,11)] : true,
            [utils.asGridCoord(19,12)] : true,
            [utils.asGridCoord(19,13)] : true,
            [utils.asGridCoord(19,14)] : true,

            [utils.asGridCoord(1,1)] : true,
            [utils.asGridCoord(2,1)] : true,
            [utils.asGridCoord(3,1)] : true,
            [utils.asGridCoord(5,2)] : true,
            [utils.asGridCoord(12,5)] : true,
            [utils.asGridCoord(13,3)] : true,
            [utils.asGridCoord(15,4)] : true,
            [utils.asGridCoord(16,1)] : true,
            [utils.asGridCoord(17,2)] : true,
            [utils.asGridCoord(18,2)] : true,

            [utils.asGridCoord(1,13)] : true,
            [utils.asGridCoord(2,11)] : true,
            [utils.asGridCoord(3,13)] : true,
            [utils.asGridCoord(6,10)] : true,
            [utils.asGridCoord(10,9)] : true,
            [utils.asGridCoord(15,12)] : true,
            [utils.asGridCoord(17,13)] : true,
            [utils.asGridCoord(18,13)] : true,

        },
        doors: {

            [utils.asGridCoord(9,4)] : "about",

            [utils.asGridCoord(3,9)] : "cv",

            [utils.asGridCoord(17,9)] : "projects",
        },
        actions: {
            [utils.asGridCoord(12,10)] : "close_directions",
            [utils.asGridCoord(10,10)] : "close_directions",
            [utils.asGridCoord(11,9)] : "close_directions",
            [utils.asGridCoord(11,12)] : "close_directions",

            [utils.asGridCoord(11,6)] : "contact",
            [utils.asGridCoord(10,6)] : "close_contact",
            [utils.asGridCoord(12,6)] : "close_contact",
            [utils.asGridCoord(11,7)] : "close_contact",

            [utils.asGridCoord(9,5)] : "close_about",
            [utils.asGridCoord(3,10)] : "close_cv",
            [utils.asGridCoord(17,10)] : "close_projects",
        }
    },
}