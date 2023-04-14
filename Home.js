



    // fetching data from API and Showing on page

    async function getData(url){
        try{
            let res = await fetch(url);
            let data = await res.json();
            
            return data;
        }
        catch(err){
            console.log(err);
        }
    }
    function appendData(data){
        console.log(data);

        let Head = document.createElement("h2");
        Head = data.name;
        showCityNmae.append(Head);

        let temp = document.createElement("p");
       temp = data.main.temp;
       showTemp.append( temp);
       let FeelsTemp = document.createElement("p");
       FeelsTemp = data.main.feels_like;
       feels.append(FeelsTemp);

       let showHumidity = document.createElement("p");
            showHumidity = data.humidity;
            appendMain.append(showHumidity);
            

       data.weather.forEach((i) =>  {
        console.log(data.weather);
            // let div = document.createElement("div");
            let p = document.createElement("p");
           
            p.textContent = i.description;
           
            
            feels.append(p);

        });
        
    }
    
    let response = getData(
            `http://localhost:3000/posts`
         );

    response.then((res) => {
        appendData(res);
    }).catch((err)=> {
        console.log(err);
    });

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

    
const searching = document.getElementById("search").value ;