import React, {useReducer} from "react";
import reducer, {initialState} from "../reducers/index";
import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import {
  clearDisplay, 
  addOne, 
  applyNumber, 
  changeOperation,
  setMemory,
  applyMemory,
  clearMemory
  } from "../actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleClick1 = () => {
  //   dispatch(addOne());
  // }

  const handleClickNum = (e) => {
    dispatch(applyNumber(Number(e.target.value)));
  }

  const handleClickOps = (e) => {
    dispatch(changeOperation(e.target.value));
  }

  const handleClickClear = () => {
    dispatch(clearDisplay());
  }

  const handleSetMemory = () => {
    dispatch(setMemory());
  }

  const handleApplyMemory = () => {
    dispatch(applyMemory());
  }
  
  const handleClearMemory = () => {
    dispatch(clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={`${state.total}`}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {`${state.operation}`}</span>
              <span id="memory"><b>Memory:</b> {`${state.memory}`}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleSetMemory} value={"M+"}/>
              <CalcButton onClick={handleApplyMemory} value={"MR"}/>
              <CalcButton onClick={handleClearMemory}value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClickNum} value={1}/>
              <CalcButton onClick={handleClickNum} value={2}/>
              <CalcButton onClick={handleClickNum} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClickNum} value={4}/>
              <CalcButton onClick={handleClickNum} value={5}/>
              <CalcButton onClick={handleClickNum} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClickNum} value={7}/>
              <CalcButton onClick={handleClickNum} value={8}/>
              <CalcButton onClick={handleClickNum} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClickOps} value={"+"}/>
              <CalcButton onClick={handleClickOps} value={"*"}/>
              <CalcButton onClick={handleClickOps} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClickClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
