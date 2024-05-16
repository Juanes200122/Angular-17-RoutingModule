import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: //##,
            },        
            {
                path: 'homepage',
                redirectTo: '',
            },
            {
                path: 'weapons',
                component: //##,
            },
            {
                path: 'maps',
                component: //##,
            },
            {
                path: 'agents',
                component: //##,
            },
        ], 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }
