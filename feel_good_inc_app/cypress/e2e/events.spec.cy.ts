describe('Events carousel', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/events', { fixture: 'events.json' })
      })

    it('should load events', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Event Name').should('be.visible')
      cy.contains('Event Name 2').should('not.be.visible')
      cy.contains('Event Name 3').should('not.be.visible')
      cy.get('button[data-testid="carousel-right-control"]').click()

      cy.contains('Event Name').should('not.be.visible')
      cy.contains('Event Name 2').should('be.visible')
      cy.contains('Event Name 3').should('not.be.visible')
      cy.get('button[data-testid="carousel-right-control"]').click()

      cy.contains('Event Name').should('not.be.visible')
      cy.contains('Event Name 2').should('not.be.visible')
      cy.contains('Event Name 3').should('be.visible')
    })
  })