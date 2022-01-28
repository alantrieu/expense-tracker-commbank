import { Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseCategory.css';

const ExpenseCategory = (props) => {

    // returns array of unique categories
    const uniqueCategories = [...new Set(
        props.monthlyExpenses.map(expense => expense.category)
    )];

    // returns a new expenses array where all elements are under the given category
    const filterByCategory = (category) => {
        return (props.monthlyExpenses.filter(expense => { 
            return expense.category === category; 
        }));
    };

    const categorySum = (category) => {
        var total = 0;
        for (const expense of filterByCategory(category)) {
            total += expense.amount;
        }
        return total;
    };

    return (
        <Fragment>
            {uniqueCategories.map(category => (
                <CategoryDropDown 
                    className='expense-category' 
                    label={category} 
                    filterByCategory={filterByCategory} 
                    categorySum={categorySum}
                >
                    {filterByCategory(category).map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            category={expense.category}
                        />
                    ))}
                </CategoryDropDown>
            ))}
        </Fragment>
    );
};

// custom dropdown for each category
const CategoryDropDown = (props) => {
    const [open, setOpen] = useState(false);
    const count = props.filterByCategory(props.label);
    const sum = props.categorySum(props.label);

    return (
        <Card className='expense-category__title'>
            <div className='expense-category__list' onClick={() => setOpen(!open)}>
                <div>
                    <h3>{props.label}</h3>
                    {count.length === 1 ? <div>{count.length} transaction</div> : <div>{count.length} transactions</div>}
                </div>
                <div className='expense-category__price'>${sum}</div>
            </div>
            <div className='expense-children' onClick={() => setOpen(false)}>
                {open && props.children}
            </div>
        </Card>
    );
};

export default ExpenseCategory;