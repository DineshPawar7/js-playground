import { useState } from "react"



export default function App() {

  let [hide, setHide] = useState("help")





  function handleClick() {


    setHide(hide)
    

  } handleClick()



  return (
    <>


<div className="  mt-20 bg-slate-300 max-w-3xl mx-auto p-5 rounded-xl">
  <h1 className="text-3xl font-bold justify-center flex">Frequntly Asks Quetions</h1>





<div className="mt-6 space-y-5 ">

  <div className="">
  <div>
      <h1>1. What is React <button onClick={handleClick} className="bg-red-600 p-2 rounded-full">+</button> </h1>
    <p>this is react </p>
  </div>
  </div>











  
  <div className="">
  <div>
      <h1>2. What is Javascript<button className="bg-red-600 p-2 rounded-full">+</button> </h1>
    <p>

{
  hide.map(hiding=>(

    <>{hiding}
    
    Javascript is a browser based programming language</>

  ))
}



    </p>
  </div>
  </div>




</div>


</div>
    
    </>
  )
}