import React, {useState} from "react"


export default function TextForm(props) {
  
    const handleOnChange = (event) => {
        //console.log("Change Occurred in the following state.");
        setText(event.target.value);
    }

    const handleUpClick = () => {
       // console.log("Uppercase was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText); 
      props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
      let newText = " ";
      setText(newText);
      props.showAlert("The text has been cleared!", "success");
    }

    const handleCopy = () => {
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("The text has been copied!", "success");
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("The extraspaces has been removed!", "success");
    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
         <h1>{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark' ? 'white': 'black'}} id="myBox" rows="8"></textarea>
        </div>                  
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleExtraSpace}>Remove Space</button>


    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark' ? 'white': 'black'}}>
         <h1>Your text summary</h1>
         <p>{text.split(" ").length} words and  {text.length} characters</p>
         <p>{0.008 * text.split(" ").length } Minutes read </p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter the text above to preview it here."}</p>
      
    </div>


    </>
  )
}
