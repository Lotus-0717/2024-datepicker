interface Props {
  displayYear: number;
  displayMonth: number;
}

const DatepickerHeaderMonth = ({ displayMonth, displayYear }: Props) => {
  return (
    <div className="select-none">
      {displayYear} / {displayMonth}
    </div>
  );
};

export default DatepickerHeaderMonth;
