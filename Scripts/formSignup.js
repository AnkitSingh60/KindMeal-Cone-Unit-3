
console.log("here");
var array =[];

function JoinNow(){

var JoinData = {
firstname:document.getElementById('firstname').value,
lastname:document.getElementById('lastname').value,
email:document.getElementById('email').value,
password:document.getElementById('password').value,
username:document.getElementById('username').value,

}
console.log('JoinData:', JoinData)
var data = JSON.stringify(JoinData)
localStorage.setItem('info',data)

var GetItem = localStorage.getItem('info')
array.push(GetItem)
console.log(array)
clearData()
alert("Signup successful ! Please login to continue ")
window.location.href="./loginPopup.html"
}

function clearData(){
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').value = '';
   
}



