document.addEventListener("keydown", function(event){
    switch (event.keyCode) 
    {
        case 33: 
            lookUp(event);
            break;
        case 34:
            lookDown(event);
            break;
        case 37:
            rotateLeft(event);
            break;
        case 38:
            moveForward();
            break;
        case 39:
            rotateRight();
            break;
        case 40:
            moveBackward();
            break;
    }
});

function UpdateTranslate(element) {
    var x = element.dataset.x;
    var y = element.dataset.y;
    var z = element.dataset.z;

    var position3d = "translate3d(" + x  + "px," + y + "px," + z + "px)";

    element.style.transform = position3d;
}

function UpdateTransform(element){
    var position3d = UpdatePosition(element);
    var rotate3d = UpdateRotation(element);

    element.style.transform = position3d + " " + rotate3d;
}

function UpdatePosition(element){
    var x = element.dataset.x;
    var y = element.dataset.y;
    var z = element.dataset.z;

    var position3d = "translate3d(" + x  + "px," + y + "px," + z + "px)";

    return position3d;
}

function UpdateRotation(element){
    var xDeg = element.dataset.xdeg;
    var yDeg = element.dataset.ydeg;
    var zDeg = element.dataset.zdeg;

    var rotate = "rotateX(" + xDeg + "deg) rotateY(" + yDeg + "deg) rotateZ(" + zDeg + ")";

    return rotate;
}

function rotateLeft(event){
    var viewport = document.getElementById("viewport");
    
    var xDeg = parseFloat(viewport.dataset.xdeg);
    var yDeg = parseFloat(viewport.dataset.ydeg);
    var zDeg = parseFloat(viewport.dataset.zdeg);

    yDeg -= 5;

    if (yDeg >= 360){
        yDeg = 0;
    }
    
    if (yDeg <= -360) {
        yDeg = 0;
    }

    viewport.setAttribute("data-ydeg", yDeg);
    UpdateTransform(viewport);
}

function rotateRight(event){
    var viewport = document.getElementById("viewport");
    
    var xDeg = parseFloat(viewport.dataset.xdeg);
    var yDeg = parseFloat(viewport.dataset.ydeg);
    var zDeg = parseFloat(viewport.dataset.zdeg);

    yDeg += 5;

    if (yDeg >= 360){
        yDeg = 0;
    }
    
    if (yDeg <= -360) {
        yDeg = 0;
    }

    viewport.setAttribute("data-ydeg", yDeg);
    UpdateTransform(viewport);
}

function moveForward(event){
    var assembly = document.getElementById("assembly");
    var viewport = document.getElementById("viewport");
    
    var x = parseFloat(assembly.dataset.x);
    var y = parseFloat(assembly.dataset.y);
    var z = parseFloat(assembly.dataset.z);

    //moving forward 10px
    //find x component of movement

    var yDeg = viewport.dataset.ydeg;
    var xMove = Math.sin(toRadians(yDeg)) * 10;
    x -= xMove;
    assembly.setAttribute("data-x", xMove)
    //find y component of movement

    var zMove = Math.cos(toRadians(yDeg)) * 10;
    z += zMove;

    assembly.setAttribute("data-x", x);
    assembly.setAttribute("data-z", z);
    UpdateTranslate(assembly);
}

function moveBackward(event){
    var assembly = document.getElementById("assembly");
    var viewport = document.getElementById("viewport");
    
    var x = parseFloat(assembly.dataset.x);
    var y = parseFloat(assembly.dataset.y);
    var z = parseFloat(assembly.dataset.z);

    //moving backward 10px
    //find x component of movement

    var yDeg = viewport.dataset.ydeg;
    var xMove = Math.sin(toRadians(yDeg)) * 10;
    x += xMove;
    assembly.setAttribute("data-x", xMove)
    //find y component of movement

    var zMove = Math.cos(toRadians(yDeg)) * 10;
    z -= zMove;

    assembly.setAttribute("data-x", x);
    assembly.setAttribute("data-z", z);
    UpdateTranslate(assembly);
}

function lookUp(event){
    var viewport = document.getElementById("viewport");
    
    var xDeg = parseFloat(viewport.dataset.xdeg);
    var yDeg = parseFloat(viewport.dataset.ydeg);
    var zDeg = parseFloat(viewport.dataset.zdeg);

    xDeg -= 5;

    if (xDeg >= 165){
        yDeg = 165;
    }
    
    if (yDeg <= -165) {
        yDeg = -165;
    }

    viewport.setAttribute("data-xdeg", xDeg);
    UpdateTransform(viewport);
}

function lookDown(event){
    var viewport = document.getElementById("viewport");
    
    var xDeg = parseFloat(viewport.dataset.xdeg);
    var yDeg = parseFloat(viewport.dataset.ydeg);
    var zDeg = parseFloat(viewport.dataset.zdeg);

    xDeg += 5;

    if (xDeg >= 165){
        yDeg = 165;
    }
    
    if (yDeg <= -165) {
        yDeg = -165;
    }

    viewport.setAttribute("data-xdeg", xDeg);
    UpdateTransform(viewport);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
  }