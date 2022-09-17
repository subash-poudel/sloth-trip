import { TextField, TextFieldProps } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import * as DateFnsAdapter from "@date-io/date-fns";
import { useState } from "react";

export const DatePicker = () => {
  const [value, setValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter.default}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue, "nv");
        }}
        renderInput={(startProps: TextFieldProps) => (
          <>
            <TextField {...startProps} />
          </>
        )}
      ></StaticDatePicker>
    </LocalizationProvider>
  );
};
