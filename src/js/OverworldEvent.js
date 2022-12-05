class OverworldEvent {
    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    stand(resolve) {

    }

    walk(resolve) {

    }


    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}