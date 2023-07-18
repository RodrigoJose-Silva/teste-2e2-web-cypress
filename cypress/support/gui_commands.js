Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
) => {
    const login = () => {
        cy.visit('/users/sign_in')

        cy.get("[data-qa-selector='login_field']").type(user)
        cy.get("[data-qa-selector='password_field']").type(password, { log: false })  // func "{ log: false }" não exibe o login na app
        cy.get("[data-qa-selector='sign_in_button']").click()
    }

    const options = {
        cacheAcrossSpecs: true,
    }

    if (cacheSession) {
        cy.session(user, login, options)
    } else {
        login()
    }
})

Cypress.Commands.add('logout', () => {
    const logout = () => {
        cy.get('.qa-user-avatar').click()
        cy.contains('Sign out').click()
    }

    logout()
})

Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')  //redirecionado diremtamente a page de new project

    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})