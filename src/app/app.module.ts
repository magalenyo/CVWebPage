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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BoundeadComponent,
    RealDisunityComponent,
    TesseractComponent,
    ShutdownComponent,
    UnrealEngineMaterialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
