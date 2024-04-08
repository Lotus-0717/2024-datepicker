import { useState, useEffect } from "react";
import { DatepickerType } from "../../enums";
import DatepickerContainer from "./Container";

interface Props {
  type: DatepickerType;
  onDateChange: (newDateAry: Date[]) => void;
}
const Datepicker = ({ type, onDateChange }: Props) => {
  const [dateAry, setDateAry] = useState<Date[]>([]);
  useEffect(() => {
    onDateChange(dateAry);
  }, [dateAry, onDateChange]);
  return (
    <div>
      <DatepickerContainer
        type={type}
        dateAry={dateAry}
        setDateAry={setDateAry}
      ></DatepickerContainer>
    </div>
  );
};

export default Datepicker;
