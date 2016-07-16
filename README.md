# DomBasedRouting
Based on http://goo.gl/EUTi53 by Paul Irish

Only fires on body classes that match. If a body class contains a dash it's converted to camelCase.

## Example
```javascript
// Use this variable to set up the common and page specific functions.
var routes = {
    // All pages
    common: {
        init: function() {
            // Fired on all pages
        }
    },
    // Home page
    home: {
        init: function() {
            // Fired when body has class home
        }
    }
};

// Create DomBasedRouting instance
var routing = new DomBasedRouting(routes);
// Fire init functions
routing.fire('init');
```