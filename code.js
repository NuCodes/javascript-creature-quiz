/**
 * hides intro and show question 1
 */
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question 1 shows question 2
 */
function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question 2 shows question 3
 */
function question3() {
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "inline-block";
}

/**
 * hides question 3 shows question 4
 */
function question4() {
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "inline-block";
}

/**
 * hides question 4 shows question 5
 */
function question5() {
  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "inline-block";
}

/**
 * hides question 5 shows question 6
 */
function question6() {
  document.getElementById("question5").style.display = "none";
  document.getElementById("question6").style.display = "inline-block";
}

/**
 * hides question 6 shows results
 */
function results() {
  calculateResults()
  document.getElementById("question6").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}

/**
 * calculates and displays the results
 */
function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
  }

  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
  }

  const radios6 = document.querySelectorAll('input[name="quest6"]');
  let q6Value;
  for (const rb of radios6) {
      if (rb.checked) {
          q6Value = rb.value;
          break;
      }
  }

  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value); 
  result = total / 6;
  
  if (result > 2)  {
    msg = "You are a DAEMON. An artistic creature who lives life chaotically, your strongest characteristic is your awe-inspiring creativity. Gifted, unpredicatable and with a touch of madness, your passions are all-consuming, you live life vividly and exist as a square peg in a round world. You struggle with monotony and the drudgery of day-to-day life."; 
  } else if (result >= 1.5) {
    msg = "You are a WITCH. A creature who has inherited supernatural powers from the past and brings them to the present day. Highly practical and organised, you can perform magic using spells and herbs, harnessing the power of nature. Neither uniformaly good, nor uniformly evil, each witch is distinctly individual and makes their own choice about the path to follow.";
  } else if (result >= 0.5) {
    msg = "You are a VAMPIRE. The most elegant and disciplined of all the creatures, you are famed for your stunning beauty, charm, and powers of persuasion. Although you have a dark side, you are extraordinarily good at social shapeshifting and can easily adapt to changing circumstances and new experiences such as moving to another country, learning different languages, and forming relationships with others.";
  } else {
    msg = "Unable to provide an accurate result. Please refresh the page and re-take the quiz.";
  }
  document.getElementById("result").innerHTML = msg
}
