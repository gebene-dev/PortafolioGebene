import React from "react";

export default function ConctactoLogo(props) {
  return (
    <>
      <a
        href={props.link}
        className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
      >
          <img className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200 w-10" src={props.svgLogo}/>
      </a>
    </>
  );
}
