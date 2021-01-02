describe('about', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  describe('main', () => {
    it('should display contents correctly', () => {
      cy.findByText(/Hi! I'm Yutaro Tanaka a.k.a "tanakaworld"/);
      cy.findByText('Links');
      cy.findByText('Products');
      cy.findByText('Timeline');
    });

    it('should support i18n', () => {
      cy.findByText('🇯🇵').click();
      cy.location('pathname').should('eq', '/ja/about');
      cy.findByText(/ソフトウェア エンジニア/);

      cy.findByText('🇺🇸').click();
      cy.location('pathname').should('eq', '/about');
    });
  });
});
