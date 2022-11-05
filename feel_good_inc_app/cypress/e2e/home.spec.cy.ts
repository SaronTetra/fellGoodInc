describe('Home page and vaigation', () => {
  it('should load home page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Feels Good')
  })

  it('should open sidebar', () => {
    cy.get('aside[aria-label="Sidebar"]').should('not.be.visible')
    cy.get('button[aria-controls="sidebar"]').click()
    cy.get('aside[aria-label="Sidebar"]').should('be.visible')
    cy.get('button[aria-controls="sidebar"]').click()
    cy.get('aside[aria-label="Sidebar"]').should('not.be.visible')
  })

  it('should go to help page and go back', () => {
    cy.get('button[aria-controls="sidebar"]').click()
    cy.contains('Help').click()
    cy.url().should('contain', '/help')
    cy.contains('This application was created for people who are still experiencing mental health difficulties resulting from the COVID-19 pandemic')
    cy.contains('Back to main page').click()
    cy.contains('Feels Good')
  })
})