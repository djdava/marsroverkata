describe("Planet", () => {
    var planet;
    var rover;
    beforeEach(() => {
        planet = new Planet(10, 10);
        rover = new Rover(1, 1, 'W');
    });

    it('has a defined grid', () => {
        expect(planet.grid).toEqual({
            h: 10,
            w: 10
        });
    });

    it('can accept different initial measures', () => {
        planet = new Planet(20, 20);

        expect(planet.grid).toEqual({
            h: 20,
            w: 20
        });
    });

    it('has a initial rover position', () => {
        expect(planet.roverPosition).toEqual({
            x:1,
            y:1
        });
    });

});
