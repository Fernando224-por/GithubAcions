import { useState } from "react";

type AccordeonProps = {
  title: string;
  children: React.ReactNode;
};

function Accordeon({ title, children }: AccordeonProps) {
  const [open, SetOpen] = useState(false);
  return (
    <div>
      <h3>{title}</h3>
      <button
        onClick={() => {
          SetOpen(!open);
        }}
      >
        {open ? "Close" : "Open"}
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}

export default Accordeon;
