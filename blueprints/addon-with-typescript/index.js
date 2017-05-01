/* eslint-env node */
'use strict';

const pkg = require('../../package.json');

module.exports = {
  description: 'Bootstraps your app for use with cs-ui',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.addAddonToProject('ember-cli-typescript', pkg.dependencies['ember-cli-typescript']);
  },
};
