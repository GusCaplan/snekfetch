global.window = {
  fetch: require('node-fetch'),
  FormData: require('form-data'),
};

require('./base')('browser');
