class Question{
    constructor(){
        this.input1 = createInput("Enter Your Name");
        this.input2 = createInput("Enter Correct Option No");
        this.submit = createButton('Submit');
        this.title = createElement('h1');
    }

    display(){
        this.title.html("My Quiz App");
        this.title.position(350,0);

        var question = createElement('h2')
        question.html("What Is Always Coming, But Never Arrives ?");
        question.position(130,80);

        var option1 = createElement('h3')
        option1.html("1. Tomorrow")
        option1.position(110, 120);

        var option2 = createElement('h3');
        option2.html("2. Bus");
        option2.position(110, 160);

        var option3 = createElement('h3');
        option3.html("3. Train");
        option3.position(110, 200);

        var option4 = createElement('h3');
        option4.html("4. Seasons");
        option4.position(110, 240);

        this.input1.position(110, 300);
        this.input2.position(300, 300);
        this.submit.position(550, 300);

        this.submit.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.submit.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount = contestantCount+1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })

    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.submit.hide();
        this.title.hide();
    }      
}