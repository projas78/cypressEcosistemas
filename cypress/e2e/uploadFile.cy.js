describe('Subir archivo en demoqa.com/upload-download', () => {
    beforeEach(() => {
        // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.login();
        cy.visit('https://demoqa.com/upload-download');
        
    });
    
    it('Should be upload file', () => {
        const filePath = 'TestCypress.txt';
        cy.uploadFile(filePath);        
        cy.get('#uploadedFilePath').should('have.text', 'C:\\fakepath\\TestCypress.txt');
    });
  });