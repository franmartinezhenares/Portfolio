export default utils = {

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

    },

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

    init() {
            document.getElementById("modal_close").addEventListener('click', () => {
            document.getElementById("modal_container").classList.remove("show");
            document.getElementById("js_content").innerHTML = null;
        });
    } 
}