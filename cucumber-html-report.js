const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/cucumber-json/",
    reportPath: "cypress/reports/html-multi-report/",
    ignoreBadJsonFile: true,
    displayReportTime: true,
    displayDuration: true,
    metadata: {
        device: "Local Test Machine",
        platform: {name: "Windows", version: "11" },
    },
});