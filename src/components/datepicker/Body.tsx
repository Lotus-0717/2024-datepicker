import DatepickerDaysContainer from "./DaysContainer";
import DatepickerWeekRow from "./WeekRow";

interface Props {
  currentDate: Date;
  displayYear: number;
  displayMonth: number;
  type: string;
  dateAry: Date[];
  setDateAry: React.Dispatch<React.SetStateAction<Date[]>>;
}
const DatepickerBody = ({
  dateAry,
  setDateAry,
  currentDate,
  displayMonth,
  displayYear,
  type,
}: Props) => {
  return (
    <div>
      <DatepickerWeekRow></DatepickerWeekRow>
      <DatepickerDaysContainer
        currentDate={currentDate}
        displayMonth={displayMonth}
        displayYear={displayYear}
        dateAry={dateAry}
        setDateAry={setDateAry}
        type={type}
      ></DatepickerDaysContainer>
    </div>
  );
};

export default DatepickerBody;
