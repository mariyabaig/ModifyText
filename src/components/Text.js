import React, { useState } from "react";
import { RxLetterCaseUppercase, RxLetterCaseLowercase, RxCopy, RxFontBold } from "react-icons/rx";
import { GoItalic } from "react-icons/go";
import { FaItalic } from "react-icons/fa";
import { RxUnderline } from "react-icons/rx"
export default function Text(props) {
  const [text, setText] = useState("");

  const handleClearClick = () => {
    setText("");
  };

  const handleCopy = () => {
    let textArea = document.getElementById("myText");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleStyleChange = (style) => {
    let textArea = document.getElementById("myText");
    const selectionStart = textArea.selectionStart;
    const selectionEnd = textArea.selectionEnd;
    let selectedText = textArea.value.substring(selectionStart, selectionEnd);
    let newText;

    switch (style) {
      case "upper":
        newText = text.substring(0, selectionStart) + selectedText.toUpperCase() + text.substring(selectionEnd);
        break;
      case "lower":
        newText = text.substring(0, selectionStart) + selectedText.toLowerCase() + text.substring(selectionEnd);
        break;
      case "bold":
        newText = text.substring(0, selectionStart) + "<b>" + selectedText + "</b>" + text.substring(selectionEnd);
        break;
      case "italic":
        newText = text.substring(0, selectionStart) + "<i>" + selectedText + "</i>" + text.substring(selectionEnd);
        break;
      case "underline":
        newText = text.substring(0, selectionStart) + "<u>" + selectedText + "</u>" + text.substring(selectionEnd);
        break;
      case "bolditalic":
        newText = text.substring(0, selectionStart) + "<b><i>" + selectedText + "</i></b>" + text.substring(selectionEnd);
        break;
      default:
        newText = text;
    }

    setText(newText);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-2xl">
        <textarea
          className="w-3/4 border-2 border-gray-300 rounded-lg p-4 mb-4"
          value={text}
          onChange={handleOnChange}
          id="myText"
          rows="13"
        ></textarea>

        <div className="flex flex-row space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={() => handleStyleChange("upper")}
          >
            <RxLetterCaseUppercase />
          </button>

          <button
            type="button"
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={() => handleStyleChange("lower")}
          >
            <RxLetterCaseLowercase />
          </button>

          <button
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={() => handleStyleChange("bold")}
          >
            <RxFontBold />
          </button>
          <button
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={() => handleStyleChange("italic")}
          >
            <GoItalic />
          </button>
          <button
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={() => handleStyleChange("bolditalic")}
          >
            <FaItalic />
          </button>
          <button
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={() => handleStyleChange("underline")}
          >
            <RxUnderline />
          </button>

          <button
            type="button"
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg flex justify-center items-center"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            type="button"
            className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>

        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </>
  );
}
