gdjs.nivel2Code = {};
gdjs.nivel2Code.localVariables = [];
gdjs.nivel2Code.idToCallbackMap = new Map();
gdjs.nivel2Code.GDFondoJuegoObjects1= [];
gdjs.nivel2Code.GDFondoJuegoObjects2= [];
gdjs.nivel2Code.GDNewSprite2Objects1= [];
gdjs.nivel2Code.GDNewSprite2Objects2= [];
gdjs.nivel2Code.GDNewSprite3Objects1= [];
gdjs.nivel2Code.GDNewSprite3Objects2= [];
gdjs.nivel2Code.GDNewSprite4Objects1= [];
gdjs.nivel2Code.GDNewSprite4Objects2= [];
gdjs.nivel2Code.GDNewSprite5Objects1= [];
gdjs.nivel2Code.GDNewSprite5Objects2= [];
gdjs.nivel2Code.GDNewSprite6Objects1= [];
gdjs.nivel2Code.GDNewSprite6Objects2= [];
gdjs.nivel2Code.GDNewSprite7Objects1= [];
gdjs.nivel2Code.GDNewSprite7Objects2= [];
gdjs.nivel2Code.GDNewSprite8Objects1= [];
gdjs.nivel2Code.GDNewSprite8Objects2= [];
gdjs.nivel2Code.GDFondomenuObjects1= [];
gdjs.nivel2Code.GDFondomenuObjects2= [];
gdjs.nivel2Code.GDSiguienteObjects1= [];
gdjs.nivel2Code.GDSiguienteObjects2= [];
gdjs.nivel2Code.GDVolverObjects1= [];
gdjs.nivel2Code.GDVolverObjects2= [];
gdjs.nivel2Code.GDfondo_9595pausaObjects1= [];
gdjs.nivel2Code.GDfondo_9595pausaObjects2= [];
gdjs.nivel2Code.GDNewSpriteObjects1= [];
gdjs.nivel2Code.GDNewSpriteObjects2= [];
gdjs.nivel2Code.GDTransitionObjects1= [];
gdjs.nivel2Code.GDTransitionObjects2= [];
gdjs.nivel2Code.GDDarkenObjects1= [];
gdjs.nivel2Code.GDDarkenObjects2= [];


gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.nivel2Code.GDNewSprite7Objects1});
gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.nivel2Code.GDNewSprite8Objects1});
gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.nivel2Code.GDNewSprite7Objects1});
gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.nivel2Code.GDNewSprite6Objects1});
gdjs.nivel2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.nivel2Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.nivel2Code.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite7Objects1Objects, gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivel2Code.GDNewSprite8Objects1 */
{for(var i = 0, len = gdjs.nivel2Code.GDNewSprite8Objects1.length ;i < len;++i) {
    gdjs.nivel2Code.GDNewSprite8Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.nivel2Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.nivel2Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite7Objects1Objects, gdjs.nivel2Code.mapOfGDgdjs_9546nivel2Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel2_1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16188924);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Oliver y Benji2.mp3", true, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.nivel2Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel2Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.nivel2Code.GDSiguienteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel2Code.GDSiguienteObjects1[k] = gdjs.nivel2Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.nivel2Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoJuego"), gdjs.nivel2Code.GDFondoJuegoObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.nivel2Code.GDFondoJuegoObjects1.length === 0 ) ? 0 :gdjs.nivel2Code.GDFondoJuegoObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Volver"), gdjs.nivel2Code.GDVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel2Code.GDVolverObjects1.length;i<l;++i) {
    if ( gdjs.nivel2Code.GDVolverObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel2Code.GDVolverObjects1[k] = gdjs.nivel2Code.GDVolverObjects1[i];
        ++k;
    }
}
gdjs.nivel2Code.GDVolverObjects1.length = k;
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16192116);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pausa3", true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.nivel2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivel2Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel2Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel2Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite6Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite6Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite7Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite7Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite8Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite8Objects2.length = 0;
gdjs.nivel2Code.GDFondomenuObjects1.length = 0;
gdjs.nivel2Code.GDFondomenuObjects2.length = 0;
gdjs.nivel2Code.GDSiguienteObjects1.length = 0;
gdjs.nivel2Code.GDSiguienteObjects2.length = 0;
gdjs.nivel2Code.GDVolverObjects1.length = 0;
gdjs.nivel2Code.GDVolverObjects2.length = 0;
gdjs.nivel2Code.GDfondo_9595pausaObjects1.length = 0;
gdjs.nivel2Code.GDfondo_9595pausaObjects2.length = 0;
gdjs.nivel2Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel2Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel2Code.GDTransitionObjects1.length = 0;
gdjs.nivel2Code.GDTransitionObjects2.length = 0;
gdjs.nivel2Code.GDDarkenObjects1.length = 0;
gdjs.nivel2Code.GDDarkenObjects2.length = 0;

gdjs.nivel2Code.eventsList0(runtimeScene);
gdjs.nivel2Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel2Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel2Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite6Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite6Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite7Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite7Objects2.length = 0;
gdjs.nivel2Code.GDNewSprite8Objects1.length = 0;
gdjs.nivel2Code.GDNewSprite8Objects2.length = 0;
gdjs.nivel2Code.GDFondomenuObjects1.length = 0;
gdjs.nivel2Code.GDFondomenuObjects2.length = 0;
gdjs.nivel2Code.GDSiguienteObjects1.length = 0;
gdjs.nivel2Code.GDSiguienteObjects2.length = 0;
gdjs.nivel2Code.GDVolverObjects1.length = 0;
gdjs.nivel2Code.GDVolverObjects2.length = 0;
gdjs.nivel2Code.GDfondo_9595pausaObjects1.length = 0;
gdjs.nivel2Code.GDfondo_9595pausaObjects2.length = 0;
gdjs.nivel2Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel2Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel2Code.GDTransitionObjects1.length = 0;
gdjs.nivel2Code.GDTransitionObjects2.length = 0;
gdjs.nivel2Code.GDDarkenObjects1.length = 0;
gdjs.nivel2Code.GDDarkenObjects2.length = 0;


return;

}

gdjs['nivel2Code'] = gdjs.nivel2Code;
