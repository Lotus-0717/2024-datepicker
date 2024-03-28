import { ChevronLeft, ChevronRight } from "lucide-react";
import DatepickerHeaderMonth from "./HeaderMonth";
import MonthArrow from "./MonthArrow";
import { calcPrevMonth, calcNextMonth } from "./utils";
import { DatepickerType } from "../../enums";

interface Props {
  displayYear: number;
  displayMonth: number;
  setDisplayYear: React.Dispatch<React.SetStateAction<number>>;
  setDisplayMonth: React.Dispatch<React.SetStateAction<number>>;
  type: DatepickerType;
}
const DatepickerHeader = ({
  displayMonth,
  displayYear,
  setDisplayMonth,
  setDisplayYear,
  type,
}: Props) => {
  const handlePrevMonth = () => {
    const { month, year } = calcPrevMonth(displayYear, displayMonth);
    setDisplayMonth(month);
    setDisplayYear(year);
  };

  const handleNextMonth = () => {
    const { month, year } = calcNextMonth(displayYear, displayMonth);
    setDisplayMonth(month);
    setDisplayYear(year);
  };

  return (
    <>
      <p className="text-center">Type: {type}</p>
      <div className="flex h-[44px] items-center justify-between">
        <MonthArrow onClick={handlePrevMonth}>
          <ChevronLeft size={24} />
        </MonthArrow>
        <DatepickerHeaderMonth
          displayMonth={displayMonth}
          displayYear={displayYear}
        />
        <MonthArrow onClick={handleNextMonth}>
          <ChevronRight size={24} />
        </MonthArrow>
      </div>
    </>
  );
};

export default DatepickerHeader;
