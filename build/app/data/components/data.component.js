System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, DataComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            DataComponent = (function () {
                function DataComponent() {
                }
                DataComponent.prototype.ngOnInit = function () {
                    this.endpoint = JSON.stringify({
                        "buttons": [
                            10,
                            38,
                            -13,
                            -18
                        ],
                        "bars": [
                            62,
                            45,
                            62
                        ],
                        "limit": 230
                    });
                };
                DataComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/data/components/data.html'
                    })
                ], DataComponent);
                return DataComponent;
            }());
            exports_1("DataComponent", DataComponent);
        }
    };
});

//# sourceMappingURL=data.component.js.map
