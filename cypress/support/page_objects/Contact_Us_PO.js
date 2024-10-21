/// <reference types="cypress" />

import Base_PO from "./Base_PO";



class Contact_Us_PO extends Base_PO{
    elements = {
        comment_TextField: () => cy.get('textarea[name="message"]'),
        submit_Button: () => cy.get('[type="submit"]').click(),
        submission_Header_Text: () => cy.xpath("//h1 | //body")
    }

    navigateTo_ContactUs_Page(){
        super.navigate("/Contact-Us/contactus.html");
    }

    type_FirstName(firstName){
        cy.get('[name="first_name"]').type(firstName);
    }

    type_LastName(lastName){
        cy.get('[name="last_name"]').type(lastName);
    }

    type_emailAddress(emailAddress){
        cy.get('[name="email"]').type(emailAddress);
    }

    type_Comment(message){
        this.elements.comment_TextField().type(message);
    }

    clickON_Submit_Button(){
        this.elements.submit_Button();
    }

    validate_Submission_Header(expectedMessage){
        this.elements.submission_Header_Text().contains(expectedMessage);
        this.elements.submission_Header_Text().invoke('text').should('include', expectedMessage);
    }


}

export default Contact_Us_PO;