let userData = JSON.parse(localStorage.getItem("userData")) || [];

console.log(userData)
const email = document.getElementById("email");
const password = document.getElementById("password")

document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let temp = false;
    const emailvalue = email.value;
    const passwordvalue = password.value;

    for (let index = 0; index < userData.length; index++) {
        const elem = userData[index];

        let name = document.createElement("p");
        name.innerHTML = elem.name;
        if (emailvalue == elem.email && passwordvalue == elem.password) {
            temp = true;
            break;
        }
    }
    if (temp) {
        // localStorage.setItem("userData", JSON.stringify(userData));
        console.log("YES")
        location.href = "navbar.html"
    } else if (emailvalue == "" || passwordvalue == "") {
        alert("Please fill in all required fields.");
    }
    else {
        alert("wrongCrenditals")
    }


})


