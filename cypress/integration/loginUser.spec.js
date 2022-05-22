/// <reference types="Cypress" />

function fillForm(username, password) {
  cy.get("#form").within((form) => {
    username && cy.get("#username").type(username);
    password && cy.get("#password").type(password);
    cy.get(form).submit(); //hace un submit del form (un enter)
  });
}

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#login-button").click();
  });
  it("puedo loguear si lleno todos los campos", () => {
    fillForm("pepeArgento", "alfiobasile");
  });
  it("no puedo loguear si no lleno todos los campos", () => {
    fillForm("pepeArgento");
  });
});
