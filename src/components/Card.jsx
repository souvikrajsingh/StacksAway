import React from "react";

export default function SimpleCard({ title, description }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="font-semibold text-lg text-white">{title}</h2>
        <p className="text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
}
