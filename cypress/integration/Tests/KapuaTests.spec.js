/// <reference types="cypress"/>

import LoginPage from '../PageObjects/LoginPage'
import Devices from '../PageObjects/Devices'
import AccessGroups from '../PageObjects/AccessGroups'
import Users from '../PageObjects/User'


describe('Kapua login tests tests',function()
{
    /*
    it('Verify Login Page',function()
    {
        const page = new LoginPage
        page.visit()
        cy.url().should('eq','http://localhost:8080/')
        cy.title().should('contain','Eclipse Kapua')
    })

    it('Login',function()
    {
        const page = new LoginPage
        page.visit()
        page.fillUserName('kapua-sys')
        page.fillPassworde('kapua-password')
        page.submit()
        cy.url().should('eq',"http://localhost:8080/")
        cy.title().should('contain','Eclipse Kapua')
        cy.contains('Kapua Sysadmin @ kapua-sys').should('be.visible')
    })


    it('Login without username and with password',function()
    {
        const page = new LoginPage
        page.visit()
        
        page.fillPassworde('kapua-password')
        page.submit()

        cy.contains('Username field is mandatory.').should('be.visible')
        cy.get('[aria-disabled=false]').should('be.visible')
    })

    it('Login with username and without password',function()
    {
        const page = new LoginPage
        page.visit()
        
        page.fillUserName('kapua-sys')
        page.submit()

        cy.contains('Password field is mandatory.').should('be.visible')
        cy.get('[aria-disabled=false]').should('be.visible')
    })

    it('Login without username and without password',function()
    {
        const page = new LoginPage
        page.visit()
        
        page.submit()

        cy.contains('Username and password are mandatory fields.').should('be.visible')
        cy.get('[aria-disabled=false]').should('be.visible')
    })
   

    it('Reset username and password',function()
    {
        const page = new LoginPage
        page.visit()
        page.fillUserName('kapua-sys')
        page.fillPassworde('kapua-password')
        page.reset()
        cy.get('#x-auto-16-input').should('be.empty')
        cy.get('#x-auto-17-input').should('be.empty') 
    })

    it('Login with incorrect username and correct password',function()
    {
        const page = new LoginPage
        page.visit()
        page.fillUserName('kapua')
        page.fillPassworde('kapua-password')
        page.submit()
        cy.get("#x-auto-16-input").should('be.empty')
        cy.get("#x-auto-17-input").should('be.empty')
        cy.contains('Invalid login credentials.').should('be.visible')
        cy.get('[aria-disabled=true]').should('be.visible')
      })

      it('Login with correct username and incorrect password',function()
      {
          const page = new LoginPage
          page.visit()
          page.fillUserName('kapua-sys')
          page.fillPassworde('kapua')
          page.submit()
          cy.get("#x-auto-16-input").should('be.empty')
          cy.get("#x-auto-17-input").should('be.empty')
          cy.get('[aria-disabled=true]').should('be.visible')
        })
})

describe('Device tests',function()
{
        it('Add new device',function()
      {
            const page = new LoginPage
            const device = new Devices
            page.visit()
            page.fillUserName('kapua-sys')
            page.fillPassworde('kapua-password')
            page.submit()
            device.devices()
            device.addDevices()

            device.fillClientId('clientId')
            device.fillDisplayName('displayName')
            device.submitDevice()

            cy.contains('clientId').should('be.visible')
        })

        it('Add new device without clientID',function()
        {
              const page = new LoginPage
              const device = new Devices
              page.visit()
              page.fillUserName('kapua-sys')
              page.fillPassworde('kapua-password')
              page.submit()
              device.devices()
              device.addDevices()
  
            
              device.fillDisplayName('displayName1')
              device.submitDevice()
  
              cy.contains('Fields with * are mandatory.').should('be.visible')

          })

          it('Add new device without displayName',function()
          {
                const page = new LoginPage
                const device = new Devices
                page.visit()
                page.fillUserName('kapua-sys')
                page.fillPassworde('kapua-password')
                page.submit()
                device.devices()
                device.addDevices()
    
              
                device.fillClientId('clientID1')
                device.submitDevice()
    
                cy.contains('Fields with * are mandatory.').should('be.visible')
  
            })
        })

        describe('User tests',function()
{
        it('Add new user',function()
        {
              const page = new LoginPage
              const user = new Users
              page.visit()
              page.fillUserName('kapua-sys')
              page.fillPassworde('kapua-password')
              page.submit()
          
  
              user.users()
              user.addUsers()
              user.fillName('name1')
              user.fillPassword('PasswordPassword123!')
              user.confirmPassword('PasswordPassword123!')
             user.submitUser()
  
             cy.contains('name1').should('be.visible')
          })

          it('Add new user without name',function()
          {
                const page = new LoginPage
                const user = new Users
                page.visit()
                page.fillUserName('kapua-sys')
                page.fillPassworde('kapua-password')
                page.submit()
            
    
                user.users()
                user.addUsers()
            
                user.fillPassword('PasswordPassword123!')
                user.confirmPassword('PasswordPassword123!')
               user.submitUser()
               cy.contains('Fields with * are mandatory.').should('be.visible')
            })

            it('Add new user different passwords',function()
            {
                  const page = new LoginPage
                  const user = new Users
                  page.visit()
                  page.fillUserName('kapua-sys')
                  page.fillPassworde('kapua-password')
                  page.submit()
              
      
                  user.users()
                  user.addUsers()
                  user.fillName('name')
                  user.fillPassword('PasswordPassword123!')
                  user.confirmPassword('PasswordPassword123123!')
                 user.submitUser()
      
                 cy.contains('Password values do not match.').should('be.visible')
              })
        
       it('Add new user without password',function()
       {
             const page = new LoginPage
             const user = new Users
             page.visit()
             page.fillUserName('kapua-sys')
             page.fillPassworde('kapua-password')
             page.submit()
         
 
             user.users()
             user.addUsers()
             user.fillName('name')
             user.fillPassword('PasswordPassword123!')
            
            user.submitUser()
 
            cy.contains('Fields with * are mandatory.').should('be.visible')
         })
        })
            
*/
        it('Add new group',function()
        {
              const page = new LoginPage
              const group = new AccessGroups
              page.visit()
              page.fillUserName('kapua-sys')
              page.fillPassworde('kapua-password')
              page.submit()
          
  
              group.groups()
              group.addGroups()
              group.fillName('new name1 ')
              group.fillDescription('desc')
             group.submitGroup()
  
            cy.contains('new name1').should('be.visible')
          })
        })