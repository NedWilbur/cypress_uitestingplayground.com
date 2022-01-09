describe('Mouse Over', () => {
    beforeEach(() => {
        cy.visit('mouseover');
    });

    it('Header', () => {
        cy.headerEqual('Mouse Over')
    });

    it('Default value is 0 clicks', () => {
        cy.get('#clickCount').should('have.text', '0')
    });

    it('Click me increases click count', () => {
        cy.contains('Click me').click()
        cy.get('#clickCount').should('have.text', '1')
        cy.contains('Click me').click()
        cy.get('#clickCount').should('have.text', '2')
    });
});