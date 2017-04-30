const ipRegex = require('ip-regex');

// based on https://github.com/kevva/url-regex
module.exports = function () {
  // const regex = '^\/$|(^(?=\/)|^\.|^\.\.)(\/(?=[^/\0])[^/\0]+)*\/?$';

  const regex = '(?:\\s|^)([\.]{0,2}\/[^\\s]*)';
  return new RegExp(regex, 'ig');
};
