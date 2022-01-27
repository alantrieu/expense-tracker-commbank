import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import AuthContext from '../../Context/auth-context';
import './ExpensesList.css';

const ExpensesList = (props) => {
    const ctx = useContext(AuthContext);
    
    if (props.myExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    // filter expenses by currently chosen month
    const monthlyExpenses = props.myExpenses.filter(expense => {
        return expense.date.getMonth() === ctx.currMonth;
    });

    var total = 0;
    for (const expense of monthlyExpenses) {
        total += expense.amount;
    }

    return (
        <React.Fragment>
            <Card className="expense-title">Monthly Spending: ${total}</Card>
            <ul className='expenses-list'>
                {monthlyExpenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        category={expense.category}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default ExpensesList;