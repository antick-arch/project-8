document.getElementById("login-btn").addEventListener('click',function(){
    const inputTxt = document.getElementById("inputTxt");
    const usr = inputTxt.value;
    console.log(usr);
    const inputPass = document.getElementById("inputPass");
    const pass = inputPass.value;
    console.log(pass);

    if(usr === '01234567890' && pass === '1234'){
        alert("Login Successful");
        window.location.assign("home.html");
    }
    else{
        alert("Try Again");
    }
})