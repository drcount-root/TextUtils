import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Click was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to uppercase", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to lowercase", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removing extra spaces", "success");
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
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#112f52" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary btn-sm mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary btn-sm my-1 mx-1"
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
          {
            text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview !!!"}</p>
      </div>
    </>
  );
}
