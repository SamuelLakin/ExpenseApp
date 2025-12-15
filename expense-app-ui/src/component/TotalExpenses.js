import React, {useEffect, useState} from "react";
import { getTotalExpense} from "../api/ExpenseService";

function TotalExpense({refreshTrigger}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getTotalExpense().then(res => setTotal(res.data));
    }, [refreshTrigger]);

    return <h2>Total Spent: ${total.toFixed(2)}</h2>
}

export default TotalExpense;