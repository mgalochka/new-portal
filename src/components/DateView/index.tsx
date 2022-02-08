import React from "react";
import prepareData from "utls/prepareDate";

import './styles.scss';

interface IDateViewParams {
    value: string;
}

const DateView: React.FC<IDateViewParams> = ({value}) => {
    const {day, month} = prepareData(value)
    return (
    <p className="dateView" >
        <span className="day" >{day}</span> / {" "}
        <span className="month">{month}</span>
    </p>
    )
}
export default DateView;