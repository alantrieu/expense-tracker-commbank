import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.myExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    var total = 0;
    for (const expense of props.myExpenses) {
        total += expense.amount;
    }

    return (
        <React.Fragment>
        <div>{total}</div>
        <ul className='expenses-list'>
            {props.myExpenses.map(expense => (
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