const report = require("multiple-cucumber-html-reporter");

const options = {
    theme: 'bootstrap',
    jsonDir: 'jsonlogs',
    reportPath: './reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false
  };
  
  reporter.generate(options);
