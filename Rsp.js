function RSP(x,y,rsp,player) {
    var rock = false;
    var paper = false;
    var scissor = false;
    var bias = windowWidth / 4;
    var c;

    if (player == 1){ 
      bias = -bias;
      c = color(28,120,230);
    }

    else{
      bias = bias;
      c = color(230,20,68);
    }


    this.show = function(winner) {
      if(rsp == possibleChoice[0]){
        fill(c);
        if(!winner){
          noStroke();
        }
        else{
          strokeWeight(6);
          stroke(50);
        }
        ellipse(x + bias,y, 120, 120);
        rock = true;
      }
      else if(rsp == possibleChoice[1]){
        fill(c);
        if(!winner){
          noStroke();
        }
        else{
          strokeWeight(6);
          stroke(50);
        }
        rect(x + bias,y, 80, 120);
        paper = true;
      }
      else if(rsp == possibleChoice[2]){
        fill(c);
        if(!winner){
          noStroke();
        }
        else{
          strokeWeight(6);
          stroke(50);
        }
        push();
        rotate(-45);
        translate(100,-300);
        rect(x + bias,y, 20, 120);
        rect(x + bias - 20,y + 20, 120, 20);
        pop();
        scissor = true;
      }
    }


  }