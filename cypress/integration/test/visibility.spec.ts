describe('Visibility', () => {
    beforeEach(() => {
        cy.visit('visibility');
    });

    it('Header', () => {
        cy.headerEqual('Visibility')
    });

    it('All buttons are shown by default', () => {
        cy.get('button').as('allButtons')
        cy.get('@allButtons').should('be.visible')
    });

    it('Buttons are hidden when clicking Hide', () => {
        cy.get('table button')
            .not('.btn-primary')
            .not('#overlappedButton') // not truly removed
            .not('#transparentButton') // not truly removed
            .not('#offscreenButton') // not truly removed
            .as('allButtons') 
        cy.get('#hideButton').click()
        cy.get('@allButtons').should('not.be.visible')

        cy.get('#transparentButton').should('have.css', 'opacity', '0')
        // Does not check offscreenButton or overlappedButton - edge cases
    });
});