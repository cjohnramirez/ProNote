import React, { useState } from "react";

interface HabitCheckboxInterface {
  disabled: boolean;
  color: string;
}

function HabitCheckbox({ disabled, color }: HabitCheckboxInterface) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <button
      className="flex items-center justify-center rounded-md p-[2px]"
      style={{
        border: `1px solid #${!disabled ? color : ""}`,
        padding: `${!disabled ? "" : "3px"}`,
      }}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <div
        className="h-5 w-5 rounded-sm p-1"
        style={{
          backgroundColor: `#${!disabled && clicked ? color : "080813"}`,
        }}
      ></div>
    </button>
  );
}

export default HabitCheckbox;
