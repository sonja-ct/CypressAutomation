describe('Login', function () {
    it('Sing in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('so.nja@live.com')
        cy.get('input[type="password"]').type('sonjasonja')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})