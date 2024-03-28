import { useState } from "react";
import { DayItemType, DatepickerType } from "../../enums";
import DatepickerDayItem from "./DayItem";
import { calcPrevMonth, calcNextMonth } from "./utils";
interface Props {
  currentDate: Date;
  dateAry: Date[];
  displayYear: number;
  displayMonth: number;
  type: string;
  setDateAry: React.Dispatch<React.SetStateAction<Date[]>>;
}
interface MonthInfo {
  firstDay: number;
  totalDays: number;
}
const DatepickerDaysContainer = ({
  currentDate,
  displayYear,
  displayMonth,
  dateAry,
  setDateAry,
  type,
}: Props) => {
  const [firstDay, setFirstDay] = useState<Date | null>(null);
  const [lastDay, setLastDay] = useState<Date | null>(null);
  const daysAry = new Array(42).fill({
    y: null,
    m: null,
    d: null,
  }); //7天*6週

  fillMonth();

  function fillMonth() {
    const monthInfo = getMonthInfo(displayYear, displayMonth);
    fillMonthAry(monthInfo);
  }

  function getMonthInfo(year: number, month: number) {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const firstDay = firstDayOfMonth.getDay();
    const totalDays = new Date(year, month, 0).getDate();
    return { firstDay, totalDays };
  }

  function fillMonthAry(monthInfo: MonthInfo) {
    const prevMonthDaysLen = monthInfo.firstDay;
    const nextMonthDaysLen =
      daysAry.length - prevMonthDaysLen - monthInfo.totalDays;

    const prev = calcPrevMonth(displayYear, displayMonth);
    const prevMonthInfo = getMonthInfo(prev.year, prev.month);
    for (let i = 0; i < prevMonthDaysLen; i++) {
      daysAry[i] = {
        y: prev.year,
        m: prev.month,
        d: prevMonthInfo.totalDays - prevMonthDaysLen + i + 1,
      };
    }

    const next = calcNextMonth(displayYear, displayMonth);
    for (let i = 0; i < nextMonthDaysLen; i++) {
      daysAry[prevMonthDaysLen + monthInfo.totalDays + i] = {
        y: next.year,
        m: next.month,
        d: i + 1,
      };
    }

    for (let i = 1; i <= monthInfo.totalDays; i++) {
      daysAry[monthInfo.firstDay - 1 + i] = {
        y: displayYear,
        m: displayMonth,
        d: i,
      };
    }
  }

  function getDatesInRange(startDate: Date, endDate: Date): Date[] {
    //獲取兩個Date中的所有日期
    const datesRange: Date[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesRange;
  }
  return (
    <div className="flex flex-wrap">
      {daysAry.map((item) => {
        const date = new Date(item.y, item.m - 1, item.d);

        currentDate.setHours(0, 0, 0, 0);
        return (
          <DatepickerDayItem
            currentDate={currentDate}
            dateAry={dateAry}
            itemType={DayItemType.Clickable}
            key={date.getTime() + displayMonth}
            itemDate={date}
            isToday={date.getTime() === currentDate.getTime()}
            isOtherMonth={item.m !== displayMonth}
            onClick={() => {
              if (type === DatepickerType.Single) {
                setDateAry([date]);
              } else {
                if (!firstDay && !lastDay) {
                  //選了開始日
                  setFirstDay(date);
                  setDateAry([date]);
                } else if (firstDay && !lastDay) {
                  //選了結束日
                  setLastDay(date);
                  setDateAry([...getDatesInRange(firstDay, date)]);
                } else if (firstDay && lastDay) {
                  //選了第三天
                  setFirstDay(date);
                  setLastDay(null);
                  setDateAry([date]);
                }
              }
            }}
          >
            <p>{item.d}</p>
          </DatepickerDayItem>
        );
      })}
    </div>
  );
};

export default DatepickerDaysContainer;
