describe('home', () => {
  beforeEach(() => {
    cy.visit('/dev');
  });

  describe('main', () => {
    it('should transition to the about page after hovering', () => {
      cy.findAllByTestId('VuePixelXel').each(($xel) => {
        cy.wrap($xel).trigger('mouseover', { force: true });
        // Wait a moment to ensure the process after mouseover finish.
        // https://github.com/tanakaworld/tanaka.world/pull/85/checks?check_run_id=2429408222
        cy.wait(10);
      });
      cy.location('pathname').should('eq', '/');
    });

    it('should skip and transition to the about page', () => {
      // show the menu
      cy.findByTestId('HomeVuePixel').trigger('mouseover');

      cy.findByText('Skip').click();
      cy.location('pathname').should('eq', '/');
    });

    it('should be able to change color', () => {
      // show the menu
      cy.findByTestId('HomeVuePixel').trigger('mouseover');

      cy.findByTestId('ButtonColor').click();
      cy.url().should('match', /\?color=[a-fA-F0-9]{6}/);

      cy.findByTestId('ButtonColor').click();
      cy.url().should('match', /\?color=[a-fA-F0-9]{6}/);

      cy.findByTestId('ButtonColor').click();
      cy.findByTestId('ButtonColor').click();
      cy.findByTestId('ButtonColor').click();
      cy.findByTestId('ButtonColor').click();
    });

    it('should support i18n', () => {
      cy.findByText('🇯🇵').click();
      cy.location('pathname').should('eq', '/ja/dev');
      // FIXME failing due to DOM detach
      // https://on.cypress.io/element-has-detached-from-dom
      // https://github.com/tanakaworld/tanaka.world/runs/1642442166?check_suite_focus=true
      // show the menu
      // cy.findByTestId('HomeVuePixel').trigger('mouseover');
      // cy.findByText(/スキップ/);

      cy.findByText('🇺🇸').click();
      cy.location('pathname').should('eq', '/dev');
      // FIXME failing due to DOM detach
      // https://on.cypress.io/element-has-detached-from-dom
      // https://github.com/tanakaworld/tanaka.world/runs/1642442166?check_suite_focus=true
      // show the menu
      // cy.findByTestId('HomeVuePixel').trigger('mouseover');
      // cy.findByText(/Skip/);
    });
  });
});
