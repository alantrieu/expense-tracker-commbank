import React, { useContext } from 'react';
import Card from '../UI/Card';
import AuthContext from '../../Context/auth-context';
import './ExpensesList.css';
import ExpenseCategory from './ExpenseCategory';

const ExpensesList = (props) => {
    const ctx = useContext(AuthContext);
    
    if (props.myExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses for this year.</h2>
    }

    // filter expenses by currently chosen month
    const monthlyExpenses = props.myExpenses.filter(expense => {
        return expense.date.getMonth() === ctx.currMonth;
    });

    if (monthlyExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses for this month.</h2>
    }

    var total = 0;
    for (const expense of monthlyExpenses) {
        total += expense.amount;
    }

    return (
        <React.Fragment>
            <Card className="expense-title">Monthly Spending: ${total.toFixed(2)}</Card>
            <ul className='expenses-list'>
                <ExpenseCategory monthlyExpenses={monthlyExpenses}/>
            </ul>
        </React.Fragment>
    );
};

export default ExpensesList;