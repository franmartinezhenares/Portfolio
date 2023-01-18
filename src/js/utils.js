
const utils = {

    // showModal(modal) {
    //     if(modal != undefined) {
    //         if(modal === "about") {
    //             const modal_container = document.getElementById("modal_container_about");
    //             modal_container.classList.add("show");
    //             const close = document.getElementById("about_close");
    //             close.addEventListener('click', () => {
    //                 modal_container.classList.remove("show");
    //             })
    //         } else if ( modal === "cv") {
    //             const modal_container = document.getElementById("modal_container_cv");
    //             modal_container.classList.add("show");
    //             const close = document.getElementById("cv_close");
    //             close.addEventListener('click', () => {
    //                 modal_container.classList.remove("show");
    //             })
    //         } else if ( modal === "projects") {
    //             const modal_container = document.getElementById("modal_container_projects");
    //             modal_container.classList.add("show");
    //             const close = document.getElementById("projects_close");
    //             close.addEventListener('click', () => {
    //                 modal_container.classList.remove("show");
    //                 console.log('he cerrado projects');
    //             })
    //         } else if ( modal === "contact") {
    //             const modal_container = document.getElementById("modal_container_contact");
    //             modal_container.classList.add("show");
    //             const close = document.getElementById("contact_close");
    //             close.addEventListener('click', () => {
    //                 modal_container.classList.remove("show");
    //                 OverworldMaps.DemoMap.gameObjects.player.blockedMovement = false;
    //                 OverworldMaps.DemoMap.gameObjects.player.movingProgressRemaining = 0;
    //             })
    //             OverworldMaps.DemoMap.gameObjects.player.blockedMovement = true;
    //         }

    //     }

    // },

    showContentModal(file) {
        let contentDiv = document.getElementById("js_content");
        fetch(file +".html").then(result => result.text()).then(text => contentDiv.innerHTML = text);
        let modal_container = document.getElementById("modal_container");
        modal_container.classList.add("show");
        return false;
    },

    closeInstructions(action) {
        if(action === "close_directions") {
            const message = document.getElementById("message_direction");
            message.classList.remove("show_textbox");
            message.tabIndex=-1;
        } 

        else if (action === "close_contact") {
            const message = document.getElementById("message_contact");
            message.classList.remove("show_textbox");
        }

        document.getElementById("modal_container").classList.remove("show");
        document.getElementById("js_content").innerHTML = null;


        // } else if (action === "close_about") {
        //     const message = document.getElementById("modal_close");
        //     message.classList.remove("show");


        // } else if (action === "close_cv") {
        //     const message = document.getElementById("modal_container_cv");
        //     message.classList.remove("show");
        // } else if (action === "close_projects") {
        //     const message = document.getElementById("modal_container_projects");
        //     message.classList.remove("show");
        // }

    },

    //! TABINDEX, FOCUS

    openInstructions(action) {
        if(action === "contact") {
            let message = document.getElementById("message_contact");
            message.classList.add("show_textbox");
            message.tabIndex=0;
            message.focus();
            message.addEventListener('click', () => {
                this.showContentModal("contact");
            })
            message.addEventListener('keyup', (e) => {
                if(e.key === "Enter") {
                    this.showContentModal("contact");
                }
                
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
    },
    //Función que sirve para bindear eventos y demás instrucciones tras la primera carga de la página.
    init() {
            document.getElementById("modal_close").addEventListener('click', () => {
            document.getElementById("modal_container").classList.remove("show");
            document.getElementById("js_content").innerHTML = null;
        });
    } 
}