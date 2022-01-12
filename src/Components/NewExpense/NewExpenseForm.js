import { useState } from 'react';
import NavBar from '../UI/NavBar';
import NavItem from '../UI/NavItem';
import DropDown from '../UI/DropDown';
import Modal from '../UI/Modal';

import { ReactComponent as BusinessIcon } from '../../Icons/business.svg';
import { ReactComponent as CashIcon } from '../../Icons/cash.svg';
import { ReactComponent as DonationsIcon } from '../../Icons/donations.svg';
import { ReactComponent as EatingOutIcon } from '../../Icons/eatingout.svg';
import { ReactComponent as EducationIcon } from '../../Icons/education.svg';
import { ReactComponent as EntertainmentIcon } from '../../Icons/entertainment.svg';
import { ReactComponent as FeesIcon } from '../../Icons/fees.svg';
import { ReactComponent as GroceriesIcon } from '../../Icons/groceries.svg';
import { ReactComponent as HealthIcon } from '../../Icons/health.svg';
import { ReactComponent as HomeIcon } from '../../Icons/home.svg';
import { ReactComponent as ShoppingIcon } from '../../Icons/shopping.svg';
import { ReactComponent as TaxIcon } from '../../Icons/tax.svg';
import { ReactComponent as TransportIcon } from '../../Icons/transport.svg';
import { ReactComponent as TravelIcon } from '../../Icons/travel.svg';
import { ReactComponent as UncategorisedIcon } from '../../Icons/uncategorised.svg';
import { ReactComponent as UtilitiesIcon } from '../../Icons/utilities.svg';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    // each expense has a title, date, amount and category
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCategory, setCategory] = useState('Uncategorised');
    const [dropDownIcon, setDropDownIcon] = useState(< UncategorisedIcon />);

    const [error, setError] = useState(); // determines if an error modal pops up from invalid data

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const modalHandler = () => { 
        setError(null); 
    }; // pass modalHandler to <Modal /> where it is used to close pop-up 

    // matches dropdown icon and displayed type to selected category
    const clickIconHandler = (newIcon, newCategory) => {
        setDropDownIcon(newIcon); 
        setCategory(newCategory);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // prevents the page from being refreshed after clicking submit

        // trigger pop-up error modal
        if (enteredTitle === '' || enteredAmount === '' || enteredDate === '') {
            setError({
                title: 'Empty Input',
                message: 'Please enter a non-empty title, amount and date.'
            });
            return; // do not add anything if we have invalid data
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
            category: enteredCategory,
        };

        props.onSaveExpenseData(expenseData); // use calling function's data-saving method
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setCategory('Uncategorised');
    };

    return (
        <div>
            {error && <Modal title={error.title} message={error.message} onConfirm={modalHandler} />}
            <form onSubmit={submitHandler}>
                <div className='new-expense__wrapper'>
                    <div className='new-expense'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleHandler} />
                    </div>
                    <div className='new-expense'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountHandler} />
                    </div>
                    <div className='new-expense'>
                        <label>Date</label>
                        <input type='date' min='2020-01-01' max='2021-12-31' value={enteredDate} onChange={dateHandler} />
                    </div>
                    <div className='new-expense'>
                        <label onClick={clickIconHandler}>Category</label>
                        <div className='category-type'>
                            {enteredCategory}
                        </div>
                    </div>
                    <NavBar>
                        <DropDown icon={dropDownIcon}>
                            <NavItem icon={<BusinessIcon />} title='Business' selectIcon={clickIconHandler} />
                            <NavItem icon={<CashIcon />} title='Cash' selectIcon={clickIconHandler}/>
                            <NavItem icon={<DonationsIcon />} title='Donations' selectIcon={clickIconHandler}/>
                            <NavItem icon={<EatingOutIcon />} title='Eating Out' selectIcon={clickIconHandler}/>
                            <NavItem icon={<EducationIcon />} title='Education' selectIcon={clickIconHandler}/>
                            <NavItem icon={<EntertainmentIcon />} title='Entertainment' selectIcon={clickIconHandler}/>
                            <NavItem icon={<FeesIcon />} title='Fees and Interest' selectIcon={clickIconHandler}/>
                            <NavItem icon={<GroceriesIcon />} title='Groceries' selectIcon={clickIconHandler}/>
                            <NavItem icon={<HealthIcon />} title='Health' selectIcon={clickIconHandler}/>
                            <NavItem icon={<HomeIcon />} title='Home' selectIcon={clickIconHandler}/>
                            <NavItem icon={<ShoppingIcon />} title='Shopping' selectIcon={clickIconHandler}/>
                            <NavItem icon={<TaxIcon />} title='Tax' selectIcon={clickIconHandler}/>
                            <NavItem icon={<UtilitiesIcon />} title='Utilities' selectIcon={clickIconHandler}/>
                            <NavItem icon={<TravelIcon />} title='Travel' selectIcon={clickIconHandler}/>
                            <NavItem icon={<TransportIcon />} title='Transport' selectIcon={clickIconHandler}/>
                            <NavItem icon={<UncategorisedIcon />} title='Uncategorised' selectIcon={clickIconHandler}/>
                        </DropDown>
                    </NavBar>
                </div>
                <div className='new-expense__submit'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default NewExpenseForm;