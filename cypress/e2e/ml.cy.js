import { checkboxText } from '../support/utils'

describe.skip('Test for checkbox and select options', () => {
    beforeEach(() => {
    // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        
        cy.visit('www.mercadolibre.com.ar')
    });
    
    it('1. Check book of Axel Rauschmayer', () => {
        cy.get('.nav-menu-categories-link').click()
    });

    
    
});

