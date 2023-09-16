import React, { useState } from "react"
import Form from "./Form"
import Info from "./Info"
function App() {
   //statemizi app.jsx de oluşturduk ve formdaki cektigimiz veirleri alıp ınfoya aktardık

   const [infoData, setInfoData] = useState([]); 
   const [control, setControl] = useState(false);
  return (
   <div>
     <Form setInfoData= {setInfoData} setControl= {setControl}/>
     <Info infoData={infoData} control = {control}/>
   </div>
  )
}

export default App;
