import React, { useEffect, useState } from "react";
import AddExpense from "./component/AddExpense";
import ExpenseList from "./component/ExpenseList";
import { getExpense, getTotalExpense } from "./api/ExpenseService";
import TotalExpense from "./component/TotalExpenses";

function App() {
  const [expenses, setExpense] = useState([]);
  const [total, setTotal] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadTotal = () => {
  getTotalExpense().then(res => setTotal(res.data));
};

  const loadExpenses = () => {
    getExpense().then(res => setExpense(res.data));
    setRefreshKey(prev => prev + 1);
    loadTotal();
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpense onAdd={loadExpenses} />
      <ExpenseList expenses={expenses} onChange={loadExpenses} />
      <TotalExpense refreshTrigger={refreshKey}/>
    </div>
  );
}

export default App;