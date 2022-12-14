
const utils = {

    showModal(modal) {
        if(modal != undefined) {
            if(modal === "about") {
                const modal_container = document.getElementById("modal_container_about");
                modal_container.classList.add("show");
                const close = document.getElementById("about_close");
                close.addEventListener('click', () => {
                    modal_container.classList.remove("show");
                })
            } else if ( modal === "cv") {
                const modal_container = document.getElementById("modal_container_cv");
                modal_container.classList.add("show");
                const close = document.getElementById("cv_close");
                close.addEventListener('click', () => {
                    modal_container.classList.remove("show");
                })
            } else if ( modal === "projects") {
                const modal_container = document.getElementById("modal_container_projects");
                modal_container.classList.add("show");
                const close = document.getElementById("projects_close");
                close.addEventListener('click', () => {
                    modal_container.classList.remove("show");
                })
            } else if ( modal === "contact") {
                const modal_container = document.getElementById("modal_container_contact");
                modal_container.classList.add("show");
                const close = document.getElementById("contact_close");
                close.addEventListener('click', () => {
                    modal_container.classList.remove("show");
                    OverworldMaps.DemoMap.gameObjects.player.blockedMovement = false;
                    OverworldMaps.DemoMap.gameObjects.player.movingProgressRemaining = 0;
                })
                OverworldMaps.DemoMap.gameObjects.player.blockedMovement = true;
            }

        }

    },

    closeInstructions(action) {
        if(action === "close_directions") {
            const message = document.getElementById("message_direction");
            message.classList.remove("show_textbox");
        } else if (action === "close_contact") {
            const message = document.getElementById("message_contact");
            message.classList.remove("show_textbox");
        } else if (action === "close_about") {
            const message = document.getElementById("modal_container_about");
            message.classList.remove("show");
        } else if (action === "close_cv") {
            const message = document.getElementById("modal_container_cv");
            message.classList.remove("show");
        } else if (action === "close_projects") {
            const message = document.getElementById("modal_container_projects");
            message.classList.remove("show");
        }

    },

    openInstructions(action) {
        if(action === "contact") {
            const message = document.getElementById("message_contact");
            message.classList.add("show_textbox");
            message.addEventListener('click', () => {
                this.showModal("contact");
            })
            
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