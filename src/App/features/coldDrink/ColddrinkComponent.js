import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colddrinkActions } from "./coldDrinkSlice";

function ColddrinkComponent() {
  const number_of_colddrink = useSelector(
    (state) => state.colddrink.number_of_colddrink
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>{number_of_colddrink}</div>
      <button
        onClick={() => {
          dispatch(colddrinkActions.buy_coldDrink(2));
        }}
      >
        Buy 2 ColdDrink
      </button>
      <button
        onClick={() => {
          dispatch(colddrinkActions.add_coldDrink(4));
        }}
      >
        Add 4 ColdDrink
      </button>
    </div>
  );
}

export default ColddrinkComponent;
