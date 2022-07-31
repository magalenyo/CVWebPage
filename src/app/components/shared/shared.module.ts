import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { CardviewComponent } from "./cardview/cardview.component";

@NgModule({
    imports: [ 
        CommonModule
    ],
    declarations: [
        CardviewComponent
    ],
    exports: [
        CardviewComponent,
        CommonModule,
        MdbCarouselModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: []
  })
export class SharedModule { }