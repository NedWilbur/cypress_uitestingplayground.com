describe("Sign-in Page", () => {
    beforeEach(() => {
        cy.visit('/signin');
    });

    it('Form validation', () => {
        cy.get('#username-helper-text').should("be.visible");
    });
}) 

