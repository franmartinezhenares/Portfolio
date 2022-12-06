
const close = document.getElementById("about_close");
const modal_container = document.getElementById("modal_container_about");


// close.addEventListener('click', () => {
//     modal_container.classList.remove("show");
// })

const utils = {

    showModal(modal) {
        console.log(modal);
        if(modal != undefined) {
            if(modal === "about") {
                console.log("dentro de about")
                const modal_container = document.getElementById("modal_container_about");
                modal_container.classList.add("show");
                const close = document.getElementById("about_close");
                close.addEventListener('click', () => {
                    modal_container.classList.remove("show");
                })
            } else if ( modal === "cv") {
                console.log("dentro de CV")
                const modal_container = document.getElementById("modal_container_cv");
                modal_container.classList.add("show");
                const close = document.getElementById("cv_close");
                close.addEventListener('click', () => {
                    modal_container.classList.remove("show");
                })
            }
            // modal_container.classList.add("show");
        }

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