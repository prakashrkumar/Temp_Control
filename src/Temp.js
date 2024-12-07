import React, { useEffect, useState } from 'react'
import "./Temp.css"
import Mobile from "./Assests/Mobile.jpg"

const Temp = () => {
    const [temp, setTemp]=useState(12)
    const [color,setColor]=useState("#34495e")
    const HandlerPlus=()=>{
      setTemp(temp+1);
      if(temp>=37){
        setColor("red")
      }
    }
    const HandlerMinus=()=>{
        setTemp(temp-1)
        if(temp<=0){
            setColor("red")
        }
    }
    useEffect(()=>{
      console.log("hello bro kay hal hai")
    },[color])





  return (
    <div className='temp'>
    
   
    <div className='temp_img' >
    <img src={Mobile} alt='Mobileligo' style={{width:"100%"}}/>
    </div>
    <div className='temp_display'>
    <div className='actual_temp'style={{background:color}}>{temp}°C</div>
    <div className=' temp_btn'>
    <button onClick={HandlerPlus}>+</button>
    <button onClick={HandlerMinus}>-</button>


    </div>
    </div>
    
   
    </div>
  )
}


  
{/*
const Temp=()=>{
   {/* const [number,setNumber]=useState([2,5,6,4])// es me 10,20,30,add karnana chata hu
    const handleadd=()=>{
        setNumber([...number,10,20,30])
    }*/}
  
{/* const [data,setdata]=useState({name:"Anupam",age:27});
   const handlerchange=()=>{
    setdata({...data,name:"Prakash",age:"24"});
   }*/}
   {/*const [obj,setobj]=useState(
    [ 
    {name:"Pooja Bhushan",age:"23"},
    {name:"priyanka",age:"29"},
    {name:"prakash",age:30}
    ]
   )
*/
}
    //return(
       <div className='temp'>
       {
        /*<p>number{number}</p>
     <button onClick={handleadd}>add</button>*/
       }
      {/* const [data,setdata]=useState({name:"Anupam",age:27});
   const handlerchange=()=>{
    setdata({...data,name:"Prakash",age:"24"});
   }*/}
  {/* <p>my name is {obj[1].name} and age is {obj[2].age}</p>*/}
  
       </div>
  //  )
 //}}




 
 
 
 

export default Temp