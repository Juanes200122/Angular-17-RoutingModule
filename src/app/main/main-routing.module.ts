import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { BlogComponent } from '../blog/blog.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomepageComponent,
            },        
            {
                path: 'home_component',
                redirectTo: '',
            },
            {
                path: 'blog_component',
                component: BlogComponent,
            },
            {
                path: 'aboutcomponent',
                component: AboutComponent,
            },
            {
                path: 'contact_component',
                component: ContactComponent,
            },
        ], 
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }
