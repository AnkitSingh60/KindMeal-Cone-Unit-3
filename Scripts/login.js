var loginbtn = document.getElementById("lgbtn");
function loginnn(event) {
    event.preventDefault();
    let Eemail = document.getElementById("emaill").value;
    let Ppassword = document.getElementById("passwordd").value;
    var GetItem = localStorage.getItem('info');
    console.log('GetItem:', GetItem)
    GetItem = JSON.parse(GetItem);
    console.log('GetItem:', GetItem)
    if (Eemail == GetItem.email && Ppassword === GetItem.password) {
        alert("Login Successful");
        window.location.href="Food_Page.html";
        
    } else {
        alert("You are not registered! please signup");
        window.location.href="formSignup.html";
    }
}
loginbtn.addEventListener("click", loginnn);





