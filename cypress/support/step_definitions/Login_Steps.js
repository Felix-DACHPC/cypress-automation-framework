/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When ('I type a username {word}', (userName) => {
    cy.get("#text").type(userName);
})

When ('I type a password {word}', (password) => {
    cy.get("#password").type(password);
})

When('I click the login button', () => {
    stub = cy.stub();
    cy.on('window:alert', stub )  
    cy.get("#login-button").click();
})

Then ('I should be presented with an Alert with {string}', (message) => {
    expect(stub).to.have.been.calledWith(message);
})
