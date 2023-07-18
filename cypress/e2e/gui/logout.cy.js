describe('Logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })
    it('logout successfully', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
        cy.get("[data-qa-selector='sign_in_tab']").should('be.visible') // validação alternativa
    })
})
