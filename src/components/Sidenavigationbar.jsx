import React, { useState } from "react";

const Sidenavigationbar = () => {
  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleMonthClick = (month) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }
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
          <div key={month} className="p-2">
            <input
              type="checkbox"
              checked={selectedMonths.includes(month)}
              onChange={() => handleMonthClick(month)}
            />
            <label className="pl-2">{month}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidenavigationbar;
