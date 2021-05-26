player1_game=localStorage.getItem("player1_name");
player2_game=localStorage.getItem("player2_name");

score1=0;
score2=0;

document.getElementById("player1_name").innerHTML=player1_game+":";
document.getElementById("player2_name").innerHTML=player2_game+":";

document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;

document.getElementById("player_question").innerHTML="question turn :"+player1_game;
document.getElementById("player_answer").innerHTML="answer turn :"+player2_game;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case:" +answer);
    if(answer==word)
    {
        if(answer_turn=="player1")
        {
            score1=score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else{
            score2=score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn: "+player2_game;

    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn: "+player1_game;

    }

    if(answer_turn=="player2")
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn: "+player1_game;
    }

    else{
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn: "+player2_game;
    }

    document.getElementById("output").innerHTML="" ;
    
}
