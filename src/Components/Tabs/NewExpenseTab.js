import './NewExpenseTab.css';
import NewExpenseForm from '../NewExpense/NewExpenseForm';

const NewExpenseTab = () => {
    return (
        <div className="output">
            <NewExpenseForm />
            {/* First tab content will go here */}
        </div>
    );
};

export default NewExpenseTab;