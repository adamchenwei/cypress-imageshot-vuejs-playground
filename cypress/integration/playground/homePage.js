describe('Chewy Home', function () {
  it('.should have menu bar', function () {
    cy.visit('http://localhost:8081');
    cy.title().should(
      'equal',
      'cypress-imageshot-vuejs-playground'
    );
    // cy.get('.cw-promo-ticket').contains('Save 30%').matchImageSnapshot();
    cy.get('[data-cy=main-text-with-link]')
      .matchImageSnapshot();
  });

//   context('Querying', function () {
//       beforeEach(function () {
//           cy.visit('http://localhost:3000');
//       });

//       it('cy.get() - query DOM elements', function () {
//           cy.get('#appIntro').should('contain', 'This is a proof of concept Application.');
//       })
//   });

//   context('Events', function () {
//       it('.click() - click on a DOM element', function () {
//           cy.get('#actionMessage').should('contain', 'Do not press the button!');
//           cy.get('#actionBtn').click();
//           cy.get('#actionMessage').should('contain', 'Boom!');
//       })
//   });
});
