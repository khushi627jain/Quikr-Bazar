let userData=JSON.parse(localStorage.getItem("userData"))||[];

console.log(userData)
const email=document.getElementById("email");
const password=document.getElementById("password")

document.getElementById("myForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    userData.map((elem)=>{
        const emailvalue=email.value;
        const passwordvalue=password.value;

let name=document.createElement("p");
name.innerHTML=elem.name;
        // let loginObj={
        //     name:name
        // }
        
        if(emailvalue==elem.email && passwordvalue==elem.password ){
            localStorage.setItem("userData",JSON.stringify(userData));
             console.log("YES")
            // alert("login Successfull")
            location.href="navbar.html"
        }else{
            alert("wrongCrenditals")
        }
    })
})


