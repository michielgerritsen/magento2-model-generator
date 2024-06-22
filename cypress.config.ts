import { defineConfig } from "cypress";
import fs from 'fs';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // Disable videos for successful tests
      on('after:spec', (spec, results) => {
        // If a retry failed, save the video, otherwise delete it to save time by not compressing it.
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.find(test => {
            return test.attempts.find(attempt => {
              return attempt.state === 'failed'
            })
          });

          // Delete the video if the spec passed on all attempts
          if (!failures) {
            fs.existsSync(results.video) && fs.unlinkSync(results.video)
          }
        }
      })
    },
  },
});
