import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list/photolist.resolve';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-detail/photo-details.component';




const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
  },
  { 
      path: 'home', 
      loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
     
   },

  {
    path: 'user/:userName', 
    component: PhotoListComponent,
    resolve:{
        photos: PhotoListResolve
    },
    data: {
      title: 'Timeline'
    }
  },

  {
     path: 'p/add', 
     component: PhotoFormComponent,
     canActivate: [AuthGuard],
     data: {
       title: 'Photo Upload'
     }
  },
  {
    path: 'p/:photoId', 
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo detail'
    }
 },
 { 
    path: 'not-found',
    component: NotFoundComponent,
    data:{
      title: 'Not-Found'
    }
  },
  { 
    path: '**',
    redirectTo: 'not-found' 
  },
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}