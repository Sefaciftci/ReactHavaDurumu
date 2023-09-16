import React from 'react'
//destruction yöntemi
function Info({infoData, control}) {
  return (

   <div>
     {control ? 
     <div>
      <p> Sehir adi: {infoData.name}</p>
        <div>
           <p>Sicaklik : {infoData.main.temp}</p>
           <p> description: {infoData.weather[0].description}</p>
        </div>
    
        <div>
            <p>Hissedilen sicaklik {infoData.main.feels_like} </p>
        </div>
    </div>
      :  
      null
      }
   </div>
    
  )
}

export default Info
