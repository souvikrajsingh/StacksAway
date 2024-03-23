import React from "react";

const Badge = ({ text }) => (
  <div className="flex items-center justify-center px-3 py-1 bg-primary rounded-full text-super-dark-gray font-bold text-xs xl:text-sm 2xl:text-base">
    <span>{text}</span>
  </div>
);

const Card = ({ month, program, title, picUrl }) => {
  return (
    <div className="bg-dark-charcoal border-4 h-80 border-outline rounded-xl border-opacity-15  overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in group @container ">
      <div className=" bg-dark-charcoal p-6 flex flex-col @[30rem]:flex-row @[30rem]:items-center justify-between items-start gap-y-4">
        <div>
          <div className="bg-super-dark-gray flex items-center justify-center p-4 rounded-b-3xl">
            <div className="w-2/3 rounded overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0">
              <img
                src={picUrl}
                alt="image"
                className="object-cover w-200 h-200"
              />
            </div>
          </div>
          <h2 className="font-semibold pt-5 text-sm xl:text-lg">{title}</h2>
        </div>
      </div>
      <div className="flex space-x-3 px-3 ">
        <Badge text={month} />
        <Badge text={program} />
      </div>
    </div>
  );
};

export default Card;
