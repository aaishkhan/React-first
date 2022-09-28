import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"

function App() {
  const [mode, setMode] = useState ('light'); // whether dark mode is enabled or not

  const darkToggle = ()=>{
    if(mode === 'dark'){
      setMode ('light')
      document.body.style.backgroundColor = 'white'

    } else{
      setMode ('dark')
      document.body.style.backgroundColor = 'black  '
    }
  }
  return (
  
    <>
    <Navbar title = "Lycan" aboutText = "Aboutt" mode = {mode} darkToggle={darkToggle}/>
    <div className="container">
    <TextForm heading = "Enter the text to analyze below" mode = {mode}/>
    <About/>
    </div>
    </>
  );
}

export default App;
  