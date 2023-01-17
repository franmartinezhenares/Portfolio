(function () {
    const overworld = new Overworld({
        element: document.querySelector(".game_container")
    });
    overworld.init();
    utils.init();
})();