import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "src/app/components/about-me/about-me.component";
import { AppUrls } from "src/app/constants/app.constants";
import { HomeComponent } from "./home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: AppUrls.ABOUT,
        component: AboutMeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}