

let myForm = document.getElementById("myForm");
let userData = JSON.parse(localStorage.getItem("userData"))|| [];
myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("email").value;

    let name = document.getElementById("name").value;

    let mobileNo = document.getElementById("mobileNo").value;

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;


    if (email == "" || name == "" || mobileNo == "" || password == "" || confirmPassword == "") {
        alert("Please fill in all required fields.");
        return;
    }
    if (password !== confirmPassword) {
        alert("password didn't not match. Please Enter Correct Password");
        return;
    }

    // save the form data to local storage
    let Data = {
        email: email,
        name: name,
        mobileNo: mobileNo,
        password: password,
        confirmPassword: confirmPassword
    };
    userData.push(Data);

    console.log(userData);

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Signup successful! You will be redirected shortly.");

    window.location.href = "password.html";

    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("mobileNo").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";

});


