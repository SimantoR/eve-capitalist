"use client";

import React from "react";
import ExtLink from "@components/ExtLink";
import { Poppins } from 'next/font/google';

interface ItemViewProps {
  item: {
    id: number;
    name: string;
    volume: string | number;
  }
  quantity: number;
  created: string;
  due: string;
  payout: string;
  status?: "pending" | "active" | "completed"
}

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

const ItemView: React.FC<ItemViewProps> = function (props) {
  const {
    item,
    quantity,
    created,
    due,
    payout,
    status = "pending",
  } = props;

  const blueprintURL = React.useMemo(() => `https://eve-industry.org/calc/?q=${item.name}&techlevel=1&id=33471&runs=1&jobs=1&te=20&me=10&materials_modifier=1&cte=20&cme=10&c_materials_modifier=1&enc=5&dc1=5&dc2=5&decryptor=0&skill_m=0.80&implant_m=1.0&facility_m=1&solarSystem_m=Osmon&taxRate_m=10&skill_mc=0.80&implant_mc=1.0&facility_mc=1&solarSystem_mc=Osmon&taxRate_mc=10&skill_te=0.75&implant_te=1.0&facility_te=1&solarSystem_te=Osmon&taxRate_te=10&skill_me=0.75&implant_me=1.0&facility_me=1&solarSystem_me=Osmon&taxRate_me=10&skill_c=0.75&implant_c=1.0&facility_c=1&solarSystem_c=Osmon&taxRate_c=10&facility_i=1&solarSystem_i=Osmon&taxRate_i=10&advanced_industry=5`, [item])

  const marketURL = React.useMemo(() => `https://evemarketer.com/types/${item.id}`, [item.id])

  const itemInfoURL = React.useMemo(() => `https://everef.net/type/${item.id}`, [item.id]);

  function Status() {
    switch (status) {
      case "completed":
        return <p className="px-2 border rounded-full shadow bg-green-500 dark:bg-green-900 text-white">Completed</p>
      case "active":
        return <p className="px-2 border rounded-full shadow bg-blue-500 dark:bg-blue-900 text-white">Active</p>
      case "pending":
      default:
        return <p className="px-2 border rounded-full shadow bg-orange-500 dark:bg-orange-900 text-white">Pending</p>
    }
  }

  return (
    <div className="p-4 rounded-lg shadow border dark:border-gray-600 space-y-4 dark:bg-slate-900">
      <div className="flex flex-row space-x-4">
        <div>
          <img
            src={`https://imageserver.eveonline.com/Type/${item.id}_64.png`}
            className="rounded-lg shadow"
            alt={item.name}
            width={64}
            height={64}
          />
        </div>
        <div>
          <ExtLink href={itemInfoURL}>
            <h3 className="text-lg font-semibold" style={poppins.style}>{item.name}</h3>
          </ExtLink>
          <p className="text-sm text-gray-600" style={poppins.style}>{item.volume} m3</p>
        </div>
        <div className="flex-grow flex justify-end">
          {/* <div className="animate__animated animate__pulse animate__infinite"> */}
          <div className="text-sm select-none" style={poppins.style}>
            <Status />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
        <div>
          <h4 className="text-gray-600 dark:text-gray-500">Quantity</h4>
          <p className="font-semibold dark:text-gray-400">
            {quantity}
          </p>
        </div>
        <div>
          <h4 className="text-gray-600 dark:text-gray-500">Created</h4>
          <p className="font-semibold dark:text-gray-400">
            {created}
          </p>
        </div>
        <div>
          <h4 className="text-gray-600 dark:text-gray-500">Due</h4>
          <p className="font-semibold dark:text-gray-400">
            {due}
          </p>
        </div>
        <div>
          <h4 className="text-gray-600 dark:text-gray-500">Created By</h4>
          <p className="font-semibold dark:text-gray-400">
            <ExtLink href="https://zkillboard.com/character/2119948867/">
              Radulle
            </ExtLink>
          </p>
        </div>
        <div>
          <h4 className="text-gray-600 dark:text-gray-500">Payout</h4>
          <p className="font-semibold dark:text-gray-400">
            {payout} ISK
          </p>
        </div>
        <div>
          <h4 className="text-gray-600">Blueprint</h4>
          <p className="font-semibold">
            <ExtLink href={blueprintURL}>
              Stratios BP
            </ExtLink>
          </p>
        </div>
        <div>
          <h4 className="text-gray-600">Market Price</h4>
          <p className="font-semibold">
            <a href={marketURL} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 visited:text-blue-900 hover:underline">
              14.4 M
            </a>
          </p>
        </div>
        {status === 'completed' && (
          <div>
            <h4 className="text-gray-600">Fulfilled by</h4>
            <p className="font-semibold">
              <ExtLink href="https://zkillboard.com/character/2119948867/">
                GunSlinger
              </ExtLink>
            </p>
          </div>
        )}
      </div>
      <div className="w-full">
        <button className="w-full px-4 py-2 rounded-full hover:shadow-lg border border-green-800 hover:bg-green-800 dark:hover:bg-green-600 transition-colors text-green-800 hover:text-white">
          Claim Contract
        </button>
      </div>
    </div>
  )
}

export {
  ItemView as default,
  type ItemViewProps,
}