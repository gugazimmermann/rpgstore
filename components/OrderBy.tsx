import { useState } from "react";
import CaretDown from "./icons/CaretDown";
import { ORDERBY } from '../types/index';

type OrderByProps = {
  orderBy: ORDERBY;
  setOrderBy: (orderBy: ORDERBY) => void;
};

const OrderBy = ({orderBy, setOrderBy}: OrderByProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const CapitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setOpen(!open)}
      >
        Order By
        <CaretDown open={open} />
      </button>

      <div
        className={`${
          open ? "flex" : "hidden"
        } z-10 w-36 bg-white rounded-md divide-y divide-gray-100 shadow-md`}
      >
        <ul
          className="p-3 space-y-3 text-sm"
          aria-labelledby="dropdownradioButton"
        >
          {Object.values(ORDERBY).map((t) => (
            <li key={t}>
              <div className="flex items-center">
                <input
                  id="radio-item-1"
                  name="ordeBy"
                  type="radio"
                  checked={t === orderBy}
                  value={t}
                  onChange={(e) => {
                    setOrderBy(e.target.value as ORDERBY);
                    setOpen(false);
                  }}
                  className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2"
                />
                <label
                  htmlFor="radio-item-1"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {`${CapitalizeFirstLetter(t)}`}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrderBy;