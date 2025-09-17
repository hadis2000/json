import React, { useState, Fragment } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { useField, useFormikContext } from "formik";
import { DateHolder } from "./DatePickerComponent.style";

export const DatePickerField = ({ ...props }) => {
  const [state, setState] = useState({ format: "YYYY/MM/DD" });

  const convert = (date, format = state.format) => {
    let object = { date, format };

    setState({
      ...object,
    });
    return new DateObject(object).convert(persian, persian_en).format();
  };

  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const { text, value } = props;

  return (
    <DateHolder>
      <DatePicker
        inputClass="custom"
        containerStyle={{
          width: "100%",
        }}
        calendarPosition="top-center"
        calendar={persian}
        hideWeekDays={true}
        value={value}
        locale={persian_fa}
        placeholder={text}
        onChange={(val) => {
          setFieldValue(field.name, convert(val));
        }}
      />
    </DateHolder>
  );
};

// export default function DateInput() {
//   const [state, setState] = useState({ format: "YYYY/MM/DD" });

//   const convert = (date, format = state.format) => {
//     let object = { date, format };

//     setState({
//       persian: new DateObject(object).convert(persian, persian_en).format(),
//       ...object,
//     });
//   };

//   const [value, setValue] = useState(new Date());

//   return (
//     <div>
//       <DatePicker
//         calendar={persian}
//         hideWeekDays={true}
//         locale={persian_fa}
//         value={state.value}
//         name="date"
//         onChange={convert}
//       />
//     </div>
//   );
// }
