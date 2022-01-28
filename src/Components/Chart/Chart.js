import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const values = props.expenses.map(expense => expense.value);
    const totalMax = Math.max(...values);

    return (
        <div className="chart">
            {props.expenses.map(expense => 
                <ChartBar key={expense.label} value={expense.value} maxValue={totalMax} label={expense.label} index={expense.index} onChangeMonth={props.onChangeMonth}/>
            )}
        </div>
    )
};

export default Chart;