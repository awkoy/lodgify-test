import React, { FC, ReactNode } from "react";

type AccordionProps = {
  children: ReactNode;
};
const Accordion: FC<AccordionProps> = ({ children }) => {
  return (
    <div className="my-4 border rounded-lg overflow-hidden">{children}</div>
  );
};

export default Accordion;
