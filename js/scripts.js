function checked(){
  var question1 =  document.getElementByName("question1").value;
  var question2 =  document.getElementByName("question2").value;
  var question3 =  document.getElementByName("question3").value;
  var question4 =  document.getElementByName("question4").value;
  var question5 =  document.getElementByName("question5").value;
  var question6 =  document.getElementByName("question6").value;
  var correct = 0;
  if (question1=="ECMAS"){
    correct+=16;
  } else (question1=="HTML"||"CSS") {
    correct+=0
  }
  if (question2=="A language that interact with the user") {
    correct+=16;
  } else (quetion2==""){
  if (question3=="YES"){
    correct+=16;
  }
  if (question4=="True"){
    correct+=16;
  }
  if (question5=="YES"){
    correct+=16;
  }
  if (question6=="Aperator that give a remainder of dividing two numbers"){
    correct+=20;
  }
  document.getElementById("number_correct").innerHTML=correct;
}
