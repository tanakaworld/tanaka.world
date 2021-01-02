describe('header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display correctly', () => {
    cy.get('header').within(() => {
      cy.findByText(/THE TANAKA WORLD/);
      cy.findByText('About');
      cy.findByText('Gallery');
      cy.findByText('🇺🇸');
      cy.findByText('🇯🇵');
    });
  });

  it('should navigate', () => {
    cy.get('header').within(() => {
      cy.findByText('About').click();
      cy.location('pathname').should('eq', '/about');

      cy.findByText('Gallery').click();
      cy.location('pathname').should('eq', '/gallery');

      cy.findByText(/THE TANAKA WORLD/).click();
      cy.location('pathname').should('eq', '/');
    });
  });

  it('should support i18n', () => {
    cy.findByText('🇯🇵').click();
    cy.location('pathname').should('eq', '/ja');
    cy.findByText(/ザ・タナカ ワールド/);

    cy.findByText('🇺🇸').click();
    cy.location('pathname').should('eq', '/');
  });
});
