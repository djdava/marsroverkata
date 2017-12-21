class Planet {
    constructor (w, h){
        this.grid = {
            h: h, // y axes
            w: w  // x axes
        };
        this.createObstacle(-1,-1);
    }

    createObstacle (x = -1, y = -1) {
        this.obstacles = {
            0: {
                x: x,
                y: y
            }
        };
    }
}
