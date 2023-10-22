import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch, expenses } = useContext(AppContext);
  const [currBudget, setCurrBudget] = useState(budget);

  const handleSubmit = (val) => {
    const totalExpensesValue = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (val < totalExpensesValue) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }
    if (val > 20000) {
        alert("Budget cannot exceed " + currency + "20000")
        return;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary d-flex">
      Budget: {currency}
      <input
        step="10"
        max="20000"
        type="number"
        value={currBudget}
        onChange={(e) => setCurrBudget(e.target.value)}
      ></input>
      <button className="btn btn-secondary btn-sm ml-2" onClick={() => handleSubmit(currBudget)}>Set Budget</button>
    </div>
  );
};

export default Budget;
