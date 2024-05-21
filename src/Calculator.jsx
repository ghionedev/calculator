import { useState } from "react";
import "./App.css";

function Calculator() {
  const [result, setResult] = useState([])
  const DeleteIcon = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>

  function Buttons({ button, className, display}) {

    function delButton (button){
      if(button !== "DEL"){
        setResult(result + button)
        } else if (button === "DEL") {
        setResult(result.slice(0, -1))
        }
    }
    function dontStartWithOperator (button){
      if(result.length === 0 && (button === "/" || button === "+" || button === "*")){
        setResult(result)
      }
    }
   /* function dontDobleOperator (button){
      if(result.endsWith("/") || result.endsWith("+") || result.endsWith("-") || result.endsWith("x") && (button === "/" || button === "+" || button === "-" || button === "x")){
        setResult(result)
      }
    }  */

    function equal (button){
      if(button === "="){
      setResult(eval(result))
     }
    }

    function updateBoard(button){
      /* dontDobleOperator(button) */
      delButton(button)
      dontStartWithOperator(button)
      equal(button)
    }


    return <button className={`mt-10 ml-5  ${className} pl-5 pr-5 pt-5 pb-5`} onClick={() => updateBoard(button)}>{display}</button>
  }

  return (
    <>
    <div className="w-86">
      <div className="text-4xl ml-5">Calculadora</div>
      <div className="text-6xl ml-5 mt-5 pb-3 bg-gray-800 rounded-xl text-end pr-5 h-16 truncate max-w-86">{result}</div>
      <div className="grid grid-cols-4 gap-2">
      <Buttons button="7" display="7"></Buttons>
      <Buttons button="8" display="8"></Buttons>
      <Buttons button="9" display="9"></Buttons>
      <Buttons button="/" display="÷"></Buttons>
      <Buttons button="4" display="4"></Buttons>
      <Buttons button="5" display="5"></Buttons>
      <Buttons button="6" display="6"></Buttons>
      <Buttons button="*" display="x"></Buttons>
      <Buttons button="1" display="1"></Buttons>
      <Buttons button="2" display="2"></Buttons>
      <Buttons button="3" display="3"></Buttons>
      <Buttons button="+" display="+"></Buttons>
      </div>
      <div className="grid grid-cols-5 gap-2">
      <Buttons button="0" display="0"></Buttons>
      <Buttons button="." display="."></Buttons>
      <Buttons button="=" display="=" className="rounded-xl bg-orange-700 text-2xl"></Buttons>
      <Buttons button="-" display="-"></Buttons>
      <Buttons button="DEL" display={DeleteIcon} className="rounded-xl bg-red-500"></Buttons>
      </div>
    </div>
    </>
    
  );
}

export default Calculator;
