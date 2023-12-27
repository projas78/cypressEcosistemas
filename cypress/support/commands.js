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

// Importar el comando de cy.session
// import './session'

Cypress.Commands.add('login', (user = 'test', password= 'Test1234#', path = '')   => {

    cy.session([user, password, path], () => {
    cy.visit('https://demoqa.com/login');
    // Aquí pones el código para llenar los campos de login con el user y el password que pasaste como argumentos
    cy.get('#userName').type(user);
    cy.get('#password').type(password);
    cy.get('#login').click();
    // Aquí pones la función de validación que comprueba que la URL actual contenga /profile
    cy.url().should('include', '/profile')
    // Aquí visitas la página que pasaste como argumento, si hay alguna
    if (path) {
    cy.visit(path)
    }
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

Cypress.Commands.add('logOut',() => {
    cy.get('#submit').should('contain.text', 'Log out').click();
});