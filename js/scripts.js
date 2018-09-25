function check() {
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  var q5 = document.quiz.q5.value;
  var result = 0;
  if(q1=="ECMAS") {
    result+=30;
  }
  if(q2=="A language tha interact with the user") {
    result+=20;
  }
  if(q3=="true") {
    result+=30;
  }
  if(q4=="TRUE") {
    result+=10;
  }
  if(q5=="YES") {
    result+=10;
  }
  document.getElementById("answer").style.visibility="visible";
  document.getElementById("answer").innerHTML="you got "+result+" marks";
  document.getElementById("all").style.visibility="hidden";
}
