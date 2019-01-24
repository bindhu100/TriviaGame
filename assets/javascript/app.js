// start button
$("#start").on("click", function(){
    game.start()

})

// questions and answers
var QuestionsArray =[{
    questions:"Who played the character of harry potter in movie?",
    answers:["Daniel Radcliffe", "Rupert Grint", "Emma Watson","Bonnie Wright"],
    correctOne: "Daniel Radcliffe"
},
{
    questions:"What is the famous weapon used by Jedi Knights in Star Wars series?",
    answers:["Blaster", "Lightsaber", "Bowcaster","Ryyk Blades"],
    correctOne: "Lightsaber"
},
{
    questions:"who was the first solo female host of the Oscars?",
    answers:["Bob Hope", "Whoopi Goldberg", "Steve Martin", "Billy Crystal"],
    correctOne: "Whoopi Goldberg"
},
{questions:"For which movie Tom Hanks nominated third time in Oscars, 1996?",
answers:["Saving Private Ryan", "Forrest Gump", "Cast Away", "Apollo 13"],
correctOne: "Apollo 13"}

]


var game = {
    correct: 0,
    incorrect: 0,
    time: 200,

    countdown: function(){
        game.time--;
        $("#time").html(game.time);
        if(game.time<=0){
            
            game.done();
        }
    },

    start: function (){

        // timer
        timer = setInterval(game.countdown, 1000);
        // to display Time Remaining:120 Seconds
        $("#question").prepend('<h2>Time Remaining: <span id="time">120</span> Seconds</h2> <br><br>' )
         // on click Start button, it should hide
    $("#start").remove();
    // selecting questions from array
    for(var i=0; i<QuestionsArray.length ; i++){
        // append to html div and display questions
        $("#question").append("<h2>"+QuestionsArray[i].questions+"</h2>");

        // selecting answer from array
        for(var a=0; a<QuestionsArray[i].answers.length; a++){

          // append to html div and display answers with radio button
          $("#question").append("<input type = 'radio' name='question-"+i+"'values= '"+"<br>"+QuestionsArray[i].answers[a]+" '>"+QuestionsArray[i].answers[a]);
        }

    }
       
    // Done button
    $("#question").append('<br> <br><br><button id="stop">Done</button>')
    },
    done: function(){
        $.each($('input[name="questions-0]":checked'),function(){
            if($(this).val()==QuestionsArray[0].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });

        $.each($('input[name="questions-1]":checked'),function(){
            if($(this).val()==QuestionsArray[1].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });

        $.each($('input[name="questions-2]":checked'),function(){
            if($(this).val()==QuestionsArray[2].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });

        $.each($('input[name="questions-3]":checked'),function(){
            if($(this).val()==QuestionsArray[3].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        // result
        this.result();
    },
    // display result
    result: function(){
        clearInterval(timer);
        $('#question h2').revove();

        $("#question").html("<h2> All Done!</h2>");
        $("#question").append("<h3>Correct Answer: "+this.correct+"</h3>");
        $("#question").append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
        $("#question").append("<h3>Unanswered:"+(QuestionsArray.length-(this.correct))+"</h3>");
    }
}
