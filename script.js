var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".random");

console.log(color1.value)
css.textContent = body.style.background + ";";

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandomNumbers() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


btn.addEventListener("click", function() {
	color1.value = generateRandomNumbers();
	color2.value = generateRandomNumbers();
	setGradient();
})