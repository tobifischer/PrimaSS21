"use strict";
var L01_1_movingThings;
(function (L01_1_movingThings) {
    var fc = FudgeCore;
    window.addEventListener("load", init);
    let node = new fc.Node("Test");
    function init(_event) {
        const canvas = document.querySelector("canvas");
        node.addComponent(new fc.ComponentTransform());
        let mesh = new fc.MeshQuad("Quad");
        node.addComponent(new fc.ComponentMesh(mesh));
        let material = new fc.Material("QuadMaterial", fc.ShaderUniColor, new fc.CoatColored(new fc.Color(1, 1, 1, 1))); //Die ersten 3 Einsen sind RGB. Letzte 1 ist der Alpha-Kanal (wie transparent ist etwas)
        let cmpMaterial = new fc.ComponentMaterial(material);
        node.addComponent(cmpMaterial);
        //Camera
        let cmpCamera = new fc.ComponentCamera();
        //müssen Kamera bewegen um etwas zu sehen, da Kamera und Objekt übereinander am Ursprung liegen
        cmpCamera.mtxPivot.translateZ(3); //wir gehen 3 Einheiten unseres Koordinatensystems in positiver z-Richtung
        cmpCamera.mtxPivot.rotateY(180); //wir drehen um 180° an der y-achse um "zurück" zu gucken 
        //Viewport
        let viewport = new fc.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        //"Herz"
        fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 60);
        fc.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        function update(_event) {
            //onsole.log(_event);
            let rotationSpeed = 90 / 1000;
            node.getComponent(fc.ComponentTransform).mtxLocal.rotateZ(rotationSpeed * fc.Loop.timeFrameReal);
            viewport.draw();
        }
    }
})(L01_1_movingThings || (L01_1_movingThings = {}));
//Achsen: z=nach vorne<->hinten, "in den bildschirm" / x= / y= 
//# sourceMappingURL=Test.js.map