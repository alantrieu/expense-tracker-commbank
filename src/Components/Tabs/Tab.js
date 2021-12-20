import React, { useState } from "react";
import NewExpenseTab from "./NewExpenseTab";
import MonthlyExpenseTab from "./MonthlyExpenseTab";
import './Tab.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("NewExpenseTab");

    const switchNewExpenseTab = () => {
        setActiveTab("NewExpenseTab");
    };

    const switchMonthlyExpenseTab = () => {
        setActiveTab("MonthlyExpenseTab");
    };

    return (
        <div className="Tab">
            {/* Tab nav */}
            <ul className="nav">
                <li className={activeTab === "NewExpenseTab" ? "active" : ""} onClick={switchNewExpenseTab}>
                    New Expense
                </li>
                <li className={activeTab === "MonthlyExpenseTab" ? "active" : ""} onClick={switchMonthlyExpenseTab}>
                    Monthly Spend
                </li>
            </ul>
            <div>
                {/* content will be shown here */}
                {activeTab === "NewExpenseTab" ? <NewExpenseTab /> : <MonthlyExpenseTab />}
            </div>
        </div>
    );
};

export default Tabs;