describe('Create and mark-unmark as favorite', function () {
    it('Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        //  cy.get('input[type="email"]').type('so.nja@live.com')
        // cy.get('input[type="password"]').type('sonjasonja')
        //  cy.get('button[type="submit"]').should('be.visible').click()

        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('so.nja@live.com')
            cy.get('input[type="password"]').type('sonjasonja')
            cy.get('button[type="submit"]').should('be.visible').click()
        })
        cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
    })

    it('Create a post', function () {
      //  cy.contains('New Post').click()
      cy.get('ul.navbar-nav').children().contains('New Post').click()

      cy.hash().should('include', '#/editor')
        //  cy.location('hash').should('include','#/editor')
        cy.get('form').within(($form) => {
        cy.get('input').first().type('Text')
        cy.get('input').eq(2).type('Text')
        cy.get('textarea').last().type('text')
        })

        cy.contains('Publish Article').click()
        cy.url().should('contain', '#/article')
    })

    it('Mark-unmark post', function () {
        cy.get('.nav-link').contains('Sonja').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        // cy.go(-1)

    })
})