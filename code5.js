gdjs.nivel2_951Code = {};
gdjs.nivel2_951Code.localVariables = [];
gdjs.nivel2_951Code.idToCallbackMap = new Map();
gdjs.nivel2_951Code.GDNewSpriteObjects1= [];
gdjs.nivel2_951Code.GDNewSpriteObjects2= [];
gdjs.nivel2_951Code.GDNewSprite3Objects1= [];
gdjs.nivel2_951Code.GDNewSprite3Objects2= [];
gdjs.nivel2_951Code.GDNewSprite2Objects1= [];
gdjs.nivel2_951Code.GDNewSprite2Objects2= [];
gdjs.nivel2_951Code.GDNewSprite4Objects1= [];
gdjs.nivel2_951Code.GDNewSprite4Objects2= [];
gdjs.nivel2_951Code.GDNewSprite5Objects1= [];
gdjs.nivel2_951Code.GDNewSprite5Objects2= [];
gdjs.nivel2_951Code.GDNewSprite6Objects1= [];
gdjs.nivel2_951Code.GDNewSprite6Objects2= [];
gdjs.nivel2_951Code.GDNewSprite7Objects1= [];
gdjs.nivel2_951Code.GDNewSprite7Objects2= [];
gdjs.nivel2_951Code.GDNewSprite8Objects1= [];
gdjs.nivel2_951Code.GDNewSprite8Objects2= [];
gdjs.nivel2_951Code.GDTransitionObjects1= [];
gdjs.nivel2_951Code.GDTransitionObjects2= [];
gdjs.nivel2_951Code.GDDarkenObjects1= [];
gdjs.nivel2_951Code.GDDarkenObjects2= [];


gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.nivel2_951Code.GDNewSprite3Objects1});
gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel2_951Code.GDNewSprite4Objects1});
gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel2_951Code.GDNewSprite4Objects1});
gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.nivel2_951Code.GDNewSprite3Objects1});
gdjs.nivel2_951Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.nivel2_951Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel2_951Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite3Objects1Objects, gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel 3", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16254668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Oliver y Benji.mp3", true, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.nivel2_951Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel2_951Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite4Objects1Objects, gdjs.nivel2_951Code.mapOfGDgdjs_9546nivel2_9595951Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel 3", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.nivel2_951Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivel2_951Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel2_951Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite6Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite6Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite7Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite7Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite8Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite8Objects2.length = 0;
gdjs.nivel2_951Code.GDTransitionObjects1.length = 0;
gdjs.nivel2_951Code.GDTransitionObjects2.length = 0;
gdjs.nivel2_951Code.GDDarkenObjects1.length = 0;
gdjs.nivel2_951Code.GDDarkenObjects2.length = 0;

gdjs.nivel2_951Code.eventsList0(runtimeScene);
gdjs.nivel2_951Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel2_951Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite6Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite6Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite7Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite7Objects2.length = 0;
gdjs.nivel2_951Code.GDNewSprite8Objects1.length = 0;
gdjs.nivel2_951Code.GDNewSprite8Objects2.length = 0;
gdjs.nivel2_951Code.GDTransitionObjects1.length = 0;
gdjs.nivel2_951Code.GDTransitionObjects2.length = 0;
gdjs.nivel2_951Code.GDDarkenObjects1.length = 0;
gdjs.nivel2_951Code.GDDarkenObjects2.length = 0;


return;

}

gdjs['nivel2_951Code'] = gdjs.nivel2_951Code;
