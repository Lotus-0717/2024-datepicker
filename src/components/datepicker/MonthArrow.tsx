import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string | null;
  onClick: () => void;
}
const MonthArrow = ({ children, className, onClick }: Props) => {
  return (
    <div
      className={` flex h-full w-[44px] cursor-pointer items-center justify-center hover:bg-slate-100 ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default MonthArrow;
