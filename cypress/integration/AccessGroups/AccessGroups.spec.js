import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AccessGroups from "../PageObjects/AccessGroups";
import LoginPage from "../PageObjects/LoginPage";

const page = new LoginPage
const group = new AccessGroups

Before(() => {
    page.visit()
    page.fillUserName('kapua-sys')
    page.fillPassworde('kapua-password')
    page.submit()
})


Given('I navigate to AccessGroup tab', () => {
    group.groups()
})

When('I click on Add', () => {
    group.addGroups()
})

And('I create new group with name {string} and description {string}', (name, description) => {
    group.fillName(name)
    group.fillDescription(description)


})

And('I create new group with name {string} and no description', (name) => {
    group.fillName(name)
})


And('I create new group without name and with description {string}', (description) => {
    group.fillDescription(description)
})

And('I click submit button', () => {
    group.submitGroup()
})

Then('Created group with name {string} should be shown', (name) => {
    cy.contains(name).should('be.visible')
})

Then('Created group with name {string} should not be shown', (name) => {
    cy.contains(name).should('not.exist')
})

Then('Red alert sign should be shown', () => {
    cy.get('img[role=alert]').should('exist')
})

And('I search for group with name {string}', (name) => {
    group.findName(name)
    group.searchGroup()
})

And('I try to delete group with name {string}', (name) => {
    cy.contains(name).click()
    cy.contains('Delete').click()
    cy.contains('Submit').click()
})

Then('Message {string} should be shown', (message) => {
    cy.contains(message).should('be.visible')
})

When('I click edit button', () => {
    group.editGroup()
})

And('I edit name {string} to {string} and description to {string}', (name, newName, description) => {
    cy.contains(name).click()
    cy.contains('Edit').click()
    group.editName(newName)
    group.editDescription(description)
})




