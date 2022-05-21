/// <reference types="Cypress" />

describe("Gif list", () => {
  it("se devuelven 20 elementos de la api", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="card"]').should("have.length", 20);
  });
});

//Testea si existen 20 elementos con data-testid="card" en el DOM
