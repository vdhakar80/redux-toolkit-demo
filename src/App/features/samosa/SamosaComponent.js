import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { samosaActions } from "./samosaSlice";

function SamosaComponent() {
  const number_of_samosa = useSelector(
    (state) => state.samosa.number_of_samosa
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>{number_of_samosa}</div>
      <button
        onClick={() => {
          dispatch(samosaActions.buy_samosa(2));
        }}
      >
        buy 2 samosas
      </button>
      <button
        onClick={() => {
          dispatch(samosaActions.make_samosa(4));
        }}
      >
        make 4 samosas
      </button>
    </div>
  );
}

export default SamosaComponent;
