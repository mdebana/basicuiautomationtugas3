describe('Request Cuti', () => {
  const userAdmin = 'Admin';
  const passAdmin = 'admin123';
  const user = 'test1234';
  const pass = 'pass1234';

  it('Karyawan Request Cuti (Positif)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(user);
    cy.get('[name="password"]').type(pass);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Apply').click();
    cy.contains('Apply Leave').should('exist');

    cy.get('.oxd-select-text').first().click();
    cy.contains('CAN - Vacation').click();

    cy.get('input[placeholder="yyyy-dd-mm"]').first().click();
    cy.get('.oxd-calendar-date').contains('30').click();

    cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).click();
    cy.get('.oxd-calendar-date').contains('31').click();

    cy.get('div.oxd-select-text').contains('-- Select --').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').contains('All Days').click();

    cy.get('div.oxd-select-text').contains('-- Select --').click();
    cy.get('.oxd-select-dropdown .oxd-select-option').contains('Half Day - Morning').click();

    cy.get('[type="submit"]').click();
    cy.contains('Success').should('exist');

    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
    cy.get('[name="username"]').should('exist');
  });

  it('Admin Approve Cuti', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(userAdmin);
    cy.get('[name="password"]').type(passAdmin);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Leave List').click();

    cy.get('.oxd-autocomplete-text-input input').type('Deban');
    cy.wait(1000);
    cy.contains('.oxd-autocomplete-option', 'Deban').click();

    cy.get('.oxd-button--label-success').click();
    cy.contains('Success').should('exist');
  });

  it('Karyawan Request Cuti (Negatif - Field Kosong)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(user);
    cy.get('[name="password"]').type(pass);
    cy.get('[type="submit"]').click();

    cy.contains('Leave').click();
    cy.contains('Apply').click();
    cy.contains('Apply Leave').should('exist');

    cy.get('[type="submit"]').click();
    cy.contains('Required').should('exist');
  });
});