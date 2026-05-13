let chocolates = 0;

function giveChocolate(){
  chocolates++;

  document.getElementById("count").innerText =
    chocolates + " Chocolates Given 🍫";

  alert("One virtual chocolate delivered with love ❤️");
}
