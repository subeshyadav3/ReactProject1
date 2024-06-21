import { useState,useCallback, useEffect,useRef } from "react";

function RandomPasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumberAllowed] = useState(false);
  const [symbol, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("1232");

  let reference=useRef(null);
  let copyPassword=useCallback(()=>{
      reference.current?.select();
      window.navigator.clipboard.writeText(password);
  },[password]);

   
  // Function to generate a random password
    const randomPassword = useCallback(() => {
    let pass = "";
    let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      key += "123456790";
    }
    if (symbol) {
      key += "!@#$%&*";
    }

    for (let i = 0; i < length; i++) {
      let ran = Math.floor(Math.random() * key.length);
      pass += key.charAt(ran);
    }
    setPassword(pass);
  },[number,length,symbol]);

  useEffect(() => {
    randomPassword();
  }, [number, symbol, length]);

  return (
    <div className="w-full h-screen bg-black text-white flex items-center flex-col">
      
      <h1 className="mt-5 text-2xl">Password Generator</h1>

      <div className="flex flex-wrap m-5">
        <input
          type="text"
          className="text-white bg-teal-600 rounded-xl w-[300px] text-[15px]"
          value={password}
          ref={reference}
          readOnly
          
        />
        <button className="rounded-xl shadow-xl bg-teal-600 p-2 mr-4" onClick={copyPassword} >Copy</button>
      </div>

      <div className="flex flex-wrap gap-5">
        <div>
          <input
            type="range"
            id="rangeInput"
            min={1}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label> Length: {length} </label>
        </div>

        <div>
          <label> Numbers: </label>
          <input
            type="checkbox"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>

        <div>
          <label> Symbol: </label>
          <input
            type="checkbox"
            onChange={() => setSymbolAllowed((prev) => !prev)}
          />
        </div>
      </div>
    
    </div>
  );
}

export default RandomPasswordGenerator;
