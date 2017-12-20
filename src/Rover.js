class Rover {
    constructor (x, y, orientation, planet) {
        this.position = {
            x: x,
            y: y,
            orientation: orientation
        };
        this.planet = planet;
    }

    move (commands) {
        commands.forEach((command) => {
            var commandRules = {
                f: this.forward,
                b: this.backward,
                l: this.left,
                r: this.right
            };

            commandRules[command].call(this);
        });

        return 'ok';
    }

    wrapEdges (destinationPosition){
        let wrapMap = {
            N: 'h',
            S: 'h',
            W: 'w',
            E: 'w'
        };

        let coord = wrapMap[this.position.orientation];

        if (destinationPosition < 0)
            destinationPosition += this.planet.grid[coord];

        if (destinationPosition > this.planet.grid[coord] - 1)
            destinationPosition = 0;

        return destinationPosition;
    }

    changeToApply (changesMap){
        let currentOrientation = this.position.orientation;
        let change = changesMap[currentOrientation];

        let destinationPosition = this.position[change.coord] + change.delta;
        destinationPosition = this.wrapEdges(destinationPosition);

        if (change.delta)
            change.destinationPosition = destinationPosition;

        return change;
    }

    left () {
        let orientationChanges = {
            N: 'W',
            S: 'E',
            E: 'N',
            W: 'S'
        };
        this.position.orientation = this.changeToApply(orientationChanges);

    }

    right () {
        let orientationChanges = {
            N: 'E',
            S: 'W',
            E: 'S',
            W: 'N'
        };
        this.position.orientation = this.changeToApply(orientationChanges);

    }

    forward () {
        let positionChanges = {
            N: {
                coord: 'y',
                delta: 1
            },
            S: {
                coord: 'y',
                delta: -1
            },
            E: {
                coord: 'x',
                delta: 1
            },
            W: {
                coord: 'x',
                delta: -1
            }
        };

        let change = this.changeToApply(positionChanges);
        this.position[change.coord] = change.destinationPosition;
    }


    backward () {

        let positionChanges = {
            N: {
                coord: 'y',
                delta: -1
            },
            S: {
                coord: 'y',
                delta: 1
            },
            E: {
                coord: 'x',
                delta: -1
            },
            W: {
                coord: 'x',
                delta: 1
            }
        };
        let change = this.changeToApply(positionChanges);
        this.position[change.coord] = change.destinationPosition;
    }

}
