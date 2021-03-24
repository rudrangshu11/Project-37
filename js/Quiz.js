class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            contestant = new Contestant();
            contestant.getCount();
            question = new Question();
            question.display();
        }
    }
    
    play(){
        question.hide();
        var result = createElement('h1');
        result.html("Results Of The Quiz");
        result.position(350,0);
        background('yellow');
        textSize(25);
        fill('cyan')
        text("*Note : Contestants who answered correct are highlighted in green", 60, 325);
        contestant.getContestantInfo();
        var pos = 350;
        if(allContestants != undefined){
            for(var plr in allContestants){
                console.log(allContestants[plr].answer);
                var correctAns = "1"
                if(correctAns === allContestants[plr].answer){
                    fill('green');
                }else {
                    fill('red');
                } 
                pos = pos+ 40;
                textSize(25);
                text(allContestants[plr].name + " : " + allContestants[plr].answer, 350,pos)
            } 
        }
    }
}