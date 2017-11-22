describe("Rover", () => {
    var rover;
    ()
    beforeEach(() =>{
        rover = new Rover(1, 1, 'W');
    });

    it('stays in the initial position', () =>{
        expect(rover.position).toEqual({
            x: 1,
            y: 1,
            orientation: 'W'
        });
    });

    it('can accept different initial positions', () =>{
        rover = new Rover(1, 2, 'W');

        expect(rover.position).toEqual({
            x: 1,
            y: 2,
            orientation: 'W'
        });
    });

    it('accepts an array of commands', () =>{
        var result = rover.move(['f', 'l']);

        expect(result).toEqual('ok');
    });

    it('can move forward', () =>{
        rover.move(['f']);

        expect(rover.position).toEqual({
            x: 0,
            y: 1,
            orientation: 'W'
        });
    });

    it('can move backward', () =>{
        rover.move(['b']);

        expect(rover.position).toEqual({
            x: 2,
            y: 1,
            orientation: 'W'
        });
    });

    it('can rotate left', () =>{
        rover.move(['l']);

        expect(rover.position).toEqual({
            x: 1,
            y: 1,
            orientation: 'S'
        });
    });

    it('can rotate right', () =>{
        rover.move(['r']);

        expect(rover.position).toEqual({
            x: 1,
            y: 1,
            orientation: 'N'
        });
    });

    it('obeys an multiple commands', () =>{
        rover.move(['f', 'l']);

        expect(rover.position).toEqual({
            x: 0,
            y: 1,
            orientation: 'S'
        });
    });

    it('advances forward according to orientation', () =>{
        rover.move(['l', 'f']);

        expect(rover.position).toEqual({
            x: 1,
            y: 0,
            orientation: 'S'
        });
    });

    it('advances backward according to orientation', () =>{
        rover.move(['r', 'b']);

        expect(rover.position).toEqual({
            x: 1,
            y: 0,
            orientation: 'N'
        });
    });

    it('can rotate twice to left', () => {
        rover.move(['l', 'l']);

        expect(rover.position).toEqual({
            x: 1,
            y: 1,
            orientation: 'E'
        });
    });

    it('can rotate twice to right', () => {
        rover.move(['r','r']);

        expect(rover.position).toEqual({
            x: 1,
            y: 1,
            orientation: 'E'
        });
    });
});
