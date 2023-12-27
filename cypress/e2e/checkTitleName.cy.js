describe('Test con baseUrl personalizado y precondiciones', () => {
    beforeEach(() => {
        // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.login();
        cy.visit('/text-box/')
        
    });

    it('Check title name, url and img exist ', () => {
        
        //Validar el nombre de la pagina
        cy.get('.main-header').should('have.text', 'Text Box');
        //Validar la url
        cy.url().should('include', 'https://demoqa.com/text-box/');
        //Validar que la imagen exista.
        cy.get('img[src="/images/Toolsqa.jpg"]').should('exist');
    });

});