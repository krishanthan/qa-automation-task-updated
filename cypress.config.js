const cypress = require("cypress");
const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),


  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;

}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/Web/Features/*.feature",
    stepDefinitions: "cypress/support/step_definitions/*.js",
    baseUrl: "http://localhost:3000",
    baseAPIURL:"http://localhost:3001"
   

  },

 





});
