import { DayItemType } from "../../enums";
import DatepickerDayItem from "./DayItem";

const DatepickerWeekRow = () => {
  const weekStr = ["日", "一", "二", "三", "四", "五", "六"];
  return (
    <div className="flex w-full">
      {weekStr.map((item) => (
        <DatepickerDayItem itemType={DayItemType.ReadOnly} key={item}>
          <p>{item}</p>
        </DatepickerDayItem>
      ))}
    </div>
  );
};

export default DatepickerWeekRow;
