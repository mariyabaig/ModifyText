import React, { useState } from "react";
import { RxLetterCaseUppercase, RxLetterCaseLowercase, RxCopy, RxFontBold } from "react-icons/rx";
import { GoItalic } from "react-icons/go";
import { FaItalic } from "react-icons/fa";
import { RxUnderline } from "react-icons/rx";

export default function Text(props) {
  const [text, setText] = useState("")
  const [savedSelectionRange, setSavedSelectionRange] = useState(null)

  const handleClearClick = () => {
    setText("")
 }

  const handleCopy = () => {
    let textArea = document.getElementById("myText")
    textArea.select()
    navigator.clipboard.writeText(textArea.value)
 }

  const handleOnChange = (event) => {
    setText(event.target.value)
 }

  const saveSelectionRange = () => {
    const selection = window.getSelection()
    if (selection.rangeCount > 0) {
      setSavedSelectionRange(selection.getRangeAt(0).cloneRange())
    }
 }

  const restoreSelectionRange = () => {
    if (savedSelectionRange) {
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(savedSelectionRange)
    }
 }


  const handleStyleChange = (style) => {
    let div = document.getElementById("myText")
    if (!div) {
      console.error("Contenteditable div element not found.")
      return
    }
  
    saveSelectionRange()
    
    switch (style) {
      case "upper":
        document.execCommand("insertText", false, window.getSelection().toString().toUpperCase())
        break
      case "lower":
        document.execCommand("insertText", false, window.getSelection().toString().toLowerCase())
        break
      case "bold":
        document.execCommand("bold", false)
        break
      case "italic":
        document.execCommand("italic", false)
        break
        case "bolditalic":
          document.execCommand("bold", false)
          document.execCommand("italic", false)
          break
      case "underline":
        document.execCommand("underline", false)
        break

      default:
        break
    }
  
    restoreSelectionRange()
 }
  
  return (
    <>
      <div className="flex flex-col justify-center items-center text-2xl">
        <div
          id="myText"
          contentEditable
          className="w-3/4 border-2 border-gray-300 rounded-lg p-4 mb-4"
          style={{ minHeight: "150px", overflowY: "auto" }}
          dangerouslySetInnerHTML={{ __html: text }}
          onBlur={(e) => setText(e.target.innerHTML)}
        ></div>
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

      </div>
    </>
  )
}
