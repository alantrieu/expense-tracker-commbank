import Chart from "../Chart/Chart";

const ExpensesChart = props => {
    const months = [
        { label: 'Jan', value: 0, index: 0 },
        { label: 'Feb', value: 0, index: 1 },
        { label: 'Mar', value: 0, index: 2 },
        { label: 'Apr', value: 0, index: 3 },
        { label: 'May', value: 0, index: 4 },
        { label: 'Jun', value: 0, index: 5 },
        { label: 'Jul', value: 0, index: 6 },
        { label: 'Aug', value: 0, index: 7 },
        { label: 'Sep', value: 0, index: 8 },
        { label: 'Oct', value: 0, index: 9 },
        { label: 'Nov', value: 0, index: 10 },
        { label: 'Dec', value: 0, index: 11 },
    ];

    for (const expense of props.expense) {
        const expenseMonth = expense.date.getMonth(); // get month index
        months[expenseMonth].value += expense.amount; // add amount under month
    }

    return <Chart expenses={months} onChangeMonth={props.onChangeMonth}/>
};

export default ExpensesChart;