import { checkboxText } from '../support/utils'

describe('Test for checkbox and select options', () => {
    beforeEach(() => {
        // Ignorar errores de origen cruzado
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.login();
        cy.visit('/checkbox')
        
    });

    it('Click in checkbox desktop and check the options should be visible ', () => {
        cy.get('.rct-collapse-btn').click();
        cy.get('.rct-icon-expand-open').should('exist')
        cy.get('.rct-icon-uncheck').eq(0).click();
        // cy.get('#result').should('contain.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
        cy.get('#result').should('contain.text', checkboxText);
    });

});