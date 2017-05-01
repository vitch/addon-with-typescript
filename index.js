/* eslint-env node */
'use strict';

const TsPreprocessor = require('ember-cli-typescript/lib/typescript-preprocessor');

module.exports = {
  name: 'addon-with-typescript',

  setupPreprocessorRegistry: function(type, registry) {
    try {
      var plugin = new TsPreprocessor({includeExtensions: ['.ts','.js']});
      registry.add('js', plugin);
    } catch ( ex ) {
      console.log( "Missing or invalid tsconfig.json, please fix or run `ember generate ember-cli-typescript`." );
      console.log( '  ' + ex.toString());
    }
  }

};
