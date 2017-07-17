System.register(["@angular/core", "../services/bar-service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, bar_service_1, ProgressBarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bar_service_1_1) {
                bar_service_1 = bar_service_1_1;
            }
        ],
        execute: function () {
            ProgressBarComponent = (function () {
                function ProgressBarComponent(_endPointService) {
                    this._endPointService = _endPointService;
                    this.endpoint = [];
                    this.bars = {};
                    this.buttons = {};
                    this.limit = 0;
                    this.idIncrement = 0;
                    // this.bars = _endPointService.getEndPoint();
                }
                ProgressBarComponent.prototype.ngOnInit = function () {
                    this.endpoint = this._endPointService.getEndPoint();
                    this.bars = this.endpoint.bars;
                    this.buttons = this.endpoint.buttons;
                    this.limit = this.endpoint.limit;
                    console.log("Progress bar initialized with " + this.bars.length + " bars.");
                };
                ProgressBarComponent.prototype.changeValue = function (e) {
                    console.log(e.currentTarget.id);
                    var id = e.currentTarget.id;
                    var value = e.currentTarget.value;
                    var barId = document.getElementById("progressSelect").value;
                    var progressBar = document.getElementById(barId);
                    progressBar.value += Number(value);
                    if (progressBar.value > 100) {
                        progressBar.className = 'danger';
                    }
                    else {
                        progressBar.className = '';
                    }
                };
                ProgressBarComponent.prototype.hasClass = function (element, cls) {
                    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
                };
                ProgressBarComponent = __decorate([
                    core_1.Component({
                        styleUrls: ['./app/bar/components/bar.css'],
                        templateUrl: './app/bar/components/bar.html',
                        providers: [bar_service_1.EndPointService]
                    }),
                    __metadata("design:paramtypes", [bar_service_1.EndPointService])
                ], ProgressBarComponent);
                return ProgressBarComponent;
            }());
            exports_1("ProgressBarComponent", ProgressBarComponent);
        }
    };
});

//# sourceMappingURL=bar.component.js.map
