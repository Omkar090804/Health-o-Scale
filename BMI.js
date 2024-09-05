
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");

let resultArea = document.querySelector(".comment");
var modal = document.getElementById("myModal");   // without this all fields are required part is getting displayed
var modalText = document.querySelector("#modalText");
var span = document.getElementsByClassName("close")[0];    //to close the modal

function calculate() {
 
  if (age.value.trim() === '' || height.value.trim() === '' || weight.value.trim() === '' || (male.checked == false && female.checked == false)) {
    modal.style.display = "block";
    modalText.innerHTML = "All fields are required!";
  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }

  var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

  var result = '';
  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = 'Healthy';
  } else if (25 <= bmi && bmi <= 29.9) {
    result = 'Overweight';
  } else if (30 <= bmi && bmi <= 34.9) {
    result = 'Obese';
  } else if (35 <= bmi) {
    result = 'Extremely obese';
  }

  resultArea.style.display = "block";
  document.querySelector("#result").innerHTML = bmi.toFixed(2);   //toFixed is result fixed to 2 decimal places
  document.querySelector(".comment").innerHTML = `
    You are <span id="comment">${result}</span><br><br>
    <strong>BMI Categories:</strong><br>
    Underweight: BMI &lt; 18.5<br>
    Normal weight: BMI 18.5 - 24.9<br>
    Overweight: BMI 25 - 29.9<br>
    Obesity: BMI ≥ 30
  `;
}

span.onclick = function () {
  modal.style.display = "none";   
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
