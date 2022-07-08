import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardviewComponent } from "./cardview/cardview.component";

@NgModule({
    imports: [ CommonModule],
    declarations: [
        CardviewComponent
    ],
    exports: [
        CardviewComponent,
        CommonModule
    ],
    providers: [],
    bootstrap: []
  })
export class SharedModule { }