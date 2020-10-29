import React, { useState } from "react";
 
function operation(){
  const [input , setInput] = useState('');
     

 
}
function concate(){

}
function KeyPad() {
   
  return (
    < div>
     <input type ="text"  ></input>
          <br/>
         <button name ="AC"> C </button>
    <button name ="1" onClick ={ ()=>operation }> 1 </button> 
     <button name ="1" onClick = {concate(2)}> 2 </button>
     <button name ="1"> 3 </button>
     <button name ="-"> - </button>

      <br/>
     <button name ="x"> x </button>
     <button name ="1"> 4 </button>
     <button name ="1"> 5 </button>
     <button name ="1"> 6 </button> 
     <button name ="+">+ </button>
     
     <br/> 

     <button name ="/"> / </button> 
     <button name ="1"> 7 </button>
     <button name ="1"> 8 </button>
     <button name ="1"> 9 </button>
     <button name ="="> = </button>

    </div>
  );
}

export default KeyPad;