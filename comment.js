function greet() {
    var experience = prompt("What is your experience?");
    if (experience) {
      var greeting = "Thanks for sharing experience with us.";
      document.getElementById("greeting").textContent = greeting;
    }
  }