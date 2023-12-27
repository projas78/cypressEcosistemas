const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
// Eliminar la opción integrationFolder
e2e: {
// Añadir la opción specPattern con el valor "cypress/api/**/*.cy.{js,jsx,ts,tsx}"
specPattern: "cypress/{e2e,api}/**/*.cy.{js,jsx,ts,tsx}",
experimentalRunAllSpecs: true,
baseUrl: "https://demoqa.com/",
setupNodeEvents(on, config) {
allureWriter(on, config);
return config;
},
reporter: "mocha-allure-reporter",
trashAssetsBeforeRuns: true,
video: false,
screenshotOnRunFailure: true,
},
allure: {
allowEmpty: true,
},
});