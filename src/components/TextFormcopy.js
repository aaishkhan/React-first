import React, {useState} from 'react'

export default function TextFormcopy(props) {
      const [text, setText]  = useState("enter text here");
      const upperCaseText = ()=> {
            let newText = text.toUpperCase();
            setText(newText);
      }
      const upperCaseChanged = (event)=> {
           
            setText(event.target.value);
      }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange= {upperCaseChanged} id="myBox" rows="8"></textarea><br/>
        <button className="btn btn-primary" onClick={upperCaseText}>Convert into Uppercase</button>
      </div>
    </div>
  )
}
