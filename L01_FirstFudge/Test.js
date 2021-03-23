"use strict";
var L01_FirstFudge;
(function (L01_FirstFudge) {
    var fc = FudgeCore;
    window.addEventListener("load", init);
    function init(_event) {
        let node = new fc.Node("Test");
        const canvas = document.querySelector("canvas");
        let mesh = new fc.MeshPyramid("Pyramid");
        node.addComponent(new fc.ComponentMesh(mesh));
        let material = new fc.Material("PyramidMaterial", fc.ShaderUniColor, new fc.CoatColored(new fc.Color(1, 1, 1, 1))); //Die ersten 3 Einsen sind RGB. Letzte 1 ist der Alpha-Kanal (wie transparent ist etwas)
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
        viewport.draw();
        //console.log(node);
    }
})(L01_FirstFudge || (L01_FirstFudge = {}));
//Achsen: z=nach vorne<->hinten, "in den bildschirm" / x= / y= 
//# sourceMappingURL=Test.js.map