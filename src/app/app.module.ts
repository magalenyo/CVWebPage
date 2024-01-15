import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoundeadComponent } from './components/projects/boundead/boundead.component';
import { BulletHeavenUnrealEngineComponent } from './components/projects/bullet-heaven-unreal-engine/bullet-heaven-unreal-engine.component';
import { CyberComponent } from './components/projects/motion-graphics/cyber/cyber.component';
import { MotionGraphicsComponent } from './components/projects/motion-graphics/motion-graphics.component';
import { RetroComponent } from './components/projects/motion-graphics/retro/retro.component';
import { NodeExpressApiComponent } from './components/projects/node-express-api/node-express-api.component';
import { OtherUnrealEngineProjectsComponent } from './components/projects/other-unreal-engine-projects/other-unreal-engine-projects.component';
import { ProjectsHomeComponent } from './components/projects/projects-home/projects-home.component';
import { RealDisunityComponent } from './components/projects/real-disunity/real-disunity.component';
import { ReturnalUnrealEngineComponent } from './components/projects/returnal-unreal-engine/returnal-unreal-engine.component';
import { ShutdownComponent } from './components/projects/shutdown/shutdown.component';
import { TesseractComponent } from './components/projects/tesseract/tesseract.component';
import { BubbleComponent } from './components/projects/unreal-engine-materials/bubble/bubble.component';
import { DragonComponent } from './components/projects/unreal-engine-materials/dragon/dragon.component';
import { GlassComponent } from './components/projects/unreal-engine-materials/glass/glass.component';
import { GlitterComponent } from './components/projects/unreal-engine-materials/glitter/glitter.component';
import { MagicComponent } from './components/projects/unreal-engine-materials/magic/magic.component';
import { MorphingComponent } from './components/projects/unreal-engine-materials/morphing/morphing.component';
import { ScreenComponent } from './components/projects/unreal-engine-materials/screen/screen.component';
import { SlimeComponent } from './components/projects/unreal-engine-materials/slime/slime.component';
import { SunComponent } from './components/projects/unreal-engine-materials/sun/sun.component';
import { UnrealEngineMaterialsComponent } from './components/projects/unreal-engine-materials/unreal-engine-materials.component';
import { VolumetricIceComponent } from './components/projects/unreal-engine-materials/volumetric-ice/volumetric-ice.component';
import { SharedModule } from './components/shared/shared.module';
import { StepperEducationComponent } from './components/steppers/stepper-education/stepper-education.component';
import { StepperExperienceComponent } from './components/steppers/stepper-experience/stepper-experience.component';
import { ProjectsModule } from './modules/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BoundeadComponent,
    RealDisunityComponent,
    TesseractComponent,
    ShutdownComponent,
    UnrealEngineMaterialsComponent,
    VolumetricIceComponent,
    NodeExpressApiComponent,
    BubbleComponent,
    MagicComponent,
    SlimeComponent,
    GlassComponent,
    SunComponent,
    ScreenComponent,
    GlitterComponent,
    DragonComponent,
    MotionGraphicsComponent,
    CyberComponent,
    RetroComponent,
    MorphingComponent,
    OtherUnrealEngineProjectsComponent,
    ReturnalUnrealEngineComponent,
    BulletHeavenUnrealEngineComponent,
    ProjectsHomeComponent,
    StepperEducationComponent,
    StepperExperienceComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedModule,
    RouterModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
