function createAI(){
      background(240);

      var rsp = new RSP(0,0,currentSelection,1);
      rsp.show();

      var randomChoice = Math.floor(Math.random() * possibleChoice.length);
      var ai = new RSP(0,0,possibleChoice[randomChoice],2);
      ai.show();

      var winner = Logic(currentSelection, possibleChoice[randomChoice]);
      if (winner == 1){
        rsp.show(winner);
      }
      else{
        ai.show(winner);
      }
    }
