import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoundeadComponent } from "src/app/components/projects/boundead/boundead.component";
import { RealDisunityComponent } from "src/app/components/projects/real-disunity/real-disunity.component";
import { ShutdownComponent } from "src/app/components/projects/shutdown/shutdown.component";
import { TesseractComponent } from "src/app/components/projects/tesseract/tesseract.component";
import { UnrealEngineMaterialsComponent } from "src/app/components/projects/unreal-engine-materials/unreal-engine-materials.component";
import { ProjectUrls } from "src/app/constants/app.constants";
import { NotFoundComponent } from "../not-found/not-found.component";
import { ProjectsComponent } from "./projects.component";

export const routes: Routes = [
    {
        path: '',
        // component: ProjectsComponent
        component: NotFoundComponent
    },
    { 
        path: ProjectUrls.BOUNDEAD,
        component: BoundeadComponent
    },
    { 
        path: ProjectUrls.REAL_DISUNITY,
        component: RealDisunityComponent
    },
    { 
        path: ProjectUrls.TESSERACT,
        component: TesseractComponent
    },
    { 
        path: ProjectUrls.SHUTDOWN,
        component: ShutdownComponent
    },
    { 
        path: ProjectUrls.UNREAL_ENGINE_MATERIALS,
        component: UnrealEngineMaterialsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule {}