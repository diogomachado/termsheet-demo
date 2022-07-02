/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("termsheet beta tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("should display 10 deals", () => {
    cy.wait(3000);
    cy.get(".table-custom tbody tr").should("have.length", 10);
  });

  it("should add a new deal", () => {
    cy.wait(3500);

    cy.get("#btn-add").click({
      force: true,
    });

    cy.get("#form-name").type(faker.company.companyName(), {
      force: true,
    });
    cy.get("#form-price").type(parseInt(faker.finance.amount()));
    cy.get("#form-address").type(faker.address.cityName());
    cy.get("#form-noi").type(faker.finance.amount());
    cy.get("#form-rate").type(faker.finance.amount(5, 10, 0));

    cy.wait(1000);

    cy.get("#btn-form-add").click({
      force: true,
    });

    cy.get(".table-custom tbody tr").should("have.length", 11);
  });
});
