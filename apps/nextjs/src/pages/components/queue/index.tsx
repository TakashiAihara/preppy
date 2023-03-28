/*
function Queue() {
  return (
    <div className="container border rounded-xl mx-auto bg-gray-200 m-10 shadow p-8">
      <p className="font-bold mb-5 text-3xl text-gray-700">Welcome!</p>
      <p className="text-lg text-gray-500">React and Tailwind CSS in action</p>
    </div>
  );
}
export default Queue;
*/

import React from "react";
import Image from "next/image";

export default function Queue({
  title = "test",
  body = "test",
  image = "/150x150.png",
  date = "2022-01-02",
}) {
  return (
    <>
      <div className="bg-white rounded-xl mx-auto max-w-md shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="object-cover h-48 w-full md:w-48"
              width={100}
              height={100}
              src={image}
              alt={title}
            />
          </div>
          <div className="p-8">
            <div className="font-semibold text-sm tracking-wide text-indigo-500 uppercase">
              {date}
            </div>
            <a
              href="#"
              className="font-medium mt-1 text-lg text-black leading-tight block hover:underline"
            >
              {title}
            </a>
            <p className="mt-2 text-gray-500">{body}</p>
          </div>
        </div>
      </div>
      <div className="container border rounded-xl mx-auto bg-gray-200 m-10 shadow p-8">
        <p className="font-bold mb-5 text-3xl text-gray-700">Welcome!</p>
        <p className="text-lg text-gray-500">
          React and Tailwind CSS in action
        </p>
      </div>
    </>
  );
}
