import React,{useState} from 'react'
function Calculator(){
    const [state, setstate]=useState(0)
    const [state2,setstate2]=useState([])
    const [result,setresult]=useState()
    function addstate(e){
        setstate2(state2=>[...state2,e.target.value]);
    }
    function add(value) {
        setstate(value.target.value)
    }
    function result2(){
        if(state==='+'){
            let result3=state2.map(function (x) { 
                return parseInt(x, 10); 
              });
            let sum = result3.reduce(function(a, b){
                return a + b;
            }, 0);
            setresult(sum)
        }
        if(state==='*'){
            let result3=state2.map(function (x) { 
                return parseInt(x, 10); 
              });
            let sum = result3.reduce(function(a, b){
                return a * b;
            },);
            setresult(sum)
        }
    }
    return(
        <>
        <button value ={1} onClick={(e)=>addstate(e)}>1</button>
        <button value ={2} onClick={(e)=>addstate(e)}>2</button>
        <button value='+'  onClick={(e)=>add(e)}>+</button>
        <button value='*'  onClick={(e)=>add(e)}>*</button>
        <button onClick={()=>result2()}>=</button>
        {result}
        </>
    )
}
export default Calculator;