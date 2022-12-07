/// <reference types="cypress" />

describe('NG app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays all nav links', () => {
    const navItemSelector = '.ant-menu-title-content';
    cy.get(navItemSelector).should('have.length', 4);

    cy.get(navItemSelector).first().should('have.text', 'Gas Prevailing View');
    cy.get(navItemSelector).eq(1).should('have.text', 'Report Explorer');
    cy.get(navItemSelector).eq(2).should('have.text', 'Data Item Explorer');
    cy.get(navItemSelector).last().should('have.text', 'Links');
  });

  it('navigates to the report explorer', () => {
    const navItemSelector = '.ant-menu-title-content';
    cy.get(navItemSelector).eq(1).click();

    cy.get('.report-explorer').last().should('have.text', 'Report Explorer');
  });
});
