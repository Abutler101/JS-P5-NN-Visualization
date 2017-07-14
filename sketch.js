var nodes = [3,5,9,4,6,2];
var nodePos = [];
var NodeWidth = 50;
function setup() {
  createCanvas(1000,700);
  var x = 40;
  for(var i =0;i<nodes.length;i++){
    var y = 40;
    var layer = [];
    for(var j =0;j<nodes[i];j++){
      layer.push([x,y]);
      y+=75;
    }
    nodePos.push(layer);
    x+=150;
  }
}

function draw() {
  background(81);
  for(var i =0;i<nodePos.length;i++){
    for(var j =0;j<nodePos[i].length;j++){
      ellipse(nodePos[i][j][0],nodePos[i][j][1],NodeWidth);
    }
  }
  debugger;
  for(var i =0;i<nodePos.length;i++){
    for(var j =0;j<nodePos[i].length;j++){
      for(var k=1;k<nodes[k];k++){

      }
    }
  }

}
