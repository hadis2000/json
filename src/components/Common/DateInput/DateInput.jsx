import React from 'react';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { DateHolder } from './DatePickerComponent.style';

const DateInput = () => {
    return ( 
        <DateHolder>
            <p> : تاریخ تولد  </p>
            <DatePicker
                name='date'
                inputClass="custom"
                containerStyle={{
                    width: "100%"
                }}
                className="green rmdp-prime"
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
            />
        </DateHolder>
     );
}
 
export default DateInput;