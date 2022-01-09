// Worked out of the box w/o having to adjust default timeouts

describe('Load Delay', () => {
    beforeEach(() => {
        cy.visit('loaddelay');
    });

    it('Header', () => {
        cy.headerEqual('Load Delays')
    });

    it('Click Button', () => {
        cy.get('section button').click()
    });
});