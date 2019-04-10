//Hämtar hem en sträng från LS och sparar ned i variabler
let n = localStorage.getItem("name");
let e = localStorage.getItem("email");
let p = localStorage.getItem("phone");
let s = localStorage.getItem("streetname");
let z = localStorage.getItem("zip");
let c = localStorage.getItem("city");

// Hämtar ID med succeed och skriver ut orderbekräftelse
let succeed = document.getElementById("succeed");
succeed.innerHTML =
  "Din order har mottagits! </br> " +
  " Den kommer att levereras till : </br>" +
  n +
  "</br> " +
  s +
  "</br> " +
  z +
  " " +
  c +
  " </br> </br> En bekräftelse har skickats till </br>  " +
  e;

$(document).ready(function() {
  //Klickar du på knappen med ID back-to-index så hamnar du på shopping sidan igen och LS töms.
  $("#back-to-index").click(function() {
    localStorage.clear();
  });
});
