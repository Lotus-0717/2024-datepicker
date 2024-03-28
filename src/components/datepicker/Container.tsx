import { useState } from "react";
import DatepickerBody from "./Body";
import DatepickerHeader from "./Header";
import { DatepickerType } from "../../enums";
interface Props {
  type: DatepickerType;
  dateAry: Date[];
  setDateAry: React.Dispatch<React.SetStateAction<Date[]>>;
}
const DatepickerContainer = ({ dateAry, setDateAry, type }: Props) => {
  const currentDate = new Date();
  const [displayYear, setDisplayYear] = useState(currentDate.getFullYear());
  const [displayMonth, setDisplayMonth] = useState(currentDate.getMonth() + 1);
  return (
    <div className="mx-auto my-5 w-[350px] text-base">
      <DatepickerHeader
        displayYear={displayYear}
        setDisplayYear={setDisplayYear}
        displayMonth={displayMonth}
        setDisplayMonth={setDisplayMonth}
        type={type}
      ></DatepickerHeader>
      <DatepickerBody
        currentDate={currentDate}
        displayYear={displayYear}
        displayMonth={displayMonth}
        dateAry={dateAry}
        setDateAry={setDateAry}
        type={type}
      ></DatepickerBody>
    </div>
  );
};

export default DatepickerContainer;
