// Signup
function signup() {
  alert("Signup successful! Please login.");
  window.location.href = "index.html";
  return false;
}

// Login
function loginCheck() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "admin" && p === "123") {
    window.location.href = "quiz.html";
    return false;
  } else {
    alert("Invalid Login");
    return false;
  }
}

// Quiz
function checkAnswer() {
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "a") score++;

  localStorage.setItem("quizScore", score);
  window.location.href = "result.html";
  return false;
}

// Timer
let time = 60;
function startTimer() {
  let timer = setInterval(() => {
    document.getElementById("timer").innerHTML = time;
    time--;

    if (time < 0) {
      clearInterval(timer);
      alert("Time up!");
      checkAnswer();
    }
  }, 1000);
}

// Logout
function logout() {
  window.location.href = "index.html";
}
