import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlaceItemComponent } from './components/place-item/place-item.component';
import { CarouselPlacesComponent } from './components/carousel-places/carousel-places.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceItemComponent,
    CarouselPlacesComponent,
    ProductsCarouselComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    ContentComponent
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
