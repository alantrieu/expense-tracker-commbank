import React, { useState } from "react";
import NewExpenseTab from "./NewExpenseTab";
import MonthlyExpenseTab from "./MonthlyExpenseTab";
import './Tab.css';

const Tabs = () => {

    // using states to manage our different tabs
    const [activeTab, setActiveTab] = useState("NewExpenseTab");

    const switchNewExpenseTab = () => {
        setActiveTab("NewExpenseTab");
    };

    const switchMonthlyExpenseTab = () => {
        setActiveTab("MonthlyExpenseTab");
    };

    const INITIAL_EXPENSES = [];

    // using states to keep a database of expenses
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

    const addExpenseHandler = (newExpense) => {
        setExpenses((prevExpenses) => {
            return [newExpense, ...prevExpenses];
        });
    };

    return (
        <div className="Tab">
            <ul className="nav">
                <li className={activeTab === "NewExpenseTab" ? "active" : ""} onClick={switchNewExpenseTab}>
                    New Expense
                </li>
                <li className={activeTab === "MonthlyExpenseTab" ? "active" : ""} onClick={switchMonthlyExpenseTab}>
                    Monthly Spend
                </li>
            </ul>
            <div>
                {activeTab === "NewExpenseTab" ? 
                    <NewExpenseTab onAddExpense={addExpenseHandler} /> :
                    <MonthlyExpenseTab myExpenses={expenses.sort(function (firstExp, secondExp) { return secondExp.date - firstExp.date })}/>
                }
            </div>
        </div>
    );
};

export default Tabs;