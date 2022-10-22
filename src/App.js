import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const TextUtils = "TextUtils";

export default function App() {
  return (
    <>
      <Navbar title={TextUtils} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}
