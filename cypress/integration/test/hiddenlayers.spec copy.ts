describe('Hidden Layers', () => {
    beforeEach(() => {
        cy.visit('hiddenlayers');
    });

    it('Header', () => {
        cy.headerEqual('Hidden Layers')
    });

    it('Click Green Button', () => {
        cy.get('#greenButton').click()
        cy.get('#blueButton').click()
    });
});