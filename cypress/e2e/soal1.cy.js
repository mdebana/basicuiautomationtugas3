describe('Tambah Karyawan', () => {
    const userAdmin = 'Admin';
    const passAdmin = 'admin123';
    const firstN = 'Mochamad';
    const midN = 'Deban'
    const lastN = 'Azaria';
    const user = 'test1234';
    const pass = 'pass1234';
  
    it('Tambah Karyawan (Positif)', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type(userAdmin);
      cy.get('[name="password"]').type(passAdmin);
      cy.get('[type="submit"]').click();
  
      cy.contains('PIM').click();
      cy.contains('Add Employee').click();
  
      cy.get('[name="firstName"]').type(firstN);
      cy.get('[name="middleName"]').type(midN);
      cy.get('[name="lastName"]').type(lastN);
  
      cy.get('.oxd-switch-input').click();
      cy.get('.oxd-form-row').eq(2).find('input').eq(0).type(user);
      cy.get('input[type="password"]').eq(0).type(pass);
      cy.get('input[type="password"]').eq(1).type(pass);
  
      cy.get('[type="submit"]').click();
  
      cy.contains('Personal Details', { timeout: 10000 }).should('be.visible');
      cy.contains(`${firstN} ${lastN}`).should('be.visible');
    });
  
    it('Tambah Karyawan (Negatif - Field Kosong)', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type(userAdmin);
      cy.get('[name="password"]').type(passAdmin);
      cy.get('[type="submit"]').click();
  
      cy.contains('PIM').click();
      cy.contains('Add Employee').click();
  
      cy.get('[type="submit"]').click();
      cy.contains('Required').should('be.visible');
    });
  });