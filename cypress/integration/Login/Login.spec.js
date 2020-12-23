import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../PageObjects/LoginPage";

const page = new LoginPage

Given('I open Kapua Login page', () => {
    page.visit()
});

When('I type in', (datatable)=> {
    datatable.hashes().forEach(element => {
        page.fillUserName(element.username)
        page.fillPassworde(element.password)
    })
});

And('I click login button', () => {
    page.submit()
});

Then('Feed should be shown', () => {
    cy.url().should('eq', "http://localhost:8080/")
    cy.title().should('contain', 'Eclipse Kapua')
    cy.contains('Kapua Sysadmin @ kapua-sys').should('be.visible')
});

Then('Error message {string} should be shown', (message) => {
    cy.contains(message).should('be.visible')
    cy.get('[aria-disabled=false]').should('be.visible')
})

When ('I try to login only with password {string}',(password)=>{
    page.fillPassworde(password)
})


When ('I try to login only with username {string}',(username)=>{
    page.fillUserName(username)
})

And ('I click reset button',()=>{
    page.reset()
})

Then ('Username and password fields should be empty',()=>{
    cy.get('#x-auto-16-input').should('be.empty')
    cy.get('#x-auto-17-input').should('be.empty')
})

