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

    changeToApply (changesMap){
        let currentOrientation = this.position.orientation;
        let changeToApply = changesMap[currentOrientation];
        return changeToApply;
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
        this.position[change.coord] += change.delta;
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
        this.position[change.coord] += change.delta;
    }

}
