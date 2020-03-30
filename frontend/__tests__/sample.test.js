describe('sample test 101', () => {
    it('works as expected', () => {
        const age = 100;
        expect(1).toEqual(1);
        expect(age).toEqual(100);
    });

    it('Handles ranges ok', () => {
        const age = 200;
        expect(age).toBeGreaterThan(100);
    })
}) 