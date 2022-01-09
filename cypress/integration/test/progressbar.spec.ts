describe('Progress Bar', () => {
    beforeEach(() => {
        cy.visit('progressbar');
    });

    it('Header', () => {
        cy.headerEqual('Progress Bar')
    });

    it('Start and stop progress bar', () => {
        cy.get('#startButton').click()
            .get('#progressBar', { timeout: 30000 }).should('have.text', '75%')
            .get('#stopButton').click()
            .get('#result').should('contain.text', 'Result: 0,')
    });
});