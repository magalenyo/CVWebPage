import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { CarouselBoundeadComponent } from 'src/app/components/carousel-boundead/carousel-boundead.component';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    CarouselBoundeadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CarouselBoundeadComponent
  ]
})
export class ProjectsModule { }
