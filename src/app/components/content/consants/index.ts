import { ProjectUrls, UEMaterialsUrls } from "src/app/constants/app.constants"
import { CardviewModel } from "../../shared/cardview/model/cardview.model"

/// PROJECTS

export const cardviewBoundeadModel : CardviewModel = {
    title: "Boundead",
    description: "Action/Platform game made in Unity for Bachelor's degree final project",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.BOUNDEAD
}

export const cardviewRealDisunityModel : CardviewModel = {
    title: "Real Disunity Engine",
    description: "Basic C++ OpenGL Game Engine from scratch",
    backgroundImage: "assets/images/engines/RealDisunityEngine/RealDisunity1.png",
    url: "/projects/" + ProjectUrls.REAL_DISUNITY
}

export const cardviewTesseractModel : CardviewModel = {
    title: "Tesseract Engine",
    description: "Advanced C++ OpenGL Game Engine from scratch",
    backgroundImage: "assets/images/engines/TesseractEngine/tesseract.png",
    url: "/projects/" + ProjectUrls.TESSERACT
}

export const cardviewShutdownModel : CardviewModel = {
    title: "Shutdown Videogame",
    description: "Top down shooter video game made with own engine",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.SHUTDOWN
}

export const cardviewUEMaterialsModel: CardviewModel = {
    title: "Unreal Engine Materials",
    description: "descrtiption",
    backgroundImage: "assets/images/carousel-boundead/1.png",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS
}

export const cardviewNodeExpressApiModel: CardviewModel = {
    title: "Node Express API Rest",
    description: "Node+Express API Rest connected to MongoDB",
    backgroundImage: "assets/images/node/node.png",
    url: "/projects/" + ProjectUrls.NODE_EXPRESS_API
}

// UNREAL ENGINE

export const cardviewUEVolumetricIceModel: CardviewModel = {
    title: "Volumetric Ice",
    description: "",
    backgroundImage: "https://i.gyazo.com/d5cd2fe1dc6111340374992f3188cc39.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.VOLUMETRIC_ICE,
    material: true
}

export const cardviewUEGlitterBallModel: CardviewModel = {
    title: "Glitter Ball",
    description: "",
    backgroundImage: "https://i.gyazo.com/b2ff49f694c79ecf2dae76f69de96321.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.GLITTER,
    material: true
}

export const cardviewUEMagicSphereModel: CardviewModel = {
    title: "Magic Sphere",
    description: "",
    backgroundImage: "https://i.gyazo.com/c288e214a26710695a4e251c6ead20a9.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.MAGIC,
    material: true
}

export const cardviewUESlimeModel: CardviewModel = {
    title: "Slime",
    description: "",
    backgroundImage: "https://i.gyazo.com/7cf85a924acbafc2c7cfa32f2ef3cd40.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SLIME,
    material: true
}

export const cardviewUEGlassModel: CardviewModel = {
    title: "Glass",
    description: "",
    backgroundImage: "https://i.gyazo.com/e13dbb2b36a4be0c9df2c4ffb298a1ff.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.GLASS,
    material: true
}

export const cardviewUEBubbleModel: CardviewModel = {
    title: "Bubble",
    description: "",
    backgroundImage: "https://i.gyazo.com/82ef2f0e824fdef4fb5b62e5cc809141.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.BUBBLE,
    material: true
}

export const cardviewUESunModel: CardviewModel = {
    title: "Sun",
    description: "",
    backgroundImage: "https://i.gyazo.com/fe9657c42421d6385b5d08659f432a78.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SUN,
    material: true
}

export const cardviewUEScreenModel: CardviewModel = {
    title: "TV Screen",
    description: "",
    backgroundImage: "https://i.gyazo.com/dd27164d14239dc9f7031bd635e926e3.gif",
    url: "/projects/" + ProjectUrls.UNREAL_ENGINE_MATERIALS + "/" + UEMaterialsUrls.SCREEN,
    material: true
}
