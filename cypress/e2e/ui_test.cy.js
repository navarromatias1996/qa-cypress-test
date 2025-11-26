describe('UI Test - Automation Exercise', () => {
  it('should register a new user successfully', () => {
    cy.visit('https://automationexercise.com/');

    cy.contains('Signup / Login').click();

    cy.get('input[data-qa="signup-name"]').type('Test User');
    cy.get('input[data-qa="signup-email"]').type(`testuser_${Date.now()}@mail.com`);

    cy.get('button[data-qa="signup-button"]').click();

    cy.get('#id_gender1').click();
    cy.get('#password').type('Password123');

    cy.get('button[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
  });
});