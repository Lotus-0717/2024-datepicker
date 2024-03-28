import { ReactNode, useState, useEffect } from "react";
import { DayItemType } from "../../enums";

interface Props {
  children: ReactNode;
  itemType: DayItemType;
  className?: string;
  onClick?: () => void;
  currentDate?: Date;
  dateAry?: Date[];
  isToday?: boolean;
  isOtherMonth?: boolean;
  itemDate?: Date;
}

const DatepickerDayItem = ({
  children,
  itemType,
  className,
  onClick,
  dateAry,
  isToday,
  isOtherMonth,
  itemDate,
}: Props) => {
  const [style, setStyle] = useState("bg-white text-black");

  useEffect(() => {
    if (!dateAry || !itemDate) return;

    const isDateFound = dateAry.some(
      (date) => date.getTime() === itemDate.getTime(),
    );
    if (isDateFound) {
      setStyle("bg-[#006edc] text-white");
      return;
    }

    if (isToday) {
      setStyle("bg-amber-300 text-black");
    } else if (isOtherMonth) {
      setStyle("bg-[#757575] text-white");
    } else {
      setStyle("bg-white text-black");
    }
  }, [dateAry, isToday, isOtherMonth, itemDate]);

  return (
    <div
      className={`${className || ""} ${style} ${
        itemType === DayItemType.ReadOnly
          ? "hover:bg-[#fff] "
          : "cursor-pointer hover:bg-[#e6e6e6] hover:text-black"
      } box-border flex h-[36px] w-[50px] select-none items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DatepickerDayItem;
