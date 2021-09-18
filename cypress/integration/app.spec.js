describe('Navigation', () => {
  it('Visits the App', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Open a recipe', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="recipes"]').first().click();

    cy.url().should('include', '/recipes')

    cy.get('[data-cy=recipe-name]').should('have.length.gt', 0);
  })

  it('Back to main screen', () => {
    cy.visit('http://localhost:3000/');

    cy.get('a[href*="recipes"]').first().click();

    cy.url().should('include', '/recipes');

    cy.get('[data-cy=back-to-route]').click();

    cy.url().should('eq', 'http://localhost:3000/')

  })

})