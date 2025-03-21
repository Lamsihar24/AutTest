/// <reference types="Cypress" />
import "cypress-xpath";
import loginPage from "../../../object/login/loginPage";
import dataUser from "../../../fixtures/data/user.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("Input Valid Username and Password should be success", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(loginPage.emailInput).type(dataUser.email);
    cy.get(loginPage.passwordInput).type(dataUser.password);
    cy.get(loginPage.loginBtn).click();
    cy.url().should("include", "/inventory.html");
  });

  // it("Input invalid username and Passord should be fail", ()=> {
  //   cy.get(loginPage.emailInput).type(dataUser.invalidEmail);
  //   cy.get(loginPage.passwordInput).type(dataUser.password);
  //   cy.get(loginPage.loginBtn).click;
  //   cy.get(loginPage.errorMessage).displa
  // });
}); 