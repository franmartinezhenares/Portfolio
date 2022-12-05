const modal_container = document.getElementById("modal_container_about");
const close = document.getElementById("about_close");


close.addEventListener('click', () => {
    modal_container.classList.remove("show");
})

const utils = {

    showModal() {
        modal_container.classList.add("show");
    },


    withGrid(n) {
        return n*120;
    },
    asGridCoord(x, y) {
        return `${x*120}, ${y*120}`;
    },
    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        const size = 120;
        if(direction === "left") {
            x -= size;
        } else if (direction === "right") {
            x += size;
        } else if (direction === "down") {
            y += size;
        } else if (direction === "up") {
            y -= size;
        }

        return {x,y};
    } 
}