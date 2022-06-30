import React from 'react';

export default function LengCards(props) {
  return (
      <>
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                <img className="object-cover w-32 h-32" src={props.logo} alt=""/>  
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{props.title}</h1>
            </div>
      </>
  );
}
