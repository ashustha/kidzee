import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';


export const router: Routes = [

    // { path: '', component: LoginComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});