import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Click was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Coverted to uppercase', 'success');
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Coverted to lowercase', 'success');
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Clear', 'success');
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removing extra spaces', 'success');
  };

  // const handleNumRemover = () => {
  //   let newText = text.replace(/[0-9]/g, "");
  //   setText(newText);
  // };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  // const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-success text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-primary mx-2 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-warning text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className={`btn btn-info mx-2 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-danger text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleClear}
        >
          Clear
        </button>
        {/* <button className="btn btn-secondary mx-2" onClick={handleNumRemover}>
          Remove Numbers
        </button> */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview"}
        </p>
      </div>
    </>
  );
}
