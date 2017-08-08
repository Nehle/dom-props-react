# dom-props-react

A simple library listing all dom properties React accepts, as well as basic validator functions for them.

## Usage

### filterDomProps

`var filterDomProps = require("dom-props-react").filterDomProps`

This function takes a props object and filter out all non-dom props for you to pass on to dom elements. It takes and optional  `filterOpts` object that can turn on or off `html`, `aria`, `data` and `svg` property filtering. By default all are enabled

Example:

```js
var myProps = {
  invalidProp: "value",
  "aria-hidden": true,
  "data-x": "x",
  fontFamily: "Arial",
  className: "myClass"
}

var filtered = filterDomProps(myProps); //{"aria-hidden": true, "data-x": "x", fontFamily: "Arial", className: "myClass"}

var filteredAria = filterDomProps(myProps, {html: false, svg: false, data: false}) //{"aria-hidden": true}
```

### isValidAttribute
If you don't want to import all the dom properties (it's basically just three long arrays with all props), you can choose to import just the one you want by doing `require` on `dom-props-react/html`, `dom-props-react/svg`, `dom-props-react/aria` or `dom-props-react/data`. All of these export a function called `isValidAttribute()` that simply takes a string name and returns whether it's valid for that domain. Additionally, all but `dom-props-react/data` export an `attributes` array that simply lists all valid attributes for their domain
