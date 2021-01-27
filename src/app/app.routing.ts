import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  {
    path: 'add',
    // to lazy load another module
    // make sure to handle the routing in feature module accordingly
    loadChildren: () => import('./new-item/new-item.module').then((m) => m.NewItemModule)
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);

