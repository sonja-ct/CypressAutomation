/// <reference types="Cypress"/>
class Users {

    users() {
        cy.newItem('Users')
    }

    addUsers() {
    cy.add()
    }

    searchUsers() {
        const newUser = cy.contains('Search')
        newUser.click()
    }

    fillName(value) {
        const field = cy.get('[name=userName]')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value) {
        const field = cy.get('[name=password]')
        field.clear()
        field.type(value)
        return this
    }

    fillPhoneNumber(value){
        cy.get('form').within(($form) => {
        const field = cy.get('[name=phoneNumber]')
        field.clear()
        field.type(value)
        return this 
    })}

    fillEmail(value){
        cy.get('form').within(($form) => {
        const field = cy.get('[name=userEmail]')
        field.clear()
        field.type(value)
        return this 
    })}

    confirmPassword(value) {
        const field = cy.get('[name=confirmPassword]')
        field.clear()
        field.type(value)
        return this
    }

    submitUser() {
        const submitUser = cy.contains('Submit')
        submitUser.click()
    }

    findUser(value){
        const findUser = cy.get('[name=name]')
        findUser.clear()
        findUser.type(value)
        return this
    }

    findPhoneNumber(value){
        const number = cy.get('[name=phoneNumber]').first()
      number.clear()
        number.type(value)
        return this
    }

    
    findEmail(value){
        const field = cy.get('[name=email]').first()
        field.clear()
        field.type(value)
        return this
    }

    editDisplayName(value){
        cy.get('form').within(($form) => {
            const field = cy.get('[method=get]').get('input').get('[name=displayName]')
            field.clear()
            field.clear()
            field.type(value)
            return this
        })
    }

    permissions(){
        cy.contains('Permissions').click()
    }

    grantPermissionButton(){
        cy.contains('Grant').click()
    }

    rolesButton(){
        cy.contains('Roles').click()
    }

    assignRolesButton(){
        cy.contains('Assign').click()
    }

    assignRoles(role){
        cy.get('form').within(($form) => {
            cy.get('.x-form-trigger').first().click()
            
            })
            cy.get('.x-combo-list-item')
            cy.get('[title=admin]').contains(role).click()
    }

    grantPermission(permission){
        cy.get('form').within(($form) => {
            cy.get('.x-form-trigger').first().click()
            
            })
            cy.get('.x-combo-list')
            cy.get('[role=listitem]').contains(permission).click()
    }

    forwardableCheckBox(){
        cy.get('input[type=checkbox]').check()
    }
  
}

export default Users