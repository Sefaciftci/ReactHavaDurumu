//axios get ile apideye istek atıcaz daha sonra gelen veriyi state te tutucaz daha sonra olusturduğumuz componenete statemizi props olarak yollıyıcaz
//gelen verileri componentte ekrana vericez
import axios from 'axios'
import { useEffect, useState } from 'react'

//destruction yöntemi
function Form({setInfoData,setControl}) {

  const [cityName , setCityName] = useState("");
  
  
  const handleChange = async () => {
    const key = '29b01eba7df39c35817237281b9ea0f0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    await axios.get(url).then((response)=> setInfoData(response.data));
    setControl(true);
  }
  

//sayfa yenilenmesinden kurtulmak için preventDefault() kullanırız.
  return (
    <div>
    <form onSubmit={(e)=> {e.preventDefault(); handleChange()}} >
      <input
      placeholder='City Name'
      type='text'
      onChange={(e)=>setCityName(e.target.value)}
      />
      <button type='submit'>
        Veri Çek
      </button>
    </form>
  </div>
  )
}

export default Form
