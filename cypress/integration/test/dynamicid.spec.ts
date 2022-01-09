describe('Dynamic ID', () => {
    beforeEach(() => {
        cy.visit('dynamicid');
    });

    it('Header', () => {
        cy.headerEqual('Dynamic ID')
    });

    it('Click Button', () => {
        cy.contains('Button with Dynamic ID').click()
    });
});

