(function (window, document) {
    var DomBasedRouting = function(namespace) {
        this.namespace = namespace || {};
        this.classes = this.getClasses();
    };

    DomBasedRouting.prototype.getClasses = function() {
        return document.body.className.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        }).split(/\s+/);
    };

    DomBasedRouting.prototype._execute = function(func, funcname, args) {
        var namespace = this.namespace;

        funcname = (funcname === undefined) ? 'init' : funcname;
        if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
            namespace[func][funcname](args);
        }
    };

    DomBasedRouting.prototype.fire = function(name) {
        var classes = this.classes;
        this._execute('common', name);
        for (var i = 0; i < classes.length; i++) {
            this._execute(classes[i], name);
        }
    };

    window.DomBasedRouting = DomBasedRouting;
})(window, document);