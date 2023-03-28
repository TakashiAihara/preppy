import Link from "next/link";
import React from "react";

type ElementProp = {
  title: string;
  link: string;
  data: string;
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

export default function Element({ title, link, data, Icon }: ElementProp) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-lg shadow w-full py-5 px-4">
        <div className="font-medium text-sm text-gray-500 truncate">
          {title}
          Total users
        </div>
        <div className="font-semibold mt-1 text-3xl text-gray-900">{data}</div>
      </div>
    </Link>
  );
}
