describe('gallery', () => {
  beforeEach(() => {
    cy.visit('/gallery');
  });

  describe('main', () => {
    it('should be displayed correctly', () => {
      cy.findByText('Zodiac');
      cy.findByText('Self Portraits');
      cy.findByText('Friends');
    });

    it('should support i18n', () => {
      cy.findByText('🇯🇵').click();
      cy.location('pathname').should('eq', '/ja/gallery');
      cy.findByText(/干支/);
      cy.findByText(/自画像/);
      cy.findByText(/友達/);

      cy.findByText('🇺🇸').click();
      cy.location('pathname').should('eq', '/gallery');
    });
  });
});
