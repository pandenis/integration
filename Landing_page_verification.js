/// <reference types="cypress-xpath" />

import {xpaths} from './LandingPageVars';
xpaths.introXpath
 


describe('Verify landing page.', () => {

    it('URL is include', () => {
      cy.visit('https://qa-test.d1cl3ctepbvcvq.amplifyapp.com')
      cy.url().should('include', 'qa-test.d1cl3ctepbvcvq');
    })


    it('Page includes greeting text (by class)', () => {

       cy.xpath(xpaths.introXpath).
       contains('How can we introduce you?')
     })

     it('Page includes instruction text (by class)', () => {
  
       cy.xpath(xpaths.instructionXpath1).
       contains('Please let us know your first and last name, so we could')
       cy.xpath(xpaths.instructionXpath2).
       contains('introduce you to your doctor.')
     })

   /*  it('Displaying correct Progress Bar', () => {
      cy.get('.jss11')
        .contains('[class=jss13]')
    //  .should('have.class','jss13')
   //   .should('have.css', 'background-color')
    //  .and('eq', rgb(255, 189, 57))
      })
      */


  })


  