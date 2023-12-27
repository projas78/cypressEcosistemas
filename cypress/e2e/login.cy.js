import { checkboxText } from '../support/utils'

describe('Test for checkbox and select options', () => {
    beforeEach(() => {
    // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });
        cy.login();
        cy.visit('/profile')
    });
    
    it('1. Check book of Axel Rauschmayer', () => {
        cy.url().should('include', '/profile');
        cy.searchText('speak');
        cy.get('.mr-2').should('have.length', 1);
        cy.get('.rt-td').should('contain.text', 'Axel Rauschmayer');
        // cy.get('.rt-td').eq(2).should('have.text', 'Axel Rauschmayer');
        cy.get('#searchBox').clear()
    });

    it('2. Check book of Programming JavaScript Applications', () => {
        cy.searchText('program');
        cy.get('.mr-2').should('have.length', 1);
        cy.get('.rt-td').should('contain.text', 'Programming JavaScript Applications');
        cy.get('#searchBox').clear()
    });

    it('3. Check rows in table', () => {
        cy.get('.mr-2').should('have.length', 2);
    });

    after(() => {
        cy.logOut();
    });
    
});