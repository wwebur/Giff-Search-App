describe("Navigation", () => {
  it("Should navigate to the home page", () => {
    // Visit page
    cy.visit("http://localhost:3000");
    // The page should contain an h1 with "ADVANCED JS STUDY GROUP"
    cy.get("h1").contains("ADVANCED JS STUDY GROUP");
  });
  it("Should navigate to the home page", () => {
    // Visit page
    cy.visit("http://localhost:3000");
    // The page should contain an h1 with "Trending"
    cy.get("h4").contains("Trending");
  });

  it("Should navigate to error page", () => {
    cy.request({url: "http://localhost:3000/nonexisting", failOnStatusCode: false})
      .its("status")
      .should("equal", 404);
    cy.visit("http://localhost:3000/nonexisting", {failOnStatusCode: false});

    // Make sure that the error section shows with the corresponding message.
    cy.get("h1").contains("404");
    cy.get("h2").contains("This page could not be found");
  });
});

const asModule = {};

export default asModule;
