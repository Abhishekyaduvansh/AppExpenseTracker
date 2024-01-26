// HomePage.js
import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { GlobalContext } from "../context/GlobalContext";
import { GlobalProvider } from "../context/GlobalContext";
const ExpenseTracker = () => {
  return (
    <>
      <h1>Expense</h1>
    </>
    // <GlobalProvider>
    //   <Header />
    //   <div className="container">
    //     <Balance />
    //     <IncomeExpenses />
    //     <TransactionList />
    //     <AddTransaction />
    //   </div>
    // </GlobalProvider>
  );
};

export default ExpenseTracker;
