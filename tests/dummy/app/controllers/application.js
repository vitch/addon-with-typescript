import Ember from 'ember';

import { IMPORT_LOCATION as fileInAddonDir } from 'addon-with-typescript/example/file-in-addon-dir/hello';
import { IMPORT_LOCATION as fileInAppDir } from 'dummy/example/file-in-app-dir/hello';

export default Ember.Controller.extend({
  fileInAddonDir,
  fileInAppDir,
});
