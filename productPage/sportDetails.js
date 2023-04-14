let array=JSON.parse(localStorage.getItem("allProductDetails"))
console.log(array)
var cartAr=JSON.parse(localStorage.getItem("cartProducts")) || [];

function displayData(array){
    array.map(function(arr){
    

    document.getElementById("show1").textContent=""
        let div=document.createElement("div")
        div.setAttribute("id","detailAndDesc")
        let divImage=document.createElement("div")
        divImage.setAttribute("id","divImage")
        let image=document.createElement("img")
        image.src=arr.url
        divImage.append(image)
        let adDetails=document.createElement("p")
        adDetails.textContent="Ad Details"
        let desc=document.createElement("p")
        desc.textContent="Description"
        let line=document.createElement("hr")
       line.setAttribute("id","hrTag")
      
        div.append(adDetails,desc)

        let allDetailsHeading=document.createElement("h2")
        allDetailsHeading.setAttribute("id","adHead")
        allDetailsHeading.textContent="Ad Details"

        let mainDiv=document.createElement("div")
        let mainDiv1=document.createElement("div")
        let mainDiv2=document.createElement("div")
        mainDiv1.setAttribute("id","innerMainDiv")
        mainDiv2.setAttribute("id","innerMainDiv")

        let subDiv1=document.createElement("div")
        let subDivHead1=document.createElement("p")
        subDivHead1.textContent="Ad ID"
        let subDivData1=document.createElement("p")
        subDivData1.textContent=arr.adid
        subDiv1.append(subDivHead1,subDivData1)
        subDiv1.setAttribute("id","subDiv")

        let subDiv2=document.createElement("div")
        let subDivHead2=document.createElement("p")
        subDivHead2.textContent="Condition"
        let subDivData2=document.createElement("p")
        subDivData2.textContent=arr.condition
        subDiv2.append(subDivHead2,subDivData2)
        subDiv2.setAttribute("id","subDiv")

        let subDiv3=document.createElement("div")
        let subDivHead3=document.createElement("p")
        subDivHead3.textContent="Product Type"
        let subDivData3=document.createElement("p")
        subDivData3.textContent=arr.subCategory
        subDiv3.append(subDivHead3,subDivData3)
        subDiv3.setAttribute("id","subDiv")

        let subDiv4=document.createElement("div")
        let subDivHead4=document.createElement("p")
        subDivHead4.textContent="Seller Type"
        let subDivData4=document.createElement("p")
        subDivData4.textContent=arr.sellerType
        subDiv4.append(subDivHead4,subDivData4)
        subDiv4.setAttribute("id","subDiv")

mainDiv1.append(subDiv1,subDiv2)
mainDiv2.append(subDiv3,subDiv4)
mainDiv.append(mainDiv1,mainDiv2)

let descHead=document.createElement("h2")
descHead.textContent="Description"
descHead.setAttribute("id","adHead")
let descPara=document.createElement("p")
descPara.setAttribute("id","descParagraph")

descPara.textContent=arr.description 

        
        document.getElementById("show1").append(divImage,div,line,allDetailsHeading,mainDiv,descHead,descPara)
   
    });

}


function displayDataright(array){
    array.map(function(ele){
        let span=document.createElement("span")
        span.textContent="GENTLY USED"
        span.setAttribute("id","span")
        document.getElementById("category").textContent=ele.subCategory+" ● " 
        document.getElementById("category").append(span)
        
         document.getElementById("titleHead").textContent=ele.title
         document.getElementById("priceShow").textContent=ele.price+"₹"
    })
}

document.getElementById("call").addEventListener("click",function(){
    event.preventDefault();
    array.map(function(array){
        console.log(array.title)
        let allDetails={
            title:array.title,
            price:array.price,
            mainCategory:array.mainCategory,
            subCategory:array.subCategory,
            condition:array.condition,
            date:array.data,
            adid:array.adid,
            sellerType:array.sellerType,
            description:array.description,
            url:array.url,
          }
    cartAr.push(allDetails)
    }) 

    localStorage.setItem("cartProducts",JSON.stringify(cartAr))
    location.href="cart.html"
})
 displayDataright(array)
 displayData(array)