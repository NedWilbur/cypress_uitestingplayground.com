describe("Sign-in Page", () => {
    beforeEach(() => {
        cy.visit('signin');
    });

    it('Form Validation', () => {
        cy.get('[data-test="signin-submit"]').click()
        cy.get('#username-helper-text').should('be.visible')
        cy.get('[data-test="signin-submit"]').should('be.disabled')
        cy.get('#username').type('NotRealUser')
        cy.get('[data-test="signin-submit"]').should('be.disabled')
        cy.get('#password').type('NotRealPassword')
        cy.get('[data-test="signin-submit"]').should('be.enabled').click()
        cy.get('[data-test="signin-error"]').should('contain.text', 'Username or password is invalid')
    });

    it('Sign up link', () => {
        cy.get('[data-test="signup"]').click()
        cy.urlEqual('signup')
    });

    it('Login', () => {
        cy.get('#username').type('AutoTester')
        cy.get('#password').type('abc123')
        cy.get('[data-test="signin-submit"]').should('be.enabled').click()
        cy.urlEqual('')
    });
})