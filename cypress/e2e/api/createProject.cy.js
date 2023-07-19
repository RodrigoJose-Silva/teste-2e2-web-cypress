import { faker } from '@faker-js/faker'

describe('Create project', () => {
    beforeEach(() => cy.api_deleteProjects())
    it('successfully', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(project, {timeout: 10000})
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
                expect(response.body.description).to.equal(project.description)
            })
    })
})
