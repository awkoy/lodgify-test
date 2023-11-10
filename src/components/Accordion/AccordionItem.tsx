import React, { useState, FC, ReactNode } from "react";
import DownArrowIcon from "../icons/DownIcon";

interface AccordionItemProps {
  title: ReactNode;
  isOpened?: boolean;
  children: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  children,
  isOpened = false,
}) => {
  const [isOpen, setIsOpen] = useState(() => isOpened);

  const handleToggle = () => {
    setIsOpen((isOpened) => !isOpened);
  };

  return (
    <div className="border-b last:border-none">
      <div
        className="py-2 h-full cursor-pointer transition-all hover:bg-slate-50 flex justify-between"
        onClick={handleToggle}
      >
        {title}
        <div className="flex items-center pr-4">
          <span className="text-gray-400 font-light text-sm">
            {isOpen ? "Hide" : "Show"}
          </span>
          <DownArrowIcon
            className={`ml-3 w-5 text-gray-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
};

export default AccordionItem;
