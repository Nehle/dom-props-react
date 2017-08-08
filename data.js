function isValidAttribute(propName) {
  return isString(propName) && propName.indexOf("data-") === 0;
}

module.exports = {
  isValidAttribute: isValidAttribute
};
