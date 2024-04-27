import React from "react";
import "./style.css";

const DateRenderer = () => {
  const [value, setValue] = React.useState(new Date().toISOString().slice(0, 10));
  return (
    <div className="date_picker">
      <input type="date" onChange={e => setValue(new Date(e.target.valueAsDate).toISOString().slice(0, 10))} value={value} />
    </div>
  );
};

export default DateRenderer;
