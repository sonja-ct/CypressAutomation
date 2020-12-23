/// <reference types="Cypress"/>

class LoginPage
{
    visit(){
        cy.visit("http://localhost:8080/")
    }

    fillUserName(value){
      const field = cy.get("#x-auto-16-input")
      field.clear()
      field.type(value)
      return this
    }

    fillPassworde(value){
        const field = cy.get("#x-auto-17-input")
        field.clear()
        field.type(value)
        return this
      }

    submit(){
        const button = cy.get('button').contains('Login')
        button.click()  
    }

    reset(){
        const resetButton=cy.contains('Reset')
        resetButton.click()
    }

    openMenu(){
        const menu = cy.contains('Kapua Sysadmin @ kapua-sys')
        menu.click()
    }

    logout(){
        const logout = cy.contains('Logout')
        logout.click()
    }

}

export default LoginPage