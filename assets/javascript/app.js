// start button
$("#start").on("click", function(){
    game.start()

})
// Done button
$(document).on("click", "#stop",function(){
    game.done()
})

// 88888888888888888888888888888888888888888888888888888888888888888

// 888888888888888888888888888888888888888888888888888888888888888888888888888
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
    questions:"What was Walt Disney's Mickey Mouse's original name?",
    answers:["Manvillet", "Melvin", "Mortimer", "Murgatroyd"],
    correctOne: "Mortimer"
},
{questions:"For which movie Tom Hanks nominated third time in Oscars, 1996?",
answers:["Saving Private Ryan", "Forrest Gump", "Cast Away", "Apollo 13"],
correctOne: "Apollo 13"},
// 
{questions:"The creatures known as Fraggles were created by whom?",
answers:["Lewis Carroll", "the Brothers Grimm", "Jim Henson ", "Dr. Seuss"],
correctOne: "Jim Henson"},

{questions:"On the TV show The Love Boat, Adam Bricker's job on the ship was what?",
answers:["bartender", "captain", "doctor", "social director"],
correctOne: "doctor"},

{questions:"What band leader was known as The King of Swing?",
answers:["Tommy Dorsey", " Benny Goodman ", "Guy Lombardo", "Glenn Miller"],
correctOne: "Benny Goodman"},

{questions:"The musical work, The Sorcerer's Apprentice, was written by whom?",
answers:["Paul Dukas", "Wolfgang Amadeus Mozart", "Maurice Ravel", "Camille Saint-Saens"],
correctOne: "Paul Dukas"},


]



var timer;


var game = {
    correct: 0,
    incorrect: 0,
    time: 200,
    unanswered: 0,

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
        $("#question").prepend('<h2 id="countdown">Time Remaining: <span id="time">120</span> Seconds</h2> <br>' )
         // on click Start button, it should hide
    $("#start").remove();
    // selecting questions from array
    for(var i=0; i<QuestionsArray.length ; i++){
        // append to html div and display questions
        $("#question").append("<h2>"+QuestionsArray[i].questions+"</h2>");

        // selecting answer from array
        for(var a=0; a<QuestionsArray[i].answers.length; a++){

          // append to html div and display answers with radio button
          $("#question").append("<input type ='radio' name='question-" + i + "' value='" + QuestionsArray[i].answers[a] + "' /><span>" + QuestionsArray[i].answers[a] + "</span>");
        }

    }
       
    // Done button
    $("#question").append('<br> <br><br><button id="stop">Done</button>')
    },
    done: function(){
        clearInterval(timer);
        // 8888888888888888888888888888888888888888888888888888888
        
        // 8888888888888888888888888888888888888888888888888888888888
        console.log('Checked radio button value: ', $('input[name="question-0"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[0].correctOne)

        for (var i = 0; i < QuestionsArray.length; i++) {
            if (!$('input[name="question-' + i + '"]:checked').val()) {
                game.unanswered++;
            }
        }

        if ($('input[name="question-0"]:checked').val() === QuestionsArray[0].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        console.log('Checked radio button value: ', $('input[name="question-1"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[1].correctOne)
        if ($('input[name="question-1"]:checked').val() === QuestionsArray[1].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        console.log('Checked radio button value: ', $('input[name="question-2"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[2].correctOne)
        if ($('input[name="question-2"]:checked').val() === QuestionsArray[2].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        console.log('Checked radio button value: ', $('input[name="question-3"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[3].correctOne)
        if ($('input[name="question-3"]:checked').val() === QuestionsArray[3].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        // 88888888888888888888888888888888888888888
        console.log('Checked radio button value: ', $('input[name="question-4"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[4].correctOne)
        if ($('input[name="question-4"]:checked').val() === QuestionsArray[4].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-5"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[5].correctOne)
        if ($('input[name="question-5"]:checked').val() === QuestionsArray[5].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-6"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[6].correctOne)
        if ($('input[name="question-6"]:checked').val() === QuestionsArray[6].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-7"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[7].correctOne)
        if ($('input[name="question-7"]:checked').val() === QuestionsArray[7].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        
        // result
        console.log('# Incorrect: ', game.incorrect)
        console.log('# Correct: ', game.correct)
        this.result();
    },

    // 8888888888888888888888888888888888888888888888888888888888888
   
    // 888888888888888888888888888888888888888888888888
    // display result
    result: function() {
        console.log("result");
        clearInterval(timer);
        $('#question h2').remove();

        $("#question").html("<h2> All Done!</h2>");
        $("#question").append("<h3>Correct Answer: "+this.correct+"</h3>");
        $("#question").append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
        $("#question").append("<h3>Unanswered:"+game.unanswered+"</h3>");

        // 88888888888888888888888888888888888888888888888888888888888888888
        console.image("image/paper.png");
        // 888888888888888888888888888888888888888888888888888888888888888888888888888888
    }
}
