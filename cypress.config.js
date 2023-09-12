const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u5x39s',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://www.demoblaze.com"
  }
});
