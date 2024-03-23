import React, { useState } from "react";

const Sidenavigationbar = () => {
  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleMonthClick = (month) => {
    setSelectedMonths([month]);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="pl-8 font-bold text-lg text-light-gray ">
      <div className=" left-0  w-64 border-b-2 p-6 border-b-dim-gray  bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
        <h2 className="pl-3">Months</h2>
        {months.map((month) => (
          <label key={month} className="p-2 flex items-center">
            <input
              type="checkbox"
              checked={selectedMonths.includes(month)}
              onChange={() => handleMonthClick(month)}
              className="transition duration-200 ease-in-out"
            />
            <span className="pl-2">{month}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidenavigationbar;
