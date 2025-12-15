import React from "react";
import { deleteExpense } from "../api/ExpenseService";
import "./ExpenseList.css";

function ExpenseList({ expenses, onChange }) {

    const removeExpense = (id) => {
        deleteExpense(id).then(() => onChange());
    };

    return (
        <div>
            <h2>Expenses</h2>
       <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.description}</td>
              <td>${exp.amount}</td>
              <td>{exp.date}</td>
              <td>
                <button class="buttonDelete" onClick={() => removeExpense(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}

export default ExpenseList;