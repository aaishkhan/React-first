import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState ('');
  // text = "new text" //wrong way to change the state
  // setText("new text");// correct way to change state

  const handleUpCase = ()=> {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerCase = ()=> {
    
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClearCase = ()=> {
  
    let newText = "";
    setText(newText);
  }
  const handleChangeColor = ()=> {
    let d = document.getElementById("myBox");
    d.style.color = "red";
  }
  const handleClipboardCopy = ()=> {
    navigator.clipboard.writeText(text)
    alert("copied to clipboard : " + text)
  }
  
  const handleOnChange= (event)=> {
    // console.log("on click");
    
   // let newText = document.getElementsById('myBox').style.color="red";
    setText(event.target.value);

  }
  
  return (
    <>
    <div>
      <h1 className='headingtextform1' style={color = 'dark'?'white':'dark'}>{props.heading}</h1>
      <div className="mb-3">
            <textarea className="form-control abcd" value = {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea><br/>
            <button className="btn btn-primary mx-2 buttonchange" onClick = {handleUpCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 buttonchange" onClick = {handleLowerCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 buttonchange" onClick = {handleClearCase}>Clear Text</button>
            <button className="btn btn-primary mx-2 buttonchange" onClick = {handleChangeColor}>Change color</button>
            <button className="btn btn-primary mx-2 buttonchange" onClick = {handleClipboardCopy}>Copy to clipboard</button>
      
      </div>
    </div>
    <div className="container">
      <h1 className='headingtextform2 py-3'>Your text summary</h1>
      <p className='paratextform1'><span className='paratextform1span'>{text.split(" ").length}</span> words and <span className='paratextform1span'>{text.length}</span> characters</p>
      <p className='paratextform1'><span className='paratextform1span'>{0.004 * text.split(" ").length}</span> minutes to read</p>
      <h1  className='headingtextform2 py-3'>Preview</h1>
      <p>{text}</p>

    </div>hr.xitijinfo@gmail.com
    </>
  )
  
}
