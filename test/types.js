describe('types', function() {
    it('should add 2 and 2', function() {
        expect(2 + 2).toBe(4);
    });


    it('should be a function', function() {
        expect(typeof DomBasedRouting).toBe('function');
    });

    var routing = new DomBasedRouting();
    it('should define the public methods', function() {
        expect(typeof routing._execute).toBe('function');
        expect(typeof routing.fire).toBe('function');
        expect(typeof routing.getClasses).toBe('function');
    });

    it('classes property should be array of strings', function() {
        var classes = routing.classes;
        expect(classes instanceof Array).toBe(true);

        classes.forEach(function(element) {
            expect(typeof element).toBe('string');
        });
    });

    it('namespace property should be object', function() {
        var namespace = routing.namespace;
        expect(namespace instanceof Object).toBe(true);
    });

    it('namespace childs (funcname) should be objects', function() {
        var namespace = routing.namespace;

        for (var key in namespace) {
            var funcname = namespace[key];
            expect(funcname instanceof Object).toBe(true);
        }
    });
});