describe('Verify Text', () => {
    beforeEach(() => {
        cy.visit('verifytext');
    });

    it('Header', () => {
        cy.headerEqual('Verify Text')
    });

    it('Verify text', () => {
        cy.get('.bg-primary').invoke('text').then(text => {
            expect(text.trim()).to.be.equal('Welcome UserName!')
        })
    });
});