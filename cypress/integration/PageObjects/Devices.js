/// <reference types="Cypress"/>
class Devices {

    devices() {
        const devices = cy.contains('Devices')
        devices.click()
    }

    addDevices() {
        const newDevice = cy.contains('Add')
        newDevice.click()
    }

    fillDisplayName(value) {
        const field = cy.xpath("//div[@class=' x-form-field x-form-text  x-form-invalid']|//*[@name='displayName'][@style='width: 296px;']")
        field.clear()
        field.type(value)
        return this
    }

    fillClientId(value) {
        const field = cy.xpath("//div[@class=' x-form-field x-form-text  x-form-invalid']|//*[@name='clientID'][@style='width: 296px;']")
        field.clear()
        field.type(value)
        return this
    }

    submitDevice() {
        const submitDevice = cy.contains('Submit')
        submitDevice.click()
    }
}

export default Devices