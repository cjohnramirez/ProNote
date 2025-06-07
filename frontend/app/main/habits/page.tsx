import { ChevronLeft } from "lucide-react";
import React from "react";

function Habits() {
  return (
    <>
      <section className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl w-2/3">
        <button>
          <ChevronLeft />
        </button>
      </section>
      <section className="flex gap-4 items-center border-1 border-muted-white py-2 px-4 rounded-xl w-1/3" ></section>
    </>
  );
}

export default Habits;
