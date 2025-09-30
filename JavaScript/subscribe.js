document.getElementById("subscribeButton").addEventListener("click", function() {
  var emailInput = document.getElementById("emailInput").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailInput === "") {
    alert("Please enter your email!");
    return;
  } else if (!emailPattern.test(emailInput)) {
    alert("Please enter a valid email address!");
    return;
  }
  document.getElementById("emailInput").style.display = "none";
  document.getElementById("subscribeButton").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
  setTimeout(function() {
    document.getElementById("emailInput").style.display = "inline-block";
    document.getElementById("subscribeButton").style.display = "inline-block";
    document.getElementById("thankYouMessage").style.display = "none";
    document.getElementById("emailInput").value = ""; 
  }, 2000); 
});
