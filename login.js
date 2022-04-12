function login(){
    var userName1 = document.getElementById("userInput1").value;
    localStorage.setItem("userName1", userName1);
    var userName2 = document.getElementById("userInput2").value;
    localStorage.setItem("userName2", userName2);
    window.location = "ques.html"; 

}


