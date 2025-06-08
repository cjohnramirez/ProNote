import React, { useState } from "react";

interface HabitCheckboxInterface {
  disabled: boolean;
  color: string;
  checked: boolean;
}

function HabitCheckbox({ disabled, color, checked }: HabitCheckboxInterface) {
  const [clicked, setClicked] = useState<boolean>(checked);

  return (
    <button
      className="flex items-center justify-center rounded-md p-[2px] focus:border-muted-white font-sans"
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
