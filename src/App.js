import React, {useState} from 'react'
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const regex = /t/gi;
  const regexNumbers = /[1-9]/gi;
  const upperCaseRegex = /[a-z]/g
  const asteriskRegex = /^\*.*\*$/g

  function Changed(e){
    setInputValue(e.target.value)
    
  }

  
  return (
    <div>
      <h1 className={regexNumbers.test(inputValue) ? "includesNumbers" : "din"}>test</h1>
      <div className={asteriskRegex.test(inputValue) ? "asterisks" : ""}>
        <div className={upperCaseRegex.test(inputValue) ? "includesLowerCase" : "dil"}>
          <textarea 
          className={regex.test(inputValue) ? "includes" : "doesntInclude"} 
          onChange={Changed}
          value={inputValue}
          placeholder="if this text includes letter 't' it will turn black"/>
        </div>
      </div>
    </div>
  );
}

export default App;
