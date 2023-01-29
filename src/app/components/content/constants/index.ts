import { MotionGraphicsUrls, ProjectUrls, UEMaterialsUrls } from "src/app/constants/app.constants"
import { CardviewModel } from "../../shared/cardview/model/cardview.model"

/// PROJECTS

const cardviewBoundeadModel : CardviewModel = {
    title: "Boundead",
    description: "Action/Platform game made in Unity for Bachelor's degree final project",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.BOUNDEAD
}

const cardviewRealDisunityModel : CardviewModel = {
    title: "Real Disunity Engine",
    description: "Basic C++ OpenGL Game Engine from scratch",
    backgroundImage: "assets/images/engines/RealDisunityEngine/RealDisunity1.png",
    url: "/projects/" + ProjectUrls.REAL_DISUNITY
}

const cardviewTesseractModel : CardviewModel = {
    title: "Tesseract Engine",
    description: "Advanced C++ OpenGL Game Engine from scratch",
    backgroundImage: "assets/images/engines/TesseractEngine/tesseract.png",
    url: "/projects/" + ProjectUrls.TESSERACT
}

const cardviewShutdownModel : CardviewModel = {
    title: "Shutdown Videogame",
    description: "Top down shooter video game made with our own engine",
    backgroundImage: "assets/videos/cards/shutdown-trimmed-2.mp4",
    url: "/projects/" + ProjectUrls.SHUTDOWN,
    material: true,
    video: true
}

const cardviewOtherUnrealEngineProjectsModel : CardviewModel = {
    title: "Unreal Engine 5 Projects",
    description: "UE5 projects made in C++",
    backgroundImage: "assets/videos/cards/simple-shooter-trimmed.mp4",
    url: "/projects/" + ProjectUrls.OTHER_UNREAL_ENGINE_PROJECTS,
    material: true,
    video: true
}

const cardviewNodeExpressApiModel: CardviewModel = {
    title: "Node Express API Rest",
    description: "Node+Express API Rest connected to MongoDB",
    backgroundImage: "assets/images/node/node.png",
    url: "/projects/" + ProjectUrls.NODE_EXPRESS_API
}

// UNREAL ENGINE

const assetsMaterials = "assets/images/ue-materials/";

const cardviewUEDragonModel: CardviewModel = {
    title: "Dragon",
    description: "",
    backgroundImage: assetsMaterials + "dragon/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.DRAGON,
    material: true,
    video: true
}

const cardviewUEMorphing: CardviewModel = {
    title: "Morphing",
    description: "",
    backgroundImage: assetsMaterials + "morphing/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.MORPHING,
    material: true,
    video: true
}

const cardviewUEVolumetricIceModel: CardviewModel = {
    title: "Volumetric Ice",
    description: "",
    backgroundImage: assetsMaterials + "volumetric-ice/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.VOLUMETRIC_ICE,
    material: true,
    video: true
}

const cardviewUEGlitterBallModel: CardviewModel = {
    title: "Glitter Ball",
    description: "",
    backgroundImage: assetsMaterials + "glitter/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.GLITTER,
    material: true,
    video: true
}

const cardviewUEMagicSphereModel: CardviewModel = {
    title: "Magic Sphere",
    description: "",
    backgroundImage: assetsMaterials + "magic/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.MAGIC,
    material: true,
    video: true
}

const cardviewUESlimeModel: CardviewModel = {
    title: "Slime",
    description: "",
    backgroundImage: assetsMaterials + "slime/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SLIME,
    material: true,
    video: true
}

const cardviewUEGlassModel: CardviewModel = {
    title: "Glass",
    description: "",
    backgroundImage: assetsMaterials + "glass/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.GLASS,
    material: true,
    video: true
}

const cardviewUEBubbleModel: CardviewModel = {
    title: "Bubble",
    description: "",
    backgroundImage: assetsMaterials + "bubble/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.BUBBLE,
    material: true,
    video: true
}

const cardviewUESunModel: CardviewModel = {
    title: "Sun",
    description: "",
    backgroundImage: assetsMaterials + "sun/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SUN,
    material: true,
    video: true
}

const cardviewUEScreenModel: CardviewModel = {
    title: "TV Screen",
    description: "",
    backgroundImage: assetsMaterials + "screen/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SCREEN,
    material: true,
    video: true
}

// Motion Graphics

const assetsMotionGraphics = "assets/videos/InfiniteLoops/";

const cardviewMGRetro: CardviewModel = {
    title: "Retro 80s",
    description: "",
    backgroundImage: assetsMotionGraphics + "ILRetro.mp4",
    url: "/projects/" + ProjectUrls.MOTION_GRAPHICS + "/" + MotionGraphicsUrls.RETRO,
    material: true,
    video: true
}

const cardviewMGCyber: CardviewModel = {
    title: "Cyber Triangle",
    description: "",
    backgroundImage: assetsMotionGraphics + "ILTriangles.mp4",
    url: "/projects/" + ProjectUrls.MOTION_GRAPHICS + "/" + MotionGraphicsUrls.CYBER,
    material: true,
    video: true
}

export const listProjects = [
    cardviewBoundeadModel,
    cardviewRealDisunityModel,
    cardviewTesseractModel,
    cardviewShutdownModel,
    cardviewOtherUnrealEngineProjectsModel,
    cardviewNodeExpressApiModel
]

export const listMaterials = [
    cardviewUEDragonModel,
    cardviewUEMorphing,
    cardviewUEVolumetricIceModel,
    cardviewUEGlitterBallModel,
    cardviewUEMagicSphereModel,
    cardviewUESlimeModel,
    cardviewUEGlassModel,
    cardviewUEBubbleModel,
    cardviewUESunModel,
    cardviewUEScreenModel
]

export const listMotionGraphics = [
    cardviewMGRetro,
    cardviewMGCyber
]
