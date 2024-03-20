import React from "react";

function Custombutton({ text, count, isSelected, onClick }) {
  return (
    <button
      className={`py-2 px-5 flex gap-x-1 font-medium rounded-xl transition-all relative hover:text-gray ${
        isSelected ? "bg-accent text-white" : "bg-dark-charcoal text-light-gray"
      }`}
      onClick={onClick}
    >
      <span
        className={`text-sm xl:text-h6 relative mix-blend-exclusion z-10 ${
          isSelected ? "text-white" : "text-light-gray"
        }`}
      >
        {text}
      </span>
      <span
        className={`flex relative justify-center mix-blend-exclusion z-10 items-center text-light-gray text-xxs xl:text-xs 2xl:text-sm leading-none ${
          isSelected ? "text-white" : ""
        }`}
      >
        {count}
      </span>
    </button>
  );
}

export default Custombutton;
