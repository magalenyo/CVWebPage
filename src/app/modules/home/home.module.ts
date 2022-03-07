import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { PresentationComponent } from 'src/app/components/presentation/presentation.component';
import { ContentComponent } from 'src/app/components/content/content.component';
import { CarouselBoundeadComponent } from 'src/app/components/carousel-boundead/carousel-boundead.component';
import { StepperEducationComponent } from 'src/app/components/steppers/stepper-education/stepper-education.component';
import { StepperExperienceComponent } from 'src/app/components/steppers/stepper-experience/stepper-experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    ContentComponent,
    CarouselBoundeadComponent,
    StepperEducationComponent,
    StepperExperienceComponent
  ],
  imports: [
    CommonModule,
    // NgbModule,
    FontAwesomeModule,
    MdbCarouselModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
