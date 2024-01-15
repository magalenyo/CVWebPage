import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentComponent } from 'src/app/components/content/content.component';
import { PresentationComponent } from 'src/app/components/presentation/presentation.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    PresentationComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
