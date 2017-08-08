var attributes = [
  "aria-current",
  "aria-details",
  "aria-disabled",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-roledescription",
  "aria-autocomplete",
  "aria-checked",
  "aria-expanded",
  "aria-haspopup",
  "aria-level",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-placeholder",
  "aria-pressed",
  "aria-readonly",
  "aria-required",
  "aria-selected",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "aria-atomic",
  "aria-busy",
  "aria-live",
  "aria-relevant",
  "aria-dropeffect",
  "aria-grabbed",
  "aria-activedescendant",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-describedby",
  "aria-errormessage",
  "aria-flowto",
  "aria-labelledby",
  "aria-owns",
  "aria-posinset",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-setsize"
];

function isValidAttribute(propName) {
  return attributes.indexOf(propName) > -1;
}

module.exports = {
  attributes: attributes,
  isValidAttribute: isValidAttribute
};
