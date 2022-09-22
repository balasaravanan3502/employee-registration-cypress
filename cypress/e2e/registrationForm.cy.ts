import { slowCypressDown } from "cypress-slow-down";

slowCypressDown();

describe("Website is Hosted", () => {
  it("Open Registration Form", () => {
    cy.visit("https://balasaravanan3502.github.io/employee-registration/");
  });
});

describe("Submitting Form Testing", () => {
  it("open registration form", () => {
    cy.visit("https://balasaravanan3502.github.io/employee-registration/");
  });

  it("Testing fields", () => {
    cy.get("#name").type("Bala");
    cy.get("#email").type("baksbjiagfio@gmail.com");
    cy.get("#phone").type("1212121212");
    cy.get("#gender").select("Male");
    cy.get("#dob").type("2002-05-01");
    cy.get("#password").type("123123");
    cy.get("#confirm-password").type("123123");
  });

  it("Submitting Form", () => {
    cy.get("#submit").click();
  });
});

// describe("Reset Form Testing", () => {
//   it("open registration form", () => {
//     cy.visit("https://balasaravanan3502.github.io/employee-registration/");
//   });

//   it("Testing fields", () => {
//     cy.get("#name").type("Bala");
//     cy.get("#email").type("baksbjiagfio@gmail.com");
//     cy.get("#phone").type("1212121212");
//     cy.get("#gender").select("Male");
//     cy.get("#dob").type("2002-05-01");
//     cy.get("#password").type("123123");
//     cy.get("#confirm-password").type("123123");
//   });

//   it("Resetting Form", () => {
//     cy.get("#reset").click();
//   });
// });

// describe("testing form submission", () => {});
