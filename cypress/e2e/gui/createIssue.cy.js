// import { faker } from '@faker-js/faker'

// describe('Create Issue', () => {

//     const issue = {
//         title: `issue-${faker.datatype.uuid()}`,
//         description: faker.random.words(3),
//         project: {
//           name: `project-${faker.datatype.uuid()}`,
//           description: faker.random.words(5)
//         }
//       }

//     beforeEach(() => {
//         cy.login()
//         cy.gui_createProject(issue.project)
//     })

//     it('successfully', () => {
//         const issue = {
//             title: `issue-${faker.datatype.uuid()}`,
//             description: faker.random.words(5)
//         }

//         cy.Cypress.Commands.add('gui_createIssue', issue => {
//             (issue)

//             cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}/issues/new`)
//             cy.contains(issue.name).should('be.visible')
//             cy.contains(issue.description).should('be.visible')
//         })
//     })
// })

import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.login()
    cy.gui_createProject(issue.project)
  })

  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})