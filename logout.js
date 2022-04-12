document.getElementById("playerName1").innerHTML = "Player 1 :" + userName1;
document.getElementById("playerName2").innerHTML = "Player 2 :" + userName2;
function logout(){
    localStorage.removeItem("userName1", userName1);
    localStorage.removeItem("userName2", userName2);
    window.location = "index.html";

}