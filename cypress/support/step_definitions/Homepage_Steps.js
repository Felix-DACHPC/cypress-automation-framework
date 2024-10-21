/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";
//const url = "https://www.webdriveruniversity.com/";

const basePage = new Base_PO();
const homePage = new Homepage_PO();

Given("I navigate to the WebdriverUniversity homepage", () => {
  //cy.visit(url);
  //basePage.navigate("");
  homePage.navigate("");
});

When(`I click on the contact us button`, () => {
  //cy.clickAndOpenLink_InSameTab("#contact-us");
  homePage.clickOn_ContactUs_Button();
});

When("I click on the login portal button", () => {
  //cy.clickAndOpenLink_InSameTab("#login-portal");
  homePage.clickOn_Login_Button();
});
