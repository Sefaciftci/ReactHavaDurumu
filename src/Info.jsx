import React from 'react'
import './Info.css';
//destruction yöntemi
function Info({infoData, control}) {
  return (
    //control : veri cekilip cekilmediğini kontrol eder 
   <div className='info-box'>
     {control ? 
     <div>
      <p> Şehir : {infoData.name}</p>
        <div>
           <p>Sıcaklık  : {infoData.main.temp}</p>
           <p> Hava Durumu: {infoData.weather[0].description}</p>
        </div>
    
        <div>
            <p>Hissedilen Sıcaklık:  {infoData.main.feels_like} </p>
        </div>
    </div>
      :  
      null
      }
   </div>
    
  )
}

export default Info
