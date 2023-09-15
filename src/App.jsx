//axios get ile apideye istek atıcaz daha sonra gelen veriyi state te tutucaz daha sonra olusturduğumuz componenete statemizi props olarak yollıyıcaz
//gelen verileri componentte ekrana vericez
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [weater,setWeater] = useState();
  const [city, setCity] = useState();

  
  const getWeaterData = async(city) => {
    const key = procces.env.REACT_API_WEATER_KEY; 
    try{
      const {data} = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      setWeater(data);
    }catch{
      alert("Beklenmedik bir hata oluştu.")
    }
  }
  console.log(weater);
  return (
    <>
      <div className='container'>
        <h1>Hava durumu</h1>
        <input
        type='text'
        placeholder='City name'
        value={city}
        onChange={(e)=> setCity(e.target.value)}
        />
        <button onClick={getWeaterData}>Click</button>
       
      </div>

    </>
  )
}

export default App
