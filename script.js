function signup() {
  const email = document.getElementById("email").value;
  const vouch = document.getElementById("vouch").value;

  if (!email) {
    alert("Email required");
    return;
  }

  localStorage.setItem("user", email);

  alert("Welcome to Kindred 🤍");
  window.location.href = "dashboard.html";
}


function postRequest() {
  const req = document.getElementById("request").value;

  if (!req) {
    alert("Please share something");
    return;
  }

  alert("Searching for Kindred nearby...");
  window.location.href = "hearth.html";
}