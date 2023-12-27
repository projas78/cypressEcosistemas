import { checkboxText } from '../support/utils'

describe('Test for checkbox and select options', () => {
    const userData = {
        firstName: 'Ecosistemas',
        lastName: 'Ecosistemas',
        email: 'email@ecosistemas.com.ar',
        age: '33',
        salary: '3000',
        department: 'automation',
      };
    beforeEach(() => {
        // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.login();
        cy.visit('/webtables')
        
    });

    it('1. Search text with not exist in the table', () => {
        cy.searchText('test Not Found');
        cy.get('.rt-noData').should('have.text', 'No rows found');
        cy.get('#searchBox').clear();
    });

    it('2. Complete form', () => {
        cy.completeForminTable(userData);
        cy.searchText('Ecosistemas');
        cy.get('.rt-td').eq(0).should('have.text', 'Ecosistemas');
        cy.get('.rt-tr-group').should('have.length', 10);
    });

    it('3. check with form is empty', () => {
        cy.get('#addNewRecordButton').should('have.text', 'Add').should('be.visible').click();
        cy.get('#submit').click();
        cy.get('#firstName').should('have.attr', 'autocomplete', 'off');
    });

});