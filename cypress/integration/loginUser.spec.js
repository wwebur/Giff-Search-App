/// <reference types="Cypress" />

describe("Login", () => {
  it("puedo loguear si lleno todos los campos", () => {
    cy.visit("http://localhost:3000");

    cy.get("#login-button").click();

    cy.get("#form").within((form) => {
      cy.get("#username").type("pepeArgento");
      cy.get("#password").type("alfiobasile");

      cy.get(form).submit(); //hace un submit del form (un enter)
    });
  });
});
