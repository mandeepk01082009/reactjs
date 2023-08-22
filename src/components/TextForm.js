import React, {useState} from "react";



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text);        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
      console.log("Lowercase was Clicked" + text);  
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
  }

  const handleReverseClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = text.split('').reverse().join('');    
    setText(newText);
    props.showAlert("Reverse the text", "success");   
}

  const handleClearClick = ()=>{
    let newText = '';       
    setText(newText);  
    props.showAlert("Text clear", "success");
}

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);  
    }


    const [text, setText] = useState('');      
  return (
    <>
    <div className="container"  style={{ color:props.mode==='dark'?'white':'#022c4d' }}>     
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          style={{ backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#022c4d' }}
          className="form-control" 
          id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}   
          rows="8"                         
        ></textarea>       
      </div>   
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse the text</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>  
    </div>  
    <div className="container my-2" style={{ color:props.mode==='dark'?'white':'#022c4d' }}>
      <h2>Your text summary</h2>  
      <p>{text.split(" ").length} words and {text.length} characters.</p>     
      <p>{0.008 * text.split(" ").length} Minutes read</p>   
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>

    </div>
    </>           
  );
}
