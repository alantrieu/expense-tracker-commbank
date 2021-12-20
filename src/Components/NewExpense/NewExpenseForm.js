import { useState } from 'react';
import {NavBar, NavItem} from '../UI/NavBar';
import DropDown from '../UI/DropDown';

import { ReactComponent as DropDownIcon } from '../../icons/arrowDown.svg';
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
    // each expense has a title, date, amount and type
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCategory, setCategory] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const categoryHandler = (event) => {
        setCategory(event.target.value);
    }

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
                    <label>Category</label>
                    <NavBar>
                        <DropDown icon={<DropDownIcon />}>
                            <NavItem icon={<BusinessIcon />} title='Business'/>
                            <NavItem icon={<CashIcon />} title='Cash'/>
                            <NavItem icon={<DonationsIcon />} title='Donations'/>
                            <NavItem icon={<EatingOutIcon />} title='Eating Out'/>
                            <NavItem icon={<EducationIcon />} title='Education'/>
                            <NavItem icon={<EntertainmentIcon />} title='Entertainment'/>
                            <NavItem icon={<FeesIcon />} title='Fees and Interest'/>
                            <NavItem icon={<GroceriesIcon />} title='Groceries'/>
                            <NavItem icon={<HealthIcon />} title='Health'/>
                            <NavItem icon={<HomeIcon />} title='Home'/>
                            <NavItem icon={<ShoppingIcon />} title='Shopping'/>
                            <NavItem icon={<TaxIcon />} title='Tax'/>
                            <NavItem icon={<UtilitiesIcon />} title='Utilities'/>
                            <NavItem icon={<TravelIcon />} title='Travel'/>
                            <NavItem icon={<TransportIcon />} title='Transport'/>
                            <NavItem icon={<UncategorisedIcon />} title='Uncategorised'/>
                        </DropDown>
                    </NavBar>
                </div>
            </div>
        </form>
    );
};

export default NewExpenseForm;