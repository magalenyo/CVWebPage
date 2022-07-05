import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
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

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
