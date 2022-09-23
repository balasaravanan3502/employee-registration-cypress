import { slowCypressDown } from "cypress-slow-down";

// slowCypressDown();

describe("Website Status", () => {
  it("Open Registration Form", () => {
    cy.visit("https://balasaravanan3502.github.io/employee-registration/");

    cy.title().should("eq", "Onboarding");
  });
});

describe("Input : Name - Testing", () => {
  it("Entering empty name", () => {
    cy.get("#submit").click();
    cy.get("#required-name").should("be.visible");
  });

  it("Entering valid name", () => {
    cy.get("#name").type("bala");
    cy.get("#submit").click();
    cy.get("#required-name").should("not.be.visible");
  });
});

describe("Input : Email - Testing", () => {
  it("Entering empty email", () => {
    cy.get("#submit").click();
    cy.get("#required-email").should("be.visible");
  });

  it("Entering invalid email", () => {
    cy.get("#email").type("balasaravanan");
    cy.get("#submit").click();
    cy.get("#valid-email").should("be.visible");
  });

  it("Entering valid email", () => {
    cy.get("#email").type("balasaravanan@gmail.com");
    cy.get("#submit").click();
    cy.get("#required-email").should("not.be.visible");
  });
});

describe("Input : Phone - Testing", () => {
  it("Entering empty phone", () => {
    cy.get("#submit").click();
    cy.get("#required-phone").should("be.visible");
  });

  it("Entering invalid phone", () => {
    cy.get("#phone").type("123123");
    cy.get("#submit").click();
    cy.get("#valid-phone").should("be.visible");
  });

  it("Entering valid phone", () => {
    cy.get("#phone").type("9025566738");
    cy.get("#submit").click();
    cy.get("#required-phone").should("not.be.visible");
  });
});

describe("Input : DOB - Testing", () => {
  it("Entering empty date of birth", () => {
    cy.get("#submit").click();
    cy.get("#required-dob").should("be.visible");
  });

  it("Entering valid date of birth", () => {
    cy.get("#dob").type("2002-05-03");
    cy.get("#submit").click();
    cy.get("#required-dob").should("not.be.visible");
  });
});

describe("Input : Password - Testing", () => {
  it("Entering empty password", () => {
    cy.get("#submit").click();
    cy.get("#required-password").should("be.visible");
  });

  it("Entering empty confirm password", () => {
    cy.get("#submit").click();
    cy.get("#required-confirm-password").should("be.visible");
  });

  it("Entering invalid password", () => {
    cy.get("#password").type("12312");
    cy.get("#submit").click();
    cy.get("#min-password").should("be.visible");
  });

  it("Entering different password", () => {
    cy.get("#password").type("123121");
    cy.get("#confirm-password").type("123125");
    cy.get("#submit").click();
    cy.get("#match-confirm-password").should("be.visible");
  });

  it("Entering correct password", () => {
    cy.get("#reset").click();

    cy.get("#password").type("123125");
    cy.get("#confirm-password").type("123125");
    cy.get("#submit").click();
    cy.get("#match-confirm-password").should("not.be.visible");
  });
});

describe("Form Button - Testing", () => {
  it("Resting the Form", () => {
    cy.get("#reset").click();

    cy.get("#name").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#phone").should("have.value", "");
    cy.get("#gender").should("have.value", null);
    cy.get("#dob").should("have.value", "");
    cy.get("#password").should("have.value", "");
    cy.get("#confirm-password").should("have.value", "");
  });

  it("Submitting the form", () => {
    cy.visit("https://balasaravanan3502.github.io/employee-registration/");

    cy.get("#name").type("Bala").should("have.value", "Bala");
    cy.get("#email")
      .type("balasaravanan@gmail.com")
      .should("have.value", "balasaravanan@gmail.com");
    cy.get("#phone").type("1234567890").should("have.value", "1234567890");
    cy.get("#gender").select("Male").should("have.value", "male");
    cy.get("#dob").type("2002-05-03").should("have.value", "2002-05-03");
    cy.get("#password").type("123123").should("have.value", "123123");
    cy.get("#confirm-password").type("123123").should("have.value", "123123");

    cy.get("#submit").click();

    cy.get("#success").should("be.visible");
  });
});
