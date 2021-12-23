import './NewExpenseTab.css';
import NewExpenseForm from '../NewExpense/NewExpenseForm';

const NewExpenseTab = (props) => {
    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString() // new data should have a unique id key
        };
        // call higher level props attribute to add this data to database
        props.onAddExpense(expenseData); 
    };

    return (
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    );
};

export default NewExpenseTab;