import React, {useState} from 'react'
import './App.css';
import {FaRegSmile, FaEuroSign} from 'react-icons/fa'
import {BsMusicNoteBeamed} from 'react-icons/bs'

function App() {

  const [inputValue, setInputValue] = useState('');
  const regex = /t/gi;
  const regexNumbers = /[1-9]/gi;
  const upperCaseRegex = /[a-z]/g
  const asteriskRegex = /^\*.*\*$/g
  const GreenTextRegex = /^>/g
  const dotRegex = /\.$/g

  function Changed(e){
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1 className={regexNumbers.test(inputValue) ? "includesNumbers" : "din"}>test</h1>
      <div className={GreenTextRegex.test(inputValue) ? "green" : ""}>
        <div className={asteriskRegex.test(inputValue) ? "asterisks" : ""}>
          <div className={upperCaseRegex.test(inputValue) ? "includesLowerCase" : "dil"}>
            <textarea 
            className={regex.test(inputValue) ? "includes" : "doesntInclude" } 
            onChange={Changed}
            value={inputValue}
            placeholder="if this text includes letter 't' it will turn black"
            spellCheck="false"/>
          </div>
          <div className="emojis">
            <button onClick={Changed} value={inputValue + "☺"}><FaRegSmile/></button>
            <button onClick={Changed} value={inputValue + "♫"}><BsMusicNoteBeamed/></button>
            <button onClick={Changed} value={inputValue + "€"}><FaEuroSign/></button>
            <button onClick={Changed} value={inputValue + "▒"}>▒</button>
            <button onClick={Changed} value={inputValue + ","}>,</button>
            <button onClick={Changed} value={inputValue + ";"}>;</button>
            <button onClick={Changed} value={inputValue + "="}>=</button>
            <button onClick={Changed} value={inputValue + "*"}>*</button>
            <button onClick={Changed} value={inputValue + ">"}>&gt;</button>
            <button onClick={Changed} value={inputValue + "<"}>&lt;</button>
            <button onClick={Changed} value={inputValue + "/"}>/</button>
            <button onClick={Changed} value={inputValue + "\\"}>\</button>
            <button onClick={Changed} value={inputValue + "-"}>-</button>
            <button onClick={Changed} value={inputValue + "+"}>+</button>
            <button onClick={Changed} value={inputValue + "("}>(</button>
            <button onClick={Changed} value={inputValue + ")"}>)</button>
            <button onClick={Changed} value={inputValue + '"'}>"</button>
            <button onClick={Changed} value={inputValue + "'"}>'</button>
            <button onClick={Changed} value={inputValue + "!"}>!</button>
            <button onClick={Changed} value={inputValue + "?"}>?</button>

            <button onClick={Changed} className={dotRegex.test(inputValue) ? "" : "ShouldWriteDot"} value={inputValue + "."}>.</button>
            <button onClick={Changed} value={""}>CLEAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
