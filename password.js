let userData=JSON.parse(localStorage.getItem("userData"))||[];

console.log(userData)
const email=document.getElementById("email");
const password=document.getElementById("password")

document.getElementById("myForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    userData.map((elem)=>{
    const emailvalue=email.value;
    const passwordvalue=password.value;


    if(emailvalue==elem.email && passwordvalue==elem.password ){
        alert("login Successfull")
    }else{
            alert("wrongCrenditals")
        }
    })
    document.getElementById("password").textContent="";



})

