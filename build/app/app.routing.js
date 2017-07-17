System.register(["@angular/router", "./bar/components/bar.component", "./data/components/data.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, bar_component_1, data_component_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bar_component_1_1) {
                bar_component_1 = bar_component_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', redirectTo: 'progressbar', pathMatch: 'full' },
                { path: 'progressbar', component: bar_component_1.ProgressBarComponent, data: { title: 'ProgressBar' } },
                { path: 'data', component: data_component_1.DataComponent, data: { title: 'Data' } }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});

//# sourceMappingURL=app.routing.js.map
