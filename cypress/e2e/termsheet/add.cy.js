/// <reference types="cypress" />

describe("termsheet beta tests", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:4200");
  });

  it("should display 10 deals", () => {
    cy.wait(3000);
    cy.get(".table-custom tbody tr").should("have.length", 10);
  });

  it("should add a new deal", () => {
    cy.get("#btn-add").click({
      force: true,
    });

    cy.get("#form-name").type("Company 1");
    cy.get("#form-price").type(3412313);
    cy.get("#form-address").type("New York, Strees 24, Down Town");
    cy.get("#form-noi").type("2133");
    cy.get("#form-rate").type("12");

    cy.wait(1000);

    cy.get("#btn-form-add").click({
      force: true,
    });
  });
});
