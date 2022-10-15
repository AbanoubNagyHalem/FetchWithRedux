import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/counterSlices";
import FetchApis from "./FetchApis";

function Home() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center pt-5 fw-1 fs-1">
        <h1> Counter : {state.value}</h1>
        <div>
          <div
            onClick={() => dispatch(increment())}
            className="btn btn-outline-primary mx-4"
          >
            increament
          </div>
          <div
            onClick={() => dispatch(decrement())}
            className="btn btn-outline-danger mx-4"
          >
            decreament
          </div>
        </div>
      </div>
      <FetchApis />
    </>
  );
}

export default Home;
