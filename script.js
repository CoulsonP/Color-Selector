function selectRandomColor() {
  var colors = ["pink", "orange", "green", "purple", "blue", "yellow", "red", "brown"];
  var nameInput = document.getElementById("nameInput");
  var resultDiv = document.getElementById("result");

  var name = nameInput.value;
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  var selectedColor = colors[Math.floor(Math.random() * colors.length)];
  resultDiv.innerHTML = "<p><strong>" + name + "</strong> got the color <span style='color: " + selectedColor + ";'>" + selectedColor + "</span></p>";
}