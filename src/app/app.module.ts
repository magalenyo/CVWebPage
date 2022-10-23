import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { BoundeadComponent } from './components/projects/boundead/boundead.component';
import { RealDisunityComponent } from './components/projects/real-disunity/real-disunity.component';
import { TesseractComponent } from './components/projects/tesseract/tesseract.component';
import { ShutdownComponent } from './components/projects/shutdown/shutdown.component';
import { UnrealEngineMaterialsComponent } from './components/projects/unreal-engine-materials/unreal-engine-materials.component';
import { RouterModule } from '@angular/router';
import { ProjectsModule } from './modules/projects/projects.module';
import { SharedModule } from './components/shared/shared.module';
import { VolumetricIceComponent } from './components/projects/unreal-engine-materials/volumetric-ice/volumetric-ice.component';
import { NodeExpressApiComponent } from './components/projects/node-express-api/node-express-api.component';
import { BubbleComponent } from './components/projects/unreal-engine-materials/bubble/bubble.component';
import { MagicComponent } from './components/projects/unreal-engine-materials/magic/magic.component';
import { SlimeComponent } from './components/projects/unreal-engine-materials/slime/slime.component';
import { GlassComponent } from './components/projects/unreal-engine-materials/glass/glass.component';
import { SunComponent } from './components/projects/unreal-engine-materials/sun/sun.component';
import { ScreenComponent } from './components/projects/unreal-engine-materials/screen/screen.component';
import { GlitterComponent } from './components/projects/unreal-engine-materials/glitter/glitter.component';
import { DragonComponent } from './components/projects/unreal-engine-materials/dragon/dragon.component';
import { MotionGraphicsComponent } from './components/projects/motion-graphics/motion-graphics.component';
import { CyberComponent } from './components/projects/motion-graphics/cyber/cyber.component';
import { RetroComponent } from './components/projects/motion-graphics/retro/retro.component';

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
    RetroComponent
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
