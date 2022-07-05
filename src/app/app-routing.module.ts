import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUrls } from './constants/app.constants';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: AppUrls.HOME, 
    pathMatch: 'full' 
  },
  { 
    path: AppUrls.HOME,
    loadChildren: () => import('./modules/home/home.module').then( (m) => m.HomeModule)
  },
  { 
    path: AppUrls.PROJECTS,
    loadChildren: () => import('./modules/projects/projects-routing.module').then( (m) => m.ProjectsRoutingModule)
  },
  { 
    path: AppUrls.NOT_FOUND, 
    loadChildren: () => import('./modules/not-found/not-found.module').then( (m) => m.NotFoundModule),
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
