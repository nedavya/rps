    var possibleChoice = ["rock","paper","scissor"];
    var currentSelection;
    var playerOneScore = 0;
    var playerTwoScore = 0;
    var c;

    function setup() {
      createCanvas(windowWidth, windowHeight);
      frameRate(90);
      angleMode(DEGREES);
    }

    function draw() {
      fill(180);
      noStroke();
      textSize(20);
      text("1 = Rock",10,30);
      text("2 = Paper",10,60);
      text("3 = Scissor",10,90);
      c = color(28,120,230);
      fill(c);
      text("Player One: "+playerOneScore,10,150);
      c = color(230,20,68);
      fill(c);
      text("Player Two: "+playerTwoScore,10,180);
      translate(windowWidth / 2 , windowHeight / 2);
    }

    function keyPressed() {
      if (keyCode === 49) {
        currentSelection = possibleChoice[0];
        createAI();
      }
      else if (keyCode === 50) {
        currentSelection = possibleChoice[1];
        createAI();
      }
      else if (keyCode === 51) {
        currentSelection = possibleChoice[2];
        createAI();
      }
    }

    

    

   

    