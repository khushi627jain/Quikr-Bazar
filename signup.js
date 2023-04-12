

let myForm = document.getElementById("myForm");
let userData = [];
myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("email").value;
    console.log(email)
    let name = document.getElementById("name").value;
    console.log(name)
    let mobileNo = document.getElementById("mobileNo").value;
    console.log(mobileNo)
    let password = document.getElementById("password").value;
    console.log(password)
    let confirmPassword = document.getElementById("confirmPassword").value;
    console.log(confirmPassword)

    if (email == "" || name == "" || mobileNo == "" || password == "" || confirmPassword == "") {
        alert("Please fill in all required fields.");
        return;
    }
    if (password !== confirmPassword) {
        alert("password didn't not match. Please Enter Correct Password");
        return;
    }

    // save the form data to local storage
let Data = { email:email, name:name, mobileNo:mobileNo, password:password, confirmPassword:confirmPassword }; 
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


