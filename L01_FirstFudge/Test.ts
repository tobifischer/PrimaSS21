namespace L01_FirstFudge {
  import fc = FudgeCore;
  window.addEventListener("load", init);

  function init(_event: Event): void {
    let node: fc.Node = new fc.Node("Test");
    const canvas: HTMLCanvasElement = document.querySelector("canvas");

    let mesh: fc.MeshPyramid = new fc.MeshPyramid("Pyramid");
    node.addComponent(new fc.ComponentMesh(mesh));

    let material: fc.Material = new fc.Material("PyramidMaterial", fc.ShaderUniColor, new fc.CoatColored(new fc.Color(1, 1, 1, 1))); //Die ersten 3 Einsen sind RGB. Letzte 1 ist der Alpha-Kanal (wie transparent ist etwas)
    let cmpMaterial: fc.ComponentMaterial = new fc.ComponentMaterial(material);
    node.addComponent(cmpMaterial);

    //Camera
    let cmpCamera: fc.ComponentCamera = new fc.ComponentCamera();
    //müssen Kamera bewegen um etwas zu sehen, da Kamera und Objekt übereinander am Ursprung liegen
    cmpCamera.mtxPivot.translateZ(3); //wir gehen 3 Einheiten unseres Koordinatensystems in positiver z-Richtung
    cmpCamera.mtxPivot.rotateY(180); //wir drehen um 180° an der y-achse um "zurück" zu gucken 



    //Viewport
    let viewport: fc.Viewport = new fc.Viewport();
    viewport.initialize("Viewport", node, cmpCamera, canvas);
    viewport.draw();


    //console.log(node);
  }
}

//Achsen: z=nach vorne<->hinten, "in den bildschirm" / x= / y= 