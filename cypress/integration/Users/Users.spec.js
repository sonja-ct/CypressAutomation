import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../PageObjects/LoginPage";
import Users from "../PageObjects/Users";

const page = new LoginPage()
const user = new Users()

Before(() => {
    page.visit()
    page.fillUserName('kapua-sys')
    page.fillPassworde('kapua-password')
    page.submit()
})

Given('I navigate to Users tab', () => {
    user.users()
})

When('I click on Add', () => {
    user.addUsers()
})

And('I create new user with username {string} and password {string}', (username, password) => {
    user.fillName(username)
    user.fillPassword(password)
    user.confirmPassword(password)
})

And('I click submit button', () => {
    user.submitUser()
})
Then('Created user with name {string} should be shown', (user) => {
    cy.contains(user).should('be.visible')
})

Then('Message {string} should be shown', (message) => {
    cy.contains(message).should('be.visible')
})

When('I click on Kapua Sysadmin and Logout', () => {
    page.openMenu()
    page.logout()
})

And('I login as {string} with password {string}', (user, password) => {
    page.fillUserName(user)
    page.fillPassworde(password)
    page.submit()
})

Then('Feed with {string} @ kapua-sys should be shown', (user) => {
    cy.url().should('eq', "http://localhost:8080/")
    cy.title().should('contain', 'Eclipse Kapua')
    cy.contains(user + ' @ kapua-sys').should('be.visible')
})

Then('Red alert sign should be shown', () => {
    cy.get('[role=alert]').should('exist')
})

When('I search for user {string}', (username) => {
    user.findUser(username)
    user.searchUsers()
})

When('Add phone number {string}', (number) => {
    user.fillPhoneNumber(number)
})

When('I search for phone number {string}', (number) => {
    user.findPhoneNumber(number)
    user.searchUsers()
})


And('Add email {string}', (email) => {
    user.fillEmail(email)
})

When('I search for email {string}', (email) => {
    user.findEmail(email)
    user.searchUsers()
})

When ('I edit {string} display name to {string}',(username,displayname)=>{
cy.contains(username).click()
cy.contains('Edit').click()
user.editDisplayName(displayname)
})

When ('I select grant permission to user {string} for {string}',(username,permission)=>{
cy.contains(username).click()
user.permissions()
user.grantPermissionButton()
user.grantPermission(permission)
})

And ('Make permission forwardable',()=>{
    user.forwardableCheckBox()
})

When ('I select {string} role to user {string}',(role,username)=>{
    cy.contains(username).click()
    user.rolesButton()
    user.assignRolesButton()
    user.assignRoles(role)


})

