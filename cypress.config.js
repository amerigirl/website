const { defineConfig } = require("cypress");
const fs = require("fs-extra");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        deleteFolder(downloads) {
          return fs.removeSync(downloads);
        },
      });
    },
  },
});
