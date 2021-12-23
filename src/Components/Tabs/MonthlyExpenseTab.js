import ExpensesList from './ExpensesList';
import './MonthlyExpenseTab.css';

const MonthlyExpenseTab = (props) => {
    return (
        <div >
            <ExpensesList myExpenses={props.myExpenses} />
        </div>
    )
};

export default MonthlyExpenseTab;