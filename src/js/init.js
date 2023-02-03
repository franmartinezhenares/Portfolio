import utils from "./utils.js";
import Overworld from "./Overworld.js";

document.querySelectorAll(".nav_button").forEach((element) => {
    element.addEventListener("click", () => utils.showContentModal(element.id));
});
const overworld = new Overworld({
    element: document.querySelector(".game_container")
});
overworld.init();
utils.init();
