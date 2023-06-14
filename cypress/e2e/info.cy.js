describe('info', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000/info')
    cy.contains('info')
    cy.contains('GMT')
  })
})