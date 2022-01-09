describe('Class Attribute', () => {
    beforeEach(() => {
        cy.visit('classattr');
    });

    it('Header', () => {
        cy.headerEqual('Class Attribute')
    });

    it('Click Blue Button', () => {
        let alert = false;
        cy.on('window:alert', alertText => {
            alert = true;
            expect(alertText).contains('Primary button pressed');
         })
        cy.get('.btn-primary').click().then(() => {
            expect(alert).equal(true, "JS Alert to exist")
        })
    });
});