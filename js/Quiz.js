class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    
    //write code to change the background color here
     background("yellow");
    //write code to show a heading for showing the result of Quiz
   textSize(30)
  fill("black")
   text("Result of  the Quiz",350,50 )
   text("________________",350,55 )
    //call getContestantInfo( ) here
  Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
  if(allContestants !== undefined){
    fill("blue");
    textSize(20);
    text("NOTE : Contestant who answer correct are highlighted in green color!",130,230)

    var display_position = 130;
    for (var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("green")
        else
        fill("red");
       
        display_position+=20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 120, display_position)
    }
  }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
