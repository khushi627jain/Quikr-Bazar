
var email = document.getElementById("email");


var userData = JSON.parse(localStorage.getItem("userData")) || [];

console.log(userData)

document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(userData);
    const emailvalue = email.value;
    if (userData.length === 0) {
        alert("Please SignIn")
        window.location.href = "signup.html"
    } else {

        let temp=false;
        for (let index = 0; index < userData.length; index++) {
            const elem = userData[index];
            if (elem.email === emailvalue) {
                temp=true;
                break;
            } 
        }


        
        if(temp){
            window.location.href = "password.html";
        }else {
            alert("Please Signin...");
            window.location.href = "signup.html"
        }
    }
    localStorage.setItem("userData", JSON.stringify(userData));

})