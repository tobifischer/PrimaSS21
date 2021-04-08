namespace L02_SpaceInvaders_01 {
  import fc = FudgeCore;
  window.addEventListener("load", init);
  
  let node: fc.Node = new fc.Node("Test");

  function init(_event: Event): void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas");

    node.addComponent (new fc.ComponentTransform());

    let mesh: fc.MeshQuad = new fc.MeshQuad("Quad");
    node.addComponent(new fc.ComponentMesh(mesh));

    let material: fc.Material = new fc.Material("QuadMaterial", fc.ShaderUniColor, new fc.CoatColored(new fc.Color(1, 1, 1, 1))); //Die ersten 3 Einsen sind RGB. Letzte 1 ist der Alpha-Kanal (wie transparent ist etwas)
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
    

    //"Herz"
    fc.Loop.start(fc.LOOP_MODE.TIME_REAL, 60);
    fc.Loop.addEventListener(fc.EVENT.LOOP_FRAME, update);

    function update (_event: Event): void {
      //onsole.log(_event);
      let rotationSpeed: number = 90 / 1000;
      node.getComponent(fc.ComponentTransform).mtxLocal.rotateZ(rotationSpeed * fc.Loop.timeFrameReal);
      viewport.draw();
    }


    
  }
}

//Achsen: z=nach vorne<->hinten, "in den bildschirm" / x= / y= 