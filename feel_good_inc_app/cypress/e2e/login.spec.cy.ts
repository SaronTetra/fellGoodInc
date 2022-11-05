describe('Login', () => {
    it('should login user', () => {
      cy.visit('http://localhost:3000/')
      cy.get('button[aria-controls="sidebar"]').click()
      cy.contains('Sign In').click()
      cy.get('input#email').type('abc.def@asd.fgh')
      cy.get('input#password').type('password')
      cy.contains('Submit').click()
      cy.contains('Feel Good')
    })
  })