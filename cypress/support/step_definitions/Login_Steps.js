/// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO;
let stub;

Given('I navigate to the WebdriverUniversity Login Page', () => {
    loginPage.navigateTo_Login_Page();
})

When ('I type a username {word}', (userName) => {
    loginPage.type_Username(userName);
})

When ('I type a password {word}', (password) => {
    loginPage.type_Password(password);
})

When('I click the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub )  
    loginPage.click_Login_Button();
})

Then ('I should be presented with an Alert with {string}', (message) => {
    expect(stub).to.have.been.calledWith(message);
})
