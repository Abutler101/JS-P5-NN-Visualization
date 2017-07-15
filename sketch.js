var nodes = [10,5,9,4,6,2];
var nodePos = [];
var NodeWidth = 50;
var outOfLayers = [[],[],[],[],[],[]];
function setup() {
  createCanvas(1500,800);
  var x = 100;
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
  frameRate(0.6);
  //For testing purposes only
  for(var l = 0;l<nodes.length;l++){
    for(var m =0;m<nodes[l];m++){
      outOfLayers[l][m] = random(-1,1);
    }
  }
  //End testing only segment
  background(81);
  for(var i =0;i<nodePos.length;i++){
    for(var j =0;j<nodePos[i].length;j++){
      ellipse(nodePos[i][j][0],nodePos[i][j][1],NodeWidth);
      var val = round(outOfLayers[i][j]*100)/100;
      text(val,nodePos[i][j][0]-20,nodePos[i][j][1]);
    }
  }
  for(var i =0;i<nodePos.length;i++){
    for(var j =0;j<nodePos[i].length;j++){
      if(i!=nodePos.length-1){
        for(var k=0;k<nodes[i+1];k++){
          line(nodePos[i][j][0]+NodeWidth/2,nodePos[i][j][1],nodePos[i+1][k][0]-NodeWidth/2,nodePos[i+1][k][1]);
        }
      }
    }
  }
}
