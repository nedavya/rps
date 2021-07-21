function Logic(a,b){
    console.log(a + " " + b);
    //rock
    if(a==possibleChoice[0]){
      if(b == possibleChoice[1]){
        console.log("paper wraps rock");
        playerTwoScore += 1;
        return 2;
      }
      else if(b == possibleChoice[2]){
        console.log("rock breaks scissor");
        playerOneScore += 1;
        return 1;
      }
      else {
        console.log("draw");
        return null;
      }
    }
    //paper
    if (a == possibleChoice[1]){
      if(b == possibleChoice[0]){
        console.log("paper wraps rock");
        playerOneScore += 1;
        return 1;
      }
      else if(b == possibleChoice[2]){
        console.log("scissor cuts paper");
        playerTwoScore += 1;
        return 2;
      }
      else {
        console.log("draw");
        return null;
      }
    }
    //scissor
    if(a == possibleChoice[2]){
      if(b == possibleChoice[0]){
        console.log("rock breaks scissor");
        playerTwoScore += 1;
        return 2;
      }
      else if(b == possibleChoice[1]){
        console.log("scissor cuts paper");
        playerOneScore += 1;
        return 1;
      }
      else {
        console.log("draw");
        return null;
      }
    }
  }