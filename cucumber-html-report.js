const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./path-to-your-json-output/",
  reportPath: "./path-where-the-report-needs-to-be/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "16.04",
    },
  }
});
