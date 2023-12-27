describe('Descargar una imagen de demoqa.com/upload-download', () => {
    beforeEach(() => {
    // Ignorar errores de origen cruzado
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
    });
    cy.login();
    cy.visit('/upload-download');
    
    });
    
    it('Should be download file', () => {
        // Hacer clic en el botón de descargar
        cy.get('#downloadButton').click();
        // Leer el archivo descargado
        cy.readFile('cypress/downloads/sampleFile.jpeg').then((file) => {
        // Verificar que el archivo exista
        cy.wrap(file).should('exist');
        // Verificar que el archivo tenga un tamaño mayor que cero
        cy.wrap(file).should('have.length.greaterThan', 0);
        });
    });    
});