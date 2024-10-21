/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";

const contactus_Page = new Contact_Us_PO;

Given('I navigate to the Contact Us homepage', () => {
    contactus_Page.navigateTo_ContactUs_Page();
})

When('I type a first name', () => {
    contactus_Page.type_FirstName("Felix");
})

When('I type a last name', () => {
    //cy.get('[name="last_name"]').type('Rühl');
    contactus_Page.type_LastName('Rühl')
})

When('I enter an email adress', () => {
    contactus_Page.type_emailAddress('example@example.com');
    //cy.get('[name="email"]').type('example@example.com');
})

When('I type a comment', () => {
    //cy.get('textarea[name="message"]').type('Hello World')
    contactus_Page.type_Comment('Hello World');
})

When('I click on the submit button', () => {
    //cy.get('[type="submit"]').click();
    contactus_Page.clickON_Submit_Button();
})

When('I type a specific first name {string}', (firstName) => {
    contactus_Page.type_FirstName(firstName);
})

When('I type a specific last name {string}', (lastName) => {
    contactus_Page.type_LastName(lastName);
})

When('I type a specific email address {string}', (email) => {
    contactus_Page.type_emailAddress(email);
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    contactus_Page.type_Comment(word + number);
})

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
    contactus_Page.type_FirstName(firstName);
    contactus_Page.type_LastName(lastName);
})

When('I type a {string} and a comment {string}', (email, comment) => {
    contactus_Page.type_emailAddress(email);
    contactus_Page.type_Comment(comment);
})

Then('I should be presented with a successful contact us submission message', () => {

    contactus_Page.validate_Submission_Header("Thank You for your Message!")
})

Then('I should be presented with an unsuccessful contact us submission message', () => {
    contactus_Page.validate_Submission_Header("Error: Invalid email address");
})

Then('I should be presented with header text {string}', (message) => {
    contactus_Page.validate_Submission_Header(message);
})
