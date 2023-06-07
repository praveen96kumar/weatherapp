const clocks = document.querySelector('[data-clock]')
const summaries = document.querySelector('[data-summary]')
const place = document.querySelector('[data-place]')
const temp = document.querySelector('[data-temp]')

setInterval(()=> {
    clocks.innerText=new Date().toLocaleTimeString('en-US', { hour12: false, 
      hour: "numeric", 
      minute: "numeric"});
},1000)


window.addEventListener('load', () =>{

    if(navigator.geolocation){
        
       navigator.geolocation.getCurrentPosition( async position =>{
        let lat =   position.coords.latitude ;
        let long =   position.coords.longitude;
          
      
        const api =`weatherstatus/${lat},${long}`;

        const response = await  fetch(api)
        const data = await  response.json()
              console.log(data)
               


            
                    const {temperature, summary,icon} = data.currently

                    summaries.innerText = summary
                    temp.innerText =temperature + 'F'

                    place.innerText = data.timezone
                    
                     var icons= icon;
                     var iconselected = icons.replace(/-/g, "_").toUpperCase();
                     console.log(iconselected)

                      var iconid = document.querySelector("#icon1")
                      sky(iconselected,iconid)

          
                     })
                    function sky (iconselected,iconid){
                       
                     var skycons = new Skycons({"color": "#707070"});

                    
                    skycons.play()
                    return skycons.set(iconid, Skycons[iconselected])
                    }
                  }
                    
                 })
               
        


               