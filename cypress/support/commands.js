// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
// import '@mmisty/cypress-allure-adapter/support';

Cypress.Commands.add('login', ()  => {

    cy.session('my-session', () => {
        cy.visit('https://demoqa.com/text-box');
    }, 
    {
        cacheAcrossSpecs: true
    });
});

Cypress.Commands.add('completeForm', ({ userName, userEmail, currentAddress, permananetAddress }) => {
    cy.get('#userName').type(userName);
    cy.get('#userEmail').type(userEmail);
    cy.xpath('//*[@id="currentAddress"]').type(currentAddress);
    cy.get('.form-control').eq(3).type(permananetAddress);
    cy.get('.btn-primary').contains('Submit').should('be.enabled').click();
  
    cy.get('.border.col-md-12.col-sm-12').should('exist').within(() => {
      cy.get('#name').should('have.text', `Name:${userName}`);
      cy.get('#email').should('have.text', `Email:${userEmail}`);
      cy.get('#currentAddress').should('have.text', `Current Address :${currentAddress} `);
      cy.get('#permanentAddress').should('have.text', `Permananet Address :${permananetAddress}`);
    });
  });

Cypress.Commands.add('searchText', (searchText) => {
    cy.get('#searchBox').type(searchText);
});

Cypress.Commands.add('completeForminTable', (userData) => {
    cy.get('#addNewRecordButton').should('have.text', 'Add').should('be.visible').click();
    cy.get('#firstName-label').should('have.text', 'First Name');
    cy.get('#lastName-label').should('have.text', 'Last Name');
    cy.get('#userEmail-label').should('have.text', 'Email');
    cy.get('#age-label').should('have.text', 'Age');
    cy.get('#salary-label').should('have.text', 'Salary');
    
    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);
    cy.get('#userEmail').type(userData.email);
    cy.get('#age').type(userData.age);
    cy.get('#salary').type(userData.salary);
    cy.get('#department').type(userData.department);
    cy.get('#submit').click();
});


Cypress.Commands.add('uploadFile', (filePath) => {
    cy.get('#uploadFile').attachFile(filePath, { mimeType: 'application/octet-stream' });
});

Cypress.Commands.add('interceptPostsRequest', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts').as('getPosts');
  });