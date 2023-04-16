import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function Main() {
  // Hooks
  // Navigation Hook
  const navigate = useNavigate();
  function mov() {
    navigate(-1)
  }

  // State Hook
  // Add
  const [counter, setCounter] = useState(0);
  function add() {
    setCounter(counter + 1);
  }
  // Add2
  const [counter2, setCounter2] = useState(0);
  function add2() {
    setCounter2(counter2 + 1);
  }

  // Spinner States
  let [load, setLoad] = useState(false);

  // UseEffect Hook
  useEffect(function showSpiner() {
    setInterval(() => { setLoad(true) }, 2000)
  }, [counter, counter2]);


  return (
    <div>
      <h1> Main </h1>
      {/* Navigatio to move Back */}
      <button onClick={mov}>Go Back</button>
      <br />

      {/* Add & Add2 Button */}
      <button onClick={add}>Add {counter}</button>
      <button onClick={add2}>Add2 {counter2}</button>

      {/* Loader Spinner Code */}
      <center>
        <div className="sweet-loading">
          <ClipLoader
            loading={load}
            size={50}
          />

          {/* <button onClick={}>Load</button> */}

          <br />
          <br />
        </div>
      </center>

    </div >
  )
}

export default Main