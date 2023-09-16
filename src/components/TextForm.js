import React ,{ useState } from "react";


export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Uppercase was clicked:" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uowercase!","success");
  }

  const handleClearClick=()=>{
    
    let newText='';
    setText(newText)
    props.showAlert("Clear Text !","success");

  }

  const speak =()=>{
    let msg =new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Listen Carefully!","success");

  }

  const handleLoClick=()=>{
    //console.log("Uppercase was clicked:" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");

  }

  const handleOnChange=(event)=>{    //console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] =useState('');

  return (
    
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder="Start here..." value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#16466e':'white',color:props.mode ==='dark'?'white':'#042743'}} id="MyBox" rows="5"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>  Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>  Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

       <button disabled={text.length===0} type="Submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something for Preview"}</p>
      </div>
    </div>
  )
}
