import { useState } from "react";
import "./App.css";
import Datepicker from "./components/datepicker/Datepicker";
import { DatepickerType } from "./enums";
function App() {
  const [pickDate, setPickDate] = useState<Date[] | null>(null);

  const handleDateChange = (newDateAry: Date[]) => {
    setPickDate(newDateAry);
  };
  return (
    <>
      <Datepicker
        type={DatepickerType.Multiple}
        onDateChange={handleDateChange}
      ></Datepicker>
      <div className="m-auto w-[350px] text-center">
        Pick Date:
        <br />
        {pickDate &&
          pickDate.map((item, index) => (
            <p key={index}>
              {item.getFullYear()}-{item.getMonth() + 1}-{item.getDate()}
            </p>
          ))}
      </div>
    </>
  );
}

export default App;
