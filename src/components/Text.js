import React from "react";
import { useState } from "react";



export default function Text(props) {
  const [text, setText] = useState("");

  
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
   
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    
  };

  const handleLoClick = () => {
    //console.log("Lowercase was clicked"+ text)
    let newText = text.toLowerCase();
    setText(newText);
    
    
  };

  const handleCopy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  };

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container width:50%;
}"
      >
        <h2> {props.heading} </h2>
        <div className="mb-3">
          <label htmlFor="myText" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myText"
            rows="8"
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleUpClick}
        >
          Covert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        
      </div>
      <div className="container" my-3="True">
        <h3>Your text summary</h3>
        <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
