let userData=JSON.parse(localStorage.getItem("userData"))||[];

console.log(userData);


let name=document.getElementById("login");

userData.forEach(ele => {
    name.innerHTML=` Welcome! ${ele.name}`;
    console.log(ele.name);
});
