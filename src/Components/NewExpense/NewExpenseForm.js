import { useState } from 'react';
import NavBar from '../UI/NavBar';
import NavItem from '../UI/NavItem';
import DropDown from '../UI/DropDown';

import { ReactComponent as BusinessIcon } from '../../icons/business.svg';
import { ReactComponent as CashIcon } from '../../icons/cash.svg';
import { ReactComponent as DonationsIcon } from '../../icons/donations.svg';
import { ReactComponent as EatingOutIcon } from '../../icons/eatingout.svg';
import { ReactComponent as EducationIcon } from '../../icons/education.svg';
import { ReactComponent as EntertainmentIcon } from '../../icons/entertainment.svg';
import { ReactComponent as FeesIcon } from '../../icons/fees.svg';
import { ReactComponent as GroceriesIcon } from '../../icons/groceries.svg';
import { ReactComponent as HealthIcon } from '../../icons/health.svg';
import { ReactComponent as HomeIcon } from '../../icons/home.svg';
import { ReactComponent as ShoppingIcon } from '../../icons/shopping.svg';
import { ReactComponent as TaxIcon } from '../../icons/tax.svg';
import { ReactComponent as TransportIcon } from '../../icons/transport.svg';
import { ReactComponent as TravelIcon } from '../../icons/travel.svg';
import { ReactComponent as UncategorisedIcon } from '../../icons/uncategorised.svg';
import { ReactComponent as UtilitiesIcon } from '../../icons/utilities.svg';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    // each expense has a title, date, amount and category
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCategory, setCategory] = useState('Uncategorised');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const [dropDownIcon, setDropDownIcon] = useState(< UncategorisedIcon />);

    // matches dropdown icon and displayed type to selected category
    const clickIconHandler = (newIcon, newCategory) => {
        setDropDownIcon(newIcon); 
        setCategory(newCategory);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
            category: enteredCategory,
        };

        props.onSaveExpenseData(expenseData); // TODO: explain this
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setCategory('');
    };

    return (
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
    );
};

export default NewExpenseForm;