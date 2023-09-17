import React, { useState } from "react"
import Form from "./Form"
import Info from "./Info"
import './App.css'
function App() {
   //statemizi app.jsx de oluşturduk ve formdaki cektigimiz verileri alıp ınfoya aktardık

   const [infoData, setInfoData] = useState([]); 
   const [control, setControl] = useState(false);
  return (
   <div className="app-div">
    <h1 className="app-title">HAVA DURUMU APP</h1>
     <Form setInfoData= {setInfoData} setControl= {setControl}/>
     <Info infoData={infoData} control = {control}/>
   </div>
  )
}

export default App;
