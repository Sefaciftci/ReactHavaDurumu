//axios get ile apideye istek atıcaz daha sonra gelen veriyi state te tutucaz daha sonra olusturduğumuz componenete statemizi props olarak yollıyıcaz
//gelen verileri componentte ekrana vericez
import axios from 'axios'
import {  useState } from 'react'
import {  FaSearch } from 'react-icons/fa';
import './Form.css';
//destruction yöntemi
function Form({setInfoData,setControl}) {

  const [cityName , setCityName] = useState("");
  
  
  const handleChange = async () => {
    const key = '29b01eba7df39c35817237281b9ea0f0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    await axios.get(url).then((response)=> setInfoData(response.data));
    setControl(true); //submit oldugu zaman true ta döner ,infodaki kontrolü true döner
  }
  

//sayfa yenilenmesinden kurtulmak için preventDefault() kullanırız.
  return (
    <div className='form-div'>
    <form className='form-box' onSubmit={(e)=> {e.preventDefault(); handleChange()}} >
      <input
      placeholder='City Name'
      type='text'
      onChange={(e)=>setCityName(e.target.value)}
      />
      <button type='submit'>
      <FaSearch/>
      </button>
    </form>
  </div>
  )
}

export default Form
