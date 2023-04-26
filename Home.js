



    // fetching data from API and Showing on page

    
    // navbar js ==========
    let userData=JSON.parse(localStorage.getItem("userData"))||[];

    console.log(userData);
    
    
    let name=document.getElementById("login");
    
    userData.forEach(ele => {
        name.innerHTML=` Welcome! ${ele.name}`;
        console.log(ele.name);
    });
    

    // navbar js ends===============


    // for search 

let timerId;
function debounce(func,time){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId=setTimeout(func,time)
   
}
async function main(){
    let data =await fetchMovie();
    if(!data){
        return false;
    }
    displayData(data);
}

async function fetchMovie(){
    try{
        const searching = document.getElementById("search").value ;
   console.log(searching)
        let url=`https://fragile-zipper-ox.cyclic.app/product?subCategory=${searching}`;
    let data =await fetch(url)
    data=await data.json();

   
    console.log(data)
    
    return data
    }
    catch(err){
        console.log(err)
    }
}

function displayData(data){
    let dataShow=document.getElementById("showMovies")
    dataShow.style.display="block"
    document.getElementById("showMovies").textContent="";
    let btn=document.createElement("h3")
btn.textContent="Clear";
btn.style.color="#008bcf"
btn.addEventListener("click",function(){
    // document.getElementById("search").textContent=""
    dataShow.style.display="none"
    document.getElementById("search").value=""

})
document.getElementById("showMovies").append(btn)
data.map(function(ele){
    console.log("hey")
let movieCard=document.createElement("p");
movieCard.textContent=ele.title;

// show movie detail
movieCard.addEventListener("click",showAllDetails)
function showAllDetails(){
    let arr=[]

  let allDetails={
    title:ele.title,
    price:ele.price,
    mainCategory:ele.mainCategory,
    subCategory:ele.subCategory,
    condition:ele.condition,
    date:ele.data,
    adid:ele.adid,
    sellerType:ele.sellerType,
    description:ele.description,
    url:ele.url,
  }
  arr.push(allDetails)
  localStorage.setItem("allProductDetails",JSON.stringify(arr))
  location.href="kidsDetails.html"
 
}

//=============
document.getElementById("showMovies").append(movieCard)
})

}

