import React, {useState} from "react";   

export default function TextForm(props) {                    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);            
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = ()=>{ 
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
  }

  const handleReverseClick = ()=>{
    let newText = text.split('').reverse().join('');    
    setText(newText);
    props.showAlert("Reverse the text", "success");   
}

const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard!", "success");    
}

  const handleClearClick = ()=>{        
    let newText = '';       
    setText(newText);  
    props.showAlert("Text clear", "success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed", "success");
}

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);    
    }


    const [text, setText] = useState('');      
  return (
    <>
    <div className="container"  style={{ color:props.mode==='dark'?'white':'#022c4d' }}>     
      <h2 className="mb-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea
          style={{ backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#022c4d' }}
          className="form-control" 
          id="myBox" value={text} onChange={handleOnChange}   
          rows="8"                         
        ></textarea>       
      </div>   
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse the text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>  
    <div className="container my-2" style={{ color:props.mode==='dark'?'white':'#022c4d' }}>     
      <h2>Your text summary</h2>  
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>     
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>   
      <h2>Preview</h2>                                 
      <p>{text.length>0?text:"Nothing to preview!"}</p>               
    </div>
    </>                            
  );
}
