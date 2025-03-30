import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
let [Uppercase, setUppercase] = useState(false)
let [Lowercase, setLowercase] = useState(false)
let [Number, setNumber] = useState(false)
let [Symbol, setSymbol] = useState(false)
let [PasswordLen, setPasswordLen] = useState(10)
let [fpass, setfpass] = useState('')


let createPassword=()=>{
  let finalpass=''
  let charSet=''
 if(Uppercase || Lowercase || Number || Symbol){
  if(Uppercase) charSet+=UC;
  if(Lowercase) charSet+=LC;
  if(Number) charSet+=NC;
  if(Symbol) charSet+=SC;
  for(let i=0;i<PasswordLen;i++){
    finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
  }
  setfpass(finalpass)
 }
 else{
  alert("select atleast one checkbox")
 }
}

let copypass=()=>{
  navigator.clipboard.writeText(fpass)
}
  return (
    <>
    <div className='passwordBox'>
     <h2>Password Generator</h2>
     <div className='passwordBoxin'>
      <input type='text' value={fpass} readOnly/> <button onClick={copypass}>Copy</button>
    </div>
    <div className='passLength'>
      <label>Password Length</label>
      <input type='number' max={20} min={8} value={PasswordLen} onChange={(event)=>setPasswordLen(event.target.value)}/>
    </div>
    <div className='passLength'>
      <label>Include Uppercase</label>
      <input type='checkbox' checked={Uppercase} onChange={()=>setUppercase(!Uppercase)}/>
    </div>
    <div className='passLength'>
      <label>Include Lowercase</label>
      <input type='checkbox' checked={Lowercase} onChange={()=>setLowercase(!Lowercase)}/>
    </div>
    <div className='passLength'>
      <label>Include Number</label>
      <input type='checkbox' checked={Number} onChange={()=>setNumber(!Number)}/>
    </div>
    <div className='passLength'>
      <label>Include Symbol</label>
      <input type='checkbox' checked={Symbol} onChange={()=>setSymbol(!Symbol)}/>
    </div>
    <button className='btn' onClick={createPassword}>Generate Password</button>
    </div>
   
    </>
  );
}

export default App;
