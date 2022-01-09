describe('Dynamic ID', () => {
    beforeEach(() => {
        cy.visit('dynamicid');
    });

    it('Header', () => {
        cy.get('h3').should('have.text', 'Dynamic ID')
    });

    it('Click Button', () => {
        cy.contains('Button with Dynamic ID').click()
    });
});

