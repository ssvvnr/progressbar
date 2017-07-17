System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bar;
    return {
        setters: [],
        execute: function () {
            Bar = (function () {
                function Bar(name, done) {
                    this.name = name;
                    this.done = done;
                }
                return Bar;
            }());
            exports_1("Bar", Bar);
        }
    };
});

//# sourceMappingURL=bar.js.map
