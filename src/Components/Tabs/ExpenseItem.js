import Card from '../UI/Card.js';

import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // get dates
    const day = props.date.toLocaleString('en-AU', { day: '2-digit' });
    const month = props.date.toLocaleString('en-AU', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseItemDate date={props.date} />
                <div className='expense-item__description'>
                    <h3>{props.title}</h3>
                </div>
                <div className='expense-item__price'>${props.amount}</div>
            </Card>
        </li>
    );
};

// independent date componenent 
const ExpenseItemDate = (props) => {
    // extract date attributes
    const day = props.date.toLocaleString('en-AU', { day: '2-digit' });
    const month = props.date.toLocaleString('en-AU', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseItem;