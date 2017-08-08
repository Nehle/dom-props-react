var html = require("./html");
var aria = require("./aria");
var data = require("./data");
var svg = require("./svg");

const DEFAULT_OPTS = {
  html: true,
  svg: true,
  aria: true,
  svg: true
};

function filterDomProps(props, filterOpts) {
  var opts = Object.assign({}, DEFAULT_OPTS, filterOpts);
  return (
    Object.keys(props).reduce(function(filtered, currentProp) {
      if (
        (opts.html && html.isValidAttribute(currentProp)) ||
        (opts.svg && svg.isValidAttribute(currentProp)) ||
        (opts.aria && aria.isValidAttribute(currentProp)) ||
        (opts.data && data.isValidAttribute(currentProp))
      ) {
        filtered[currentProp] = props[currentProp];
      }
      return filtered;
    }, {}) || {}
  );
}

module.exports = {
  filterDomProps: filterDomProps
};
