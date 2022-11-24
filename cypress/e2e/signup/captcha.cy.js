import { faker } from '@faker-js/faker';

describe("Tests for captcha", () => {


  beforeEach(function() {

    cy.fixture('main').then((main) => {
      this.main = main
    })
    cy.fixture('login').then((login) => {
      this.login = login
    })

    cy.log('Open main page')
    cy.visit('/')
  })
 

  context("Captcha", () => {

    it("Incorrect captcha", function() {

      const email = faker.internet.email()
      const name = 'QAtest'
      const password = faker.internet.password()
      const captcha = faker.internet.password(6)

      cy.log('Open signup page')
      cy.get(this.main.signup).click()
      cy.url().should('include', '/enjoy#/register')

      cy.log('Input userdata:', email, name, password, captcha)
      cy.input(this.login.email, email)
      cy.input('.reg-form__container-signup > :nth-child(1) > span > .input', name)
      cy.input('.reg-form__line--password > :nth-child(1) > .input', password)
      cy.input(':nth-child(2) > .input', password)
      cy.input('.reg-form__line--code > span > .input', captcha)
      cy.get('.reg-form__checkbox-animation').click()

      cy.log('Click create account')
      cy.get('.no-bonus > div > .btn').click()
      cy.get('.reg-form__line--code > span > .error').should('be.visible')
    })
  })
})