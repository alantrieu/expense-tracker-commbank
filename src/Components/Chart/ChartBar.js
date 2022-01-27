import './ChartBar.css';

const ChartBar = (props) => {
    let height = '0%';

    if (props.maxValue > 0) {
        height = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    const onClickHandler = () => {
        props.onChangeMonth(props.index);
    };

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner" onClick={onClickHandler}>
                <div className='chart-bar__fill' style={{ height: height }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

export default ChartBar;