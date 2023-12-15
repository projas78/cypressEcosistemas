describe('Check form field', () => {
    const userName = 'Ecosistemas';
    const userEmail = 'mail@ecosistemas.com.ar';
    const currentAddress = 'Complete Current Address';
    const permananetAddress = 'Complete Permanent Address'


    // Mueve la lógica a before
    beforeEach(() => {
        // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.login();
        cy.visit('/')
        
    });

    it('1. Validate form names', () => {
        
        cy.get('#userName-label').should('have.text', 'Full Name');
        cy.get('#userEmail-label').should('have.text', 'Email');
        cy.get('#currentAddress-label').should('contain.text', 'Current A');
        cy.get('#permanentAddress-label').should('have.text', 'Permanent Address');
        // Check length
        cy.get('.form-label').should(($labels) => {
            // Verifica la longitud
            expect($labels, 'Incorrect number of elements').to.have.length(4);
          });
    });

    it('2. Complete Form', () => {
        cy.completeForm({ userName, userEmail, currentAddress, permananetAddress });
      });
});