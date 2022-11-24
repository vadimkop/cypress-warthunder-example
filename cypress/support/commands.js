Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("input", (selector, data) => {
    cy.get(selector).type(data);
})

Cypress.Commands.add("getContains", (selector, data) => {
    cy.get(selector).contains(data);
})