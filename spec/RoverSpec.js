describe("Rover", () => {
    var rover;
    var planet;
    beforeEach(() =>{
        planet = new Planet(10, 10);
        rover = new Rover(1, 1, 'W', planet);
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

    it('is on a planet', () => {
        expect(rover.planet instanceof Planet).toEqual(true);
    });

    it('can move beyond the planet lower edge', () => {
        rover.move(['l', 'f', 'f']);

        expect(rover.position).toEqual({
            x: 1,
            y: 9,
            orientation: 'S'
        });
    });

    it('can move beyond the planet upper edge', () => {
        rover = new Rover(1, 9, 'N', planet);
        rover.move(['f']);

        expect(rover.position).toEqual({
            x: 1,
            y: 0,
            orientation: 'N'
        });
    });

    it('can move backward beyond the planet upper edge', () => {
        rover.move(['r', 'b', 'b']);

        expect(rover.position).toEqual({
            x: 1,
            y: 9,
            orientation: 'N'
        });
    });

    it('can move forward beyond the planet west edge', () => {
        planet = new Planet(5, 10);
        rover = new Rover(1, 1, 'W', planet);
        rover.move(['f', 'f']);

        expect(rover.position).toEqual({
            x: 4,
            y: 1,
            orientation: 'W'
        });
    });

    it('can move forward beyond the planet east edge', () => {
        planet = new Planet(5, 10);
        rover = new Rover(4, 1, 'E', planet);
        rover.move(['f', 'f']);

        expect(rover.position).toEqual({
            x: 1,
            y: 1,
            orientation: 'E'
        });
    });
});
