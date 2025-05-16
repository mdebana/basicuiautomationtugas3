describe('Tambah Jatah Cuti Entitlement', () => {
  const userAdmin = 'Admin';
  const userPass = 'admin123';

  it('Tambah Cuti (Positif)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(userAdmin);
    cy.get('[name="password"]').type(userPass);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.contains('Add Entitlements').click();

    cy.get('.oxd-autocomplete-text-input input').type('Deban');
    cy.wait(1000);
    cy.contains('.oxd-autocomplete-option', 'Deban').click();

    cy.get('.oxd-select-text').first().click();
    cy.contains('CAN - Vacation').click();

    cy.get('.oxd-input').eq(1).type('2');
    cy.get('[type="submit"]').click();
    cy.contains('button', 'Confirm').click();

    cy.contains('Success', { timeout: 10000 }).should('be.visible');
  });

  it('Tambah Cuti (Negatif - Field Kosong)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(userAdmin);
    cy.get('[name="password"]').type(userPass);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.contains('Add Entitlements').click();

    cy.get('[type="submit"]').click();
    cy.contains('Required').should('exist');
  });
});