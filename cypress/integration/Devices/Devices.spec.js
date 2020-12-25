import { Before, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import Devices from "../PageObjects/Devices";
import LoginPage from "../PageObjects/LoginPage";

const page = new LoginPage()
const device = new Devices()

Before(() => {
    page.visit()
    page.fillUserName('kapua-sys')
    page.fillPassworde('kapua-password')
    page.submit()
})

Given ('I navigate to Devices tab',()=>{
    cy.newItem('Devices')
})

When ('I click on Add',()=>{
    cy.add()
})

When ('I create new device with clientID {string} and display name {string}',(clientID,displayName)=>{
    device.fillClientId(clientID)
    device.fillDisplayName(displayName)
})

When ('I click submit button',()=>{
    device.submitDevice()
})

Then ('Message {string} should be shown',(message)=>{
cy.contains(message).should('be.visible')
})