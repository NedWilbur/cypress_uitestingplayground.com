describe('Scrollbars', () => {
    beforeEach(() => {
        cy.visit('scrollbars');
    });

    it('Header', () => {
        cy.headerEqual('Scrollbars')
    });

    it('Click Button', () => {
        cy.get('section button').click()
    });
});