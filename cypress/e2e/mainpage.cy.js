describe('mainpage', function() {
  it('Frontpage can be opened and interacted with', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Phonebook')
    cy.contains('Add a new contact')
    cy.get('#nameinput').type("ABC");
    cy.get('#addbutton').click()
    cy.wait(500)
    cy.contains('Person validation failed')
  })
})