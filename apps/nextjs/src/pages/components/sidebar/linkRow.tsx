import Link from "next/link";
import React from "react";

type LinkRowProp = {
  title: string;
  link: string;
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

const unifyClass = "h-6 text-white w-6";

export default function LinkRow({ title, link, Icon }: LinkRowProp) {
  return (
    <li className="rounded-sm">
      <Link href={link} className="rounded-md flex space-x-3 p-2 items-center">
        <Icon className={unifyClass} />
        <span className="text-gray-100">{title}</span>
      </Link>
    </li>
  );
}
