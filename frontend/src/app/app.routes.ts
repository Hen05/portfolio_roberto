import { Routes } from '@angular/router';
import { Portfolio } from './features/portfolio/portfolio';

export const routes: Routes = [
    {
        path: "portfolio",
        component: Portfolio
    },
    {
        path: "**",
        redirectTo: "portfolio"
    }
];
