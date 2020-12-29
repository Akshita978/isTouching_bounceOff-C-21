function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;
  
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    return false;
  }
  }
  
  function bounceOff(object3, object4){
    if (object3.x - object4.x < object4.width/2 + object3.width/2
      && object4.x - object3.x < object4.width/2 + object3.width/2) {
        object3.velocityX = object3.velocityX * (-1);
        object4.velocityX = object4.velocityX * (-1);
  }
  if (object3.y - object4.y < object4.height/2 + object3.height/2
    && object4.y - object3.y < object4.height/2 + object3.height/2){
      object3.velocityY = object3.velocityY * (-1);
      object4.velocityY = object4.velocityY * (-1);
  }
  }