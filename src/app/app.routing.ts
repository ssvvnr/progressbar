import {Routes, RouterModule} from "@angular/router";
import {ProgressBarComponent} from "./bar/components/bar.component";
import {DataComponent} from "./data/components/data.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'progressbar', pathMatch: 'full'},
    {path: 'progressbar', component: ProgressBarComponent, data: {title: 'ProgressBar'}},
    {path: 'data', component: DataComponent, data: {title: 'Data'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
