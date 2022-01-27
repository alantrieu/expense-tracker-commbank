import { React, useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import AuthContext from '../../Context/auth-context';
import './MonthlyExpenseTab.css';

const MonthlyExpenseTab = (props) => {
    const [chartYear, setChartYear] = useState('2022');

    const chartChangeHandler = (newYear) => {
        setChartYear(newYear);
    };

    const filteredExpenses = props.myExpenses.filter(expense => {
        return expense.date.getFullYear().toString() === chartYear;
    });

    return (
        <AuthContext.Provider value={{currMonth: 'Jan',}} >
            <ExpensesFilter selected={chartYear} onChangeFilter={chartChangeHandler}/>
            <ExpensesChart expense={filteredExpenses} />
            <ExpensesList myExpenses={filteredExpenses} />
        </AuthContext.Provider>
    );
};

export default MonthlyExpenseTab;