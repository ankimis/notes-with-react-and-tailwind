import '../index.css'
import {useState}from "react";
import { useCallback, useEffect, useRef } from "react";

function PasswordGenrator() {
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("fdgfg5$");
  //ref hook
  const passRef = useRef("");
  // passwordGenrator();
  useEffect(() => {
    passwordGenrator();
  }, [length, number, char, setPassword]);
  const copyPasswordOnclick = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "~@#!{}[]_+&*%";
    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }
    setPassword(pass);
  }, [length, number, char, password]);

  return (
    <div
      className=" w-full w-100 max-w-md mx-auto shadow-md min-w-full
      rounded-lg px-4 py-3 m-8 text-orange-500
      bg-gray-600"
    >
      <h4 className="text-white text-center my-3">Paassword Genrator</h4>
      <div
        className="flex shadow rounded-lg
      overflow-hidden mb-4"
      >
        <input
          type="text"
          value={password}
          className="  w-full py-1 px-3
          focus:outline-none focus:ring focus:border-blue-500"
          readOnly
          placeholder="Password"
          ref={passRef}
        />
        <button
          className=" focus:outline-none outline-offset-0 outline-none px-3 
        py-0.5 shrink-0  bg-blue-500 text-white bg-primary"
          onClick={copyPasswordOnclick}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-3">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer px-3"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="Length">Length:{length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id="numberInput"
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id="charInput"
            defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenrator;
