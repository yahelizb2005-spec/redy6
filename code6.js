gdjs.nivel_323Code = {};
gdjs.nivel_323Code.localVariables = [];
gdjs.nivel_323Code.idToCallbackMap = new Map();
gdjs.nivel_323Code.GDFondoJuegoObjects1= [];
gdjs.nivel_323Code.GDFondoJuegoObjects2= [];
gdjs.nivel_323Code.GDNewSprite2Objects1= [];
gdjs.nivel_323Code.GDNewSprite2Objects2= [];
gdjs.nivel_323Code.GDNewSprite3Objects1= [];
gdjs.nivel_323Code.GDNewSprite3Objects2= [];
gdjs.nivel_323Code.GDNewSprite4Objects1= [];
gdjs.nivel_323Code.GDNewSprite4Objects2= [];
gdjs.nivel_323Code.GDNewSprite5Objects1= [];
gdjs.nivel_323Code.GDNewSprite5Objects2= [];
gdjs.nivel_323Code.GDNewSprite6Objects1= [];
gdjs.nivel_323Code.GDNewSprite6Objects2= [];
gdjs.nivel_323Code.GDFondomenuObjects1= [];
gdjs.nivel_323Code.GDFondomenuObjects2= [];
gdjs.nivel_323Code.GDSiguenteObjects1= [];
gdjs.nivel_323Code.GDSiguenteObjects2= [];
gdjs.nivel_323Code.GDVolverObjects1= [];
gdjs.nivel_323Code.GDVolverObjects2= [];
gdjs.nivel_323Code.GDNewSpriteObjects1= [];
gdjs.nivel_323Code.GDNewSpriteObjects2= [];
gdjs.nivel_323Code.GDfondopausaObjects1= [];
gdjs.nivel_323Code.GDfondopausaObjects2= [];
gdjs.nivel_323Code.GDNewSprite7Objects1= [];
gdjs.nivel_323Code.GDNewSprite7Objects2= [];
gdjs.nivel_323Code.GDTransitionObjects1= [];
gdjs.nivel_323Code.GDTransitionObjects2= [];
gdjs.nivel_323Code.GDDarkenObjects1= [];
gdjs.nivel_323Code.GDDarkenObjects2= [];


gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.nivel_323Code.GDNewSprite6Objects1});
gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel_323Code.GDNewSprite4Objects1});
gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.nivel_323Code.GDNewSprite6Objects1});
gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.nivel_323Code.GDNewSpriteObjects1});
gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.nivel_323Code.GDNewSprite6Objects1});
gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.nivel_323Code.GDNewSprite3Objects1});
gdjs.nivel_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel_323Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.nivel_323Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite6Objects1Objects, gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivel_323Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.nivel_323Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.nivel_323Code.GDNewSprite4Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel_323Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.nivel_323Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite6Objects1Objects, gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16297668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Poppy Playtime.mp3", true, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.nivel_323Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.nivel_323Code.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite6Objects1Objects, gdjs.nivel_323Code.mapOfGDgdjs_9546nivel_9595323Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel 3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguente"), gdjs.nivel_323Code.GDSiguenteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel_323Code.GDSiguenteObjects1.length;i<l;++i) {
    if ( gdjs.nivel_323Code.GDSiguenteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel_323Code.GDSiguenteObjects1[k] = gdjs.nivel_323Code.GDSiguenteObjects1[i];
        ++k;
    }
}
gdjs.nivel_323Code.GDSiguenteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoJuego"), gdjs.nivel_323Code.GDFondoJuegoObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.nivel_323Code.GDFondoJuegoObjects1.length === 0 ) ? 0 :gdjs.nivel_323Code.GDFondoJuegoObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Volver"), gdjs.nivel_323Code.GDVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel_323Code.GDVolverObjects1.length;i<l;++i) {
    if ( gdjs.nivel_323Code.GDVolverObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel_323Code.GDVolverObjects1[k] = gdjs.nivel_323Code.GDVolverObjects1[i];
        ++k;
    }
}
gdjs.nivel_323Code.GDVolverObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") >= 0.25;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16301556);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pausa4", true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.nivel_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivel_323Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel_323Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel_323Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite6Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite6Objects2.length = 0;
gdjs.nivel_323Code.GDFondomenuObjects1.length = 0;
gdjs.nivel_323Code.GDFondomenuObjects2.length = 0;
gdjs.nivel_323Code.GDSiguenteObjects1.length = 0;
gdjs.nivel_323Code.GDSiguenteObjects2.length = 0;
gdjs.nivel_323Code.GDVolverObjects1.length = 0;
gdjs.nivel_323Code.GDVolverObjects2.length = 0;
gdjs.nivel_323Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel_323Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel_323Code.GDfondopausaObjects1.length = 0;
gdjs.nivel_323Code.GDfondopausaObjects2.length = 0;
gdjs.nivel_323Code.GDNewSprite7Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite7Objects2.length = 0;
gdjs.nivel_323Code.GDTransitionObjects1.length = 0;
gdjs.nivel_323Code.GDTransitionObjects2.length = 0;
gdjs.nivel_323Code.GDDarkenObjects1.length = 0;
gdjs.nivel_323Code.GDDarkenObjects2.length = 0;

gdjs.nivel_323Code.eventsList0(runtimeScene);
gdjs.nivel_323Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel_323Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel_323Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel_323Code.GDNewSprite6Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite6Objects2.length = 0;
gdjs.nivel_323Code.GDFondomenuObjects1.length = 0;
gdjs.nivel_323Code.GDFondomenuObjects2.length = 0;
gdjs.nivel_323Code.GDSiguenteObjects1.length = 0;
gdjs.nivel_323Code.GDSiguenteObjects2.length = 0;
gdjs.nivel_323Code.GDVolverObjects1.length = 0;
gdjs.nivel_323Code.GDVolverObjects2.length = 0;
gdjs.nivel_323Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel_323Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel_323Code.GDfondopausaObjects1.length = 0;
gdjs.nivel_323Code.GDfondopausaObjects2.length = 0;
gdjs.nivel_323Code.GDNewSprite7Objects1.length = 0;
gdjs.nivel_323Code.GDNewSprite7Objects2.length = 0;
gdjs.nivel_323Code.GDTransitionObjects1.length = 0;
gdjs.nivel_323Code.GDTransitionObjects2.length = 0;
gdjs.nivel_323Code.GDDarkenObjects1.length = 0;
gdjs.nivel_323Code.GDDarkenObjects2.length = 0;


return;

}

gdjs['nivel_323Code'] = gdjs.nivel_323Code;
