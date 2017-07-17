System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bar, Buttons;
    return {
        setters: [],
        execute: function () {
            Bar = (function () {
                function Bar(buttons) {
                    this.buttons = buttons;
                }
                return Bar;
            }());
            exports_1("Bar", Bar);
            Buttons = (function () {
                function Buttons(buttons) {
                    this.buttons = buttons;
                }
                return Buttons;
            }());
            exports_1("Buttons", Buttons);
        }
    };
});

//# sourceMappingURL=bar.js.map
