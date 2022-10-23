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
    description: "Top down shooter video game made with own engine",
    backgroundImage: "assets/images/cards/shutdown.png",
    url: "/projects/" + ProjectUrls.SHUTDOWN
}

const cardviewNodeExpressApiModel: CardviewModel = {
    title: "Node Express API Rest",
    description: "Node+Express API Rest connected to MongoDB",
    backgroundImage: "assets/images/node/node.png",
    url: "/projects/" + ProjectUrls.NODE_EXPRESS_API
}

// UNREAL ENGINE

const cardviewUEDragonModel: CardviewModel = {
    title: "Dragon",
    description: "",
    backgroundImage: "assets/images/ue-materials/dragon/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.DRAGON,
    material: true,
    video: true
}

const cardviewUEVolumetricIceModel: CardviewModel = {
    title: "Volumetric Ice",
    description: "",
    backgroundImage: "https://i.gyazo.com/d5cd2fe1dc6111340374992f3188cc39.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.VOLUMETRIC_ICE,
    material: true
}

const cardviewUEGlitterBallModel: CardviewModel = {
    title: "Glitter Ball",
    description: "",
    backgroundImage: "https://i.gyazo.com/b2ff49f694c79ecf2dae76f69de96321.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.GLITTER,
    material: true
}

const cardviewUEMagicSphereModel: CardviewModel = {
    title: "Magic Sphere",
    description: "",
    backgroundImage: "https://i.gyazo.com/c288e214a26710695a4e251c6ead20a9.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.MAGIC,
    material: true
}

const cardviewUESlimeModel: CardviewModel = {
    title: "Slime",
    description: "",
    backgroundImage: "https://i.gyazo.com/7cf85a924acbafc2c7cfa32f2ef3cd40.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SLIME,
    material: true
}

const cardviewUEGlassModel: CardviewModel = {
    title: "Glass",
    description: "",
    backgroundImage: "https://i.gyazo.com/e13dbb2b36a4be0c9df2c4ffb298a1ff.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.GLASS,
    material: true
}

const cardviewUEBubbleModel: CardviewModel = {
    title: "Bubble",
    description: "",
    backgroundImage: "https://i.gyazo.com/82ef2f0e824fdef4fb5b62e5cc809141.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.BUBBLE,
    material: true
}

const cardviewUESunModel: CardviewModel = {
    title: "Sun",
    description: "",
    backgroundImage: "https://i.gyazo.com/fe9657c42421d6385b5d08659f432a78.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SUN,
    material: true
}

const cardviewUEScreenModel: CardviewModel = {
    title: "TV Screen",
    description: "",
    backgroundImage: "assets/images/ue-materials/screen/cardview.mp4",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SCREEN,
    material: true,
    video: true
}

// Motion Graphics

const cardviewMGRetro: CardviewModel = {
    title: "Retro 80s",
    description: "",
    backgroundImage: "assets/videos/InfiniteLoops/ILRetro.mp4",
    url: "/projects/" + ProjectUrls.MOTION_GRAPHICS + "/" + MotionGraphicsUrls.RETRO,
    material: true,
    video: true
}

const cardviewMGCyber: CardviewModel = {
    title: "Cyber Triangle",
    description: "",
    backgroundImage: "assets/videos/InfiniteLoops/ILTriangles.mp4",
    url: "/projects/" + ProjectUrls.MOTION_GRAPHICS + "/" + MotionGraphicsUrls.CYBER,
    material: true,
    video: true
}

export const listProjects = [
    cardviewBoundeadModel,
    cardviewRealDisunityModel,
    cardviewTesseractModel,
    cardviewShutdownModel,
    cardviewNodeExpressApiModel
]

export const listMaterials = [
    cardviewUEDragonModel,
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
