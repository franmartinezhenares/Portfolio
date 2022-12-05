class OverworldEvent {
    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    stand(resolve) {

    }

    walk(resolve) {

    }

    changeMap(resolve) {
        this.map.overworld.startMap(window.OverworldMaps[this.event.map])
        resolve();
    }


    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}