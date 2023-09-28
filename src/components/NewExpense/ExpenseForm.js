import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput, // spread operator
    //   enteredTitle: event.target.value,
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value}
    // });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput, // spread operator
    //   enteredDate: event.target.value,
    // });
    setEnteredDate(event.target.value);
  };

  return (
    <from>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2030-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </from>
  );
};

export default ExpenseForm;
