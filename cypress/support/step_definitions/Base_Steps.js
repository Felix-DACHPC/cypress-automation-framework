/// <reference types="cypress" />
import { After, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Executes before each Scenario")
    cy.clearLocalStorage(); 
})

Before({tags: "@smoke"}, () => {
    cy.log("Execute Smoke Pack")
})

After(() => {
    cy.log("Executes after each Scenario/Test")
})

When("I wait for {int} seconds", (seconds) => {
    cy.wait(seconds * 1000);
})