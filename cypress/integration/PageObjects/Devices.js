/// <reference types="Cypress"/>
class Devices {

    devices() {
      cy.newItem('Devices')
    }

    addDevices() {
        cy.add('Add')

    }

    fillDisplayName(value) {
        cy.get('form').within(($form) => {
            const field = cy.get('[name=displayName]')
            field.clear()
            field.type(value)
            return this
        })
    }

    fillClientId(value) {
        cy.get('form').within(($form) => {
            const field = cy.get('[name=clientID]')
            field.clear()
            field.type(value)
            return this
        })
    }

    submitDevice() {
        const submitDevice = cy.contains('Submit')
        submitDevice.click()
    }
}

export default Devices