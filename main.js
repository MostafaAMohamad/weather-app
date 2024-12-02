



async function getweather(country){
    let res= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f030b4fc4d524974a0e143636220706&q=${country}&days=3`);
    let final=await res.json();
            
    await display(final.location,final.current);
 await display_tomorrow(final.forecast.forecastday);
 await display_after(final.forecast.forecastday);
 
    console.log(final);
        
        
    }
    // (
    //     async function(){
    //         await getweather("par")

    //     })()
    

    document.getElementById("search").addEventListener("keyup",country=>{getweather(country.target.value)});
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];


     function display(location,current){
     var e=new Date(current.last_updated);
    
      let cartona=`
    
     <div class="header-card p-2 w-100 d-flex justify-content-between align-content-between">
          <div class="day w-25">${days[e.getDay()]}</div>
          <div class="date w-25  text-center">${e.getDate() +' '+' '+monthNames[e.getMonth()]}</div>
      </div>
     <div class="body-cart py-3 pb-2 w-100 my-2">
        <h5 class="location">${location.name}</h5>
        <div class="temp d-flex justify-content-between "><h1 class="degree fs-1 col-md-6">${current.temp_c}<sup>0</sup> C </h1> <img src="https:${current.condition.icon}" alt="" width=90></div>
     </div>
     <div class="condition py-2"><span><h6>${current.condition.text}</h6></span></div>
    <div class="condition py-4"> <span><img src="icon-umberella.png" alt="">20%</span>
    <span><img src="icon-wind.png" alt="">${current.vis_km}km/h</span>
    <span><img src="icon-compass.png" alt="">east</span>
</div>

     `
      document.getElementById('today').innerHTML=cartona;
      

  }


  function display_tomorrow(current){
    var e=new Date(current.date);
   
     let cart=`
   
    <div class="header-card p-2 w-100 d-flex justify-content-between align-content-between">
         <div class="day m-auto text-center w-25">${days[new Date(current[1].date).getDay()]}</div>   
        
     </div>
    <div class="body-cart py-3 w-100 my-2">
    <div class="m-auto w-25 text-center"><img src="https:${current[1].day.condition.icon}" alt="" width=50></div>
       <div class="temp py-2 m-auto w-50"><h1 class="degree m-auto text-center fs-4 col-md-6">${current[1].day.maxtemp_c}<sup>0</sup>C</h1></div>
       <div class="temp py-2  m-auto w-50"><h4 class="degree m-auto text-center fs-6 col-md-6">${current[1].day.mintemp_c}<sup>0</sup></h4></div>
       <span class="temp py-2 m-auto w-50" ><h6 class="degree m-auto p-auto fs-6 text-center col-md-6">${current[1].day.condition.text}</h6></span>
    </div>  
    
   


    `
     document.getElementById('tomorrow').innerHTML=cart;
     

 }


 function display_after(current){
    var e=new Date(current.date);
   
     let cart=`
   
    <div class="header-card p-2 w-100 d-flex justify-content-between align-content-between">
         <div class="day m-auto text-center w-25">${days[new Date(current[2].date).getDay()]}</div>   
        
     </div>
    <div class="body-cart py-3 w-100 my-2">
    <div class="m-auto w-25 text-center"><img src="https:${current[2].day.condition.icon}" alt="" width=50></div>
       <div class="temp py-2 m-auto w-50"><h1 class="degree m-auto text-center fs-4 col-md-6">${current[2].day.maxtemp_c}<sup>0</sup>C</h1></div>
       <div class="temp py-2  m-auto w-50"><h4 class="degree m-auto text-center fs-6 col-md-6">${current[2].day.mintemp_c}<sup>0</sup></h4></div>
       <span class="temp py-2 m-auto w-50" ><h6 class="degree m-auto p-auto fs-6 text-center col-md-6">${current[2].day.condition.text}</h6></span>
    </div>  
    
   


    `
     document.getElementById('af_tomo').innerHTML=cart;
     

 }




getweather('cairo');

