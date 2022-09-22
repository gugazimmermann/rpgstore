import { useState } from "react";
import CaretDown from "./icons/CaretDown";

type ItemsPerPageProps = {
  perPage: number;
  setPerPage: (perPage: number) => void;
};

const ItemsPerPage = ({perPage, setPerPage}: ItemsPerPageProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setOpen(!open)}
      >
        Itens Per Page
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
          {[8, 16, 32].map((items) => (
            <li key={items}>
              <div className="flex items-center">
                <input
                  id="radio-item-1"
                  name="itemsPerPage"
                  type="radio"
                  checked={items === perPage}
                  value={items}
                  onChange={(e) => {
                    setPerPage(+e.target.value);
                    setOpen(false);
                  }}
                  className="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 focus:ring-2"
                />
                <label
                  htmlFor="radio-item-1"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {`${items} Items`}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemsPerPage;