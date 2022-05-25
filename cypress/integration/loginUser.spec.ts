/// <reference types="Cypress" />

function fillForm(username, password) {
  cy.get("#form").within((form: any) => {
    username && cy.get("#username").type(username);
    password && cy.get("#password").type(password);
    cy.get(form).submit();
  });
}

describe("Login", () => {
  // Visit page and click on login button
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#login-button").click();
  });
  it("Login with all fields are completed", () => {
    fillForm("John Doe", "123456");
  });
  it("Can not login if all fields are not completed", () => {
    fillForm("John Doe", "");
    // Get error message
    cy.get("#login-error").should("be.visible");
  });
  it("Should exist Hello username when user is logged in", () => {
    fillForm("John Doe", "123456");
    // Get hello message
    cy.get("#login-hello").should("be.visible");
  });
  it("Wrong user should returns an alert with User not found text", () => {
    fillForm("Doe John", "123456");
    // Alert should contain "User not found"
    cy.on("window:alert", (str) => {
      expect(str).to.equal("User not found");
    });
  });
});
