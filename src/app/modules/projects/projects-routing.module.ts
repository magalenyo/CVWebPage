import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoundeadComponent } from "src/app/components/projects/boundead/boundead.component";
import { CyberComponent } from "src/app/components/projects/motion-graphics/cyber/cyber.component";
import { MotionGraphicsComponent } from "src/app/components/projects/motion-graphics/motion-graphics.component";
import { RetroComponent } from "src/app/components/projects/motion-graphics/retro/retro.component";
import { NodeExpressApiComponent } from "src/app/components/projects/node-express-api/node-express-api.component";
import { RealDisunityComponent } from "src/app/components/projects/real-disunity/real-disunity.component";
import { ShutdownComponent } from "src/app/components/projects/shutdown/shutdown.component";
import { TesseractComponent } from "src/app/components/projects/tesseract/tesseract.component";
import { BubbleComponent } from "src/app/components/projects/unreal-engine-materials/bubble/bubble.component";
import { DragonComponent } from "src/app/components/projects/unreal-engine-materials/dragon/dragon.component";
import { GlassComponent } from "src/app/components/projects/unreal-engine-materials/glass/glass.component";
import { GlitterComponent } from "src/app/components/projects/unreal-engine-materials/glitter/glitter.component";
import { MagicComponent } from "src/app/components/projects/unreal-engine-materials/magic/magic.component";
import { MorphingComponent } from "src/app/components/projects/unreal-engine-materials/morphing/morphing.component";
import { ScreenComponent } from "src/app/components/projects/unreal-engine-materials/screen/screen.component";
import { SlimeComponent } from "src/app/components/projects/unreal-engine-materials/slime/slime.component";
import { SunComponent } from "src/app/components/projects/unreal-engine-materials/sun/sun.component";
import { UnrealEngineMaterialsComponent } from "src/app/components/projects/unreal-engine-materials/unreal-engine-materials.component";
import { VolumetricIceComponent } from "src/app/components/projects/unreal-engine-materials/volumetric-ice/volumetric-ice.component";
import { MotionGraphicsUrls, ProjectUrls, UEMaterialsUrls } from "src/app/constants/app.constants";
import { ProjectsComponent } from "./projects.component";

export const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        children: [
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
                component: UnrealEngineMaterialsComponent,
                children: [
                    { 
                        path: UEMaterialsUrls.DRAGON,
                        component: DragonComponent
                    },
                    { 
                        path: UEMaterialsUrls.MORPHING,
                        component: MorphingComponent
                    },
                    { 
                        path: UEMaterialsUrls.VOLUMETRIC_ICE,
                        component: VolumetricIceComponent
                    },
                    { 
                        path: UEMaterialsUrls.GLITTER,
                        component: GlitterComponent
                    },
                    { 
                        path: UEMaterialsUrls.MAGIC,
                        component: MagicComponent
                    },
                    { 
                        path: UEMaterialsUrls.SLIME,
                        component: SlimeComponent
                    },
                    { 
                        path: UEMaterialsUrls.GLASS,
                        component: GlassComponent
                    },
                    { 
                        path: UEMaterialsUrls.BUBBLE,
                        component: BubbleComponent
                    },
                    { 
                        path: UEMaterialsUrls.SUN,
                        component: SunComponent
                    },
                    { 
                        path: UEMaterialsUrls.SCREEN,
                        component: ScreenComponent
                    },
                ]
            },
            { 
                path: ProjectUrls.MOTION_GRAPHICS,
                component: MotionGraphicsComponent,
                children: [
                    { 
                        path: MotionGraphicsUrls.CYBER,
                        component: CyberComponent
                    },
                    { 
                        path: MotionGraphicsUrls.RETRO,
                        component: RetroComponent
                    },
                ]
            },
            { 
                path: ProjectUrls.NODE_EXPRESS_API,
                component: NodeExpressApiComponent
            },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectsRoutingModule {}