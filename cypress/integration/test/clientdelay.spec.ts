describe('Client Side Delay', () => {
    beforeEach(() => {
        cy.visit('clientdelay');
    });

    it('Header', () => {
        cy.headerEqual('Client Side Delay')
    });

    it('Click Button', () => {
        cy.get('section button').click()
        cy.get('#spinner').should('exist')
        cy.get('.bg-success', { timeout: 30000 }).should('have.text', 'Data calculated on the client side.')
    });
});