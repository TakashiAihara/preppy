import React from "react";
import LinkRow from "./linkRow";
import { HomeModernIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen bg-gray-800 shadow p-3 w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="font-bold text-xl text-white">Dashboard</h2>
          </div>
          <div className="relative">
            <span className="flex py-4 inset-y-0 left-0 absolute items-center">
              <button
                title="button"
                type="submit"
                className="p-2 focus:outline-none focus:ring"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="rounded-md text-sm w-full py-2 pl-10 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <ul className="space-y-1 text-sm pt-2 pb-4">
              <LinkRow title="Home" link="#" Icon={HomeModernIcon}></LinkRow>
              <LinkRow title="Inbox" link="#" Icon={EnvelopeIcon}></LinkRow>
              <LinkRow title="Orders" link="#" Icon={EnvelopeIcon}></LinkRow>
              <LinkRow title="Settings" link="#" Icon={EnvelopeIcon}></LinkRow>
              <LinkRow title="Logout" link="#" Icon={EnvelopeIcon}></LinkRow>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="mb-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow w-full py-5 px-4">
            <div className="font-medium text-sm text-gray-500 truncate">
              Total Profit
            </div>
            <div className="font-semibold mt-1 text-3xl text-gray-900">
              $ 450k
            </div>
          </div>
          <div className="bg-white rounded-lg shadow w-full py-5 px-4">
            <div className="font-medium text-sm text-gray-500 truncate">
              Total Orders
            </div>
            <div className="font-semibold mt-1 text-3xl text-gray-900">20k</div>
          </div>
        </div>
      </div>
    </div>
  );
}
