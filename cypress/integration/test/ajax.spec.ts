describe('AJAX Data', () => {
    beforeEach(() => {
        cy.visit('ajax');
    });

    it('Header', () => {
        cy.headerEqual('AJAX Data')
    });

    it('Click Button', () => {
        cy.get('section button').click()
        cy.get('#spinner').should('exist')
        cy.get('.bg-success', { timeout: 30000 }).should('have.text', 'Data loaded with AJAX get request.')
    });
});