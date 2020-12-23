/// <reference types="Cypress"/>
class AccessGroups {

    groups() {
        const groups = cy.contains('Access Groups').debug()
        groups.click()
    }

    addGroups() {
        const newGroup = cy.contains('Add')
        newGroup.click()
    }

    fillName(value) {
        cy.get('form').within(($form) => {
            const field = cy.get('[method=get]').get('input').first()
            field.clear()
            field.type(value)
            return this
        })
    }

    fillDescription(value) {
        const field = cy.get('[name=description]')
        field.clear()
        field.type(value)
        return this
    }

    findName(value) {
            const field = cy.get('[name=name]').first()
         //   field.clear()
            field.type(value)
            return this
    }

    findDescription(value) {
        const field = cy.get('[name=name]').last()
        field.clear()
        field.type(value)
        return this
    }

    submitGroup() {
        const submitGroup = cy.contains('Submit')
        submitGroup.click()
    }

    searchGroup(){
        const searchGroup=cy.contains('Search')
        searchGroup.click()
    }

    editGroup(){
        const editGroup = cy.contains('Edit')
        editGroup.click()
    }

    editName(value){
       cy.get('form').within(($form) => {
            const field = cy.get('[method=get]').get('input').first()
            field.clear()
            field.clear()
            field.type(value)
            return this
        })
    }

    editDescription(value){
        const field = cy.get('[name=description]')
        field.clear()
        field.type(value)
        return this
    }
}

export default AccessGroups