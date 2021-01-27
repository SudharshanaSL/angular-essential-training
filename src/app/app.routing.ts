import { Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
    // order of routes is important, first match is always preferred
    {
        // router handles building the url with leading/forward slashes
        path: 'add',
        component: MediaItemFormComponent
        // can use relative or absolute url building
    }, {
        // router will capture the url segment and put it in route params
        path: ':medium',
        component: MediaItemListComponent
    }, {
        // default routing path
        path: '',
        redirectTo: 'all',
        // this will tell the router that path property 
        // we are providing represents the full url and not just a part of it 
        pathMatch: 'full'
    }
];

