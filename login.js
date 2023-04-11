
var email = document.getElementById("email");
var userData = JSON.parse(localStorage.getItem("userData")) || [];
localStorage.setItem("userData", JSON.stringify(userData));
console.log(userData)

document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const emailvalue = email.value;
    userData.map((elem) => {
        if (elem.email === emailvalue) {
            location.href = "password.html"
        } else {
            alert("Please SignUp ")
            location.href = "signup.html"
        }
    });
    
})