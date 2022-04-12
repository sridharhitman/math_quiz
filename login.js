function login(){
    var userName = document.getElementById("userInput").value;
    localStorage.setItem("userName", userName);
    window.location = "ques.html";
    
}

