let currentCategory=localStorage.getItem("category");
console.log(currentCategory)
let data="";
let pageNo=1;
let url=`http://localhost:8080/product?subCategory=${currentCategory}&_page=${pageNo}&_limit=7`;
async function main(url){
     data=await fetch(url)
    data =await data.json()
    displayData(data)

}

// display function for displaying the data
function displayData(data){
    document.getElementById("showProduct").textContent=""
data.map(function(ele){
    let div=document.createElement("div")
   let image=document.createElement("img")
   image.src=ele.url
   let price=document.createElement("h3")
      price.textContent=ele.price+"₹"
   let title=document.createElement("p")
   title.textContent=ele.title
   let infoDiv=document.createElement("div")
   infoDiv.setAttribute("id","infoDiv")
   let condition=document.createElement("p")
   condition.textContent=ele.condition
   let date=document.createElement("p")
   date.textContent=`${ele.date} days ago`
   let viewBtn=document.createElement("button")
   viewBtn.setAttribute("id","viewBtn")
   viewBtn.textContent="VIEW"
   viewBtn.addEventListener("click",function(){
    showAllDetails(ele)
   })
infoDiv.append(condition,date,viewBtn)
div.append(image,price,title,infoDiv)
   document.getElementById("showProduct").append(div)
})
}

let arr=[]
function showAllDetails(ele){
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

// filtering according to type of product
    let products = Array.from(document.getElementsByClassName("productType"));
    
    products.forEach(function(product) {

      product.addEventListener("click", function(event) {
        const checkbox=event.target
        if(checkbox.checked){
        const productType = event.target.getAttribute("data-page-type");
        url=`http://localhost:8080/product?subCategory=${productType}`
        main(url)
        }
        else{
          url=`http://localhost:8080/product?subCategory=${currentCategory}`
          main(url)
        }
      });
    });


    // filtering according to the limit of price
    let productsforPrice = Array.from(document.getElementsByClassName("sortPriceLimit"));
    
    productsforPrice.forEach(function(productsforPrice) {

        productsforPrice.addEventListener("click",async function(event) {
          const checkbox=event.target
        const productType = event.target.getAttribute("data-page-type");
        let minprice;
        let maxprice;
        if(checkbox.checked){
          if(productType==1){
            minprice=0;
            maxprice=1000;
          }
          else if(productType==2){
            minprice=1000;
            maxprice=5000;
          }
          else if(productType==3){
            minprice=5000;
            maxprice=10000;
          }
          else if(productType==4){
            minprice=10000;
            maxprice=15000;
          }
          else if(productType==5){
            minprice=15000;
            maxprice=50000;
          }
        console.log(maxprice)
         data=await fetch(url)
        data=await data.json()
        let filteredData=data.filter(function(ele){
            return ele.price>=minprice&&ele.price<=maxprice
        })
        filteredData.sort(function(a, b) {
            return a.price - b.price;
          });
          displayData(filteredData);
        }
        else{
      main(url);
        }
      
       
        
      });
    });


    // filtering accoprding to condition
    let usedProducts = Array.from(document.getElementsByClassName("usedFilter"));

    usedProducts.forEach(function(product) {
      product.addEventListener("click", function(event) {
        const checkbox = event.target;
        const productType = checkbox.getAttribute("data-page-type");
        let type;
        if(productType=="Used")
        {
         type="New"
        }
        else{
          type="Used"
        }
        if (checkbox.checked) {
          url = url.replace(`&condition=${type}`, '');
          url = url.replace(`&condition=${productType}`, '');
          url += `&condition=${productType}`;
        } else {
          // Remove the condition from the URL if it was unchecked
          url = url.replace(`&condition=${productType}`, '');
        }
        console.log(url);
        main(url);
      });
    });
    
    // filtering according to new arrivals 
      document.getElementById("popular").addEventListener("click",popularData)
   async function popularData(){
         data=await fetch(url)
        data=await data.json()
        let filteredData=data.filter(function(ele){
          return ele.date<=10
        })
        filteredData.sort(function(a, b) {
            return a.date - b.date;
          });
          // url=`http://localhost:8080/product?_date<10`
          console.log(filteredData)
        displayData(filteredData);
      }

    //   filtering data low to high
    document.getElementById("lth").addEventListener("click",lowToHigh)
    async function lowToHigh(){
      url=url.replace(`&_sort=price&_order=desc`,``)
      url=url.replace(`&_sort=price&_order=asc`,``)
      url+=`&_sort=price&_order=asc`
      main(url)
       }
     
       //   filtering data high to low
    document.getElementById("htl").addEventListener("click",highToLow)
    async function highToLow(){
      console.log(url)
      url=url.replace(`&_sort=price&_order=desc`,``)
      url=url.replace(`&_sort=price&_order=asc`,``)
         url+=`&_sort=price&_order=desc`
         console.log(url)
         main(url)
       } 


    //   for clearing all filter
    document.getElementById("clearAllFilter").addEventListener("click",function(){
        url=`http://localhost:8080/product?subCategory=${currentCategory}`
        console.log(url)
        
          var checkboxes = document.querySelectorAll('input[type=checkbox]');
          for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
          }
        
        
        main(url)
    })


  //  for showing frop down filters
   document.getElementById("showDownCondition").addEventListener("click",function(){
    let element=document.getElementById("productTypeFilter4")
    if(element.style.display===`none`){
      element.style.display="block"
    }
    else
    element.style.display="none"
  })
  
  document.getElementById("showDownProduct").addEventListener("click",function(){
    let element=document.getElementById("productTypeFilter1")
    if(element.style.display===`none`){
      element.style.display="block"
    }
    else
    element.style.display="none"
  })
  
  document.getElementById("showDownPrice").addEventListener("click",function(){
    let element=document.getElementById("productTypeFilter2")
    if(element.style.display===`none`){
      element.style.display="block"
    }
    else
    element.style.display="none"
  })
  
  document.getElementById("showDownPostedBy").addEventListener("click",function(){
    let element=document.getElementById("productTypeFilter3")
    if(element.style.display===`none`){
      element.style.display="block"
    }
    else
    element.style.display="none"
  })
  

  // previous side
document.getElementById("previous").addEventListener("click",previous)
function previous(){
    if(pageNo==1){
        return;
    }
    url=url.replace(`&_page=${pageNo}&_limit=7`,``)
    pageNo--;
    document.getElementById("pageNo").textContent=pageNo
    url+=`&_page=${pageNo}&_limit=7`
    main(url);
}
//next side
document.getElementById("next").addEventListener("click",next)
function next(){
  url=url.replace(`&_page=${pageNo}&_limit=7`,``)
    pageNo++;
    document.getElementById("pageNo").textContent=pageNo
    
    url+=`&_page=${pageNo}&_limit=7`
  console.log(url)
    main(url);
}



 main(url);
