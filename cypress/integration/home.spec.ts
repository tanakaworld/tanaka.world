describe('home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('main', () => {
    it('should transition to the about page after hovering', () => {
      cy.get('.xel').each(($xel) => {
        cy.wrap($xel).trigger('mouseover', { force: true });
      });
      cy.location('pathname').should('eq', '/about');
    });

    it('should skip and transition to the about page', () => {
      // show the menu
      cy.get('#vue-pixel-board').trigger('mouseover');

      cy.findByText('Skip').click();
      cy.location('pathname').should('eq', '/about');
    });

    it('should be able to change color', () => {
      // show the menu
      cy.get('#vue-pixel-board').trigger('mouseover');

      cy.get('.color-button').click();
      cy.url().should('match', /\?color=[a-fA-F0-9]{6}/);

      cy.get('.color-button').click();
      cy.url().should('match', /\?color=[a-fA-F0-9]{6}/);

      cy.get('.color-button').click();
      cy.get('.color-button').click();
      cy.get('.color-button').click();
      cy.get('.color-button').click();
    });

    it('should support i18n', () => {
      cy.findByText('🇯🇵').click();
      cy.location('pathname').should('eq', '/ja');
      // show the menu
      cy.get('#vue-pixel-board').trigger('mouseover');
      cy.findByText(/スキップ/);

      cy.findByText('🇺🇸').click();
      cy.location('pathname').should('eq', '/');
      // show the menu
      cy.get('#vue-pixel-board').trigger('mouseover');
      cy.findByText(/Skip/);
    });
  });
});
