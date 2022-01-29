import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";

const INITIAL_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 80,
    date: new Date(2021, 9, 20),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 8000,
    date: new Date(2022, 5, 10),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 23440,
    date: new Date(2022, 6, 10),
  },
  {
    id: "e4",
    title: "Table",
    amount: 3400,
    date: new Date(2020, 4, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div id="linkImage">
        <a href="https://github.com/supersver">
          <img id="Image" />
        </a>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
