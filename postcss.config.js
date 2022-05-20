const postcssCustomMedia = require('postcss-custom-media');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');
const postcssPxToRem = require('postcss-pxtorem');
const stylelint = require('stylelint');

module.exports = {
  plugins: [
    stylelint(),
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-properties': {
          importFrom: `${__dirname}/src/css/variables.css`,
          preserve: false,
        },
        'nesting-rules': true,
      },
    }),
    postcssPxToRem(),
    postcssCustomMedia({
      importFrom: `${__dirname}/src/css/mediaqueries.css`,
    }),
    postcssReporter({ clearReportedMessages: true }),
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
