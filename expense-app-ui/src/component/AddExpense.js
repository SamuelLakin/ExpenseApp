import React, { useState } from "react";
import { addExpense } from "../api/ExpenseService";

function AddExpense({ onAdd }) {
    const [expense, setExpense] = useState({
        description: "",
        category: "",
        amount: "",
        date: ""
    });

    const submit = (e) => {
        e.preventDefault();
        addExpense(expense).then(() => onAdd());
    };

    return (
        <form onSubmit={submit}>
            <input
                placeholder="Description"
                onChange={(e) =>
                    setExpense({ ...expense, description: e.target.value })
                }
            />

            <input
                placeholder="Category"
                onChange={(e) =>
                    setExpense({ ...expense, category: e.target.value })
                }
            />

            <input
                placeholder="Amount"
                type="number"
                step="0.01"
                min="0"
                onChange={(e) =>
                    setExpense({ ...expense, amount: e.target.value })
                }
            />

            <input
                placeholder="Date"
                type="date"
                onChange={(e) =>
                    setExpense({ ...expense, date: e.target.value })
                }
            />

            <button type="submit">Add</button>
        </form>
    );
}

export default AddExpense;