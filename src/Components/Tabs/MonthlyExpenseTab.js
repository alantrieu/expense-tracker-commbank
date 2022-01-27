import { React, useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import AuthContext from '../../Context/auth-context';
import './MonthlyExpenseTab.css';

const MonthlyExpenseTab = (props) => {
    const [chartYear, setChartYear] = useState('2022');
    const [chartMonth, setChartMonth] = useState(0); // default 0 to indicate January

    const yearChangeHandler = (selectedYear) => {
        setChartYear(selectedYear);
    };

    const monthChangeHandler = (selectedMonth) => {
        setChartMonth(selectedMonth);
    };

    const filteredExpenses = props.myExpenses.filter(expense => {
        return expense.date.getFullYear().toString() === chartYear;
    });

    return (
        <AuthContext.Provider value={{currMonth: chartMonth,}}>
            <ExpensesFilter selected={chartYear} onChangeFilter={yearChangeHandler}/>
            <ExpensesChart expense={filteredExpenses} onChangeMonth={monthChangeHandler}/>
            <ExpensesList myExpenses={filteredExpenses}/>
        </AuthContext.Provider>
    );
};

export default MonthlyExpenseTab;