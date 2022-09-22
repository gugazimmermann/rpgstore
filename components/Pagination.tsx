import CaretLeft from "./icons/CaretLeft";
import { useState, useEffect } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  perPage: number;
  total: number;
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  perPage,
  total,
}: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    setPages(Array.from(Array(Math.ceil(total / perPage)).keys()));
  }, [perPage]);

  return (
    <div className="flex flex-col items-center justify-center text-center my-8">
      <h5>{`Showing ${(currentPage - 1) * perPage + 1} to ${
        currentPage * perPage
      } of ${total}`}</h5>

      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              type="button"
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
              disabled={currentPage === 1}
              className="block py-2 px-3 ml-0 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <CaretLeft />
            </button>
          </li>
          {pages.map((p) => (
            <li key={p + 1}>
              <button
                type="button"
                onClick={() => setCurrentPage(p + 1)}
                disabled={currentPage === p + 1}
                className={`py-2 px-3 leading-tight border border-gray-300  ${currentPage === p + 1 ? 'text-white bg-gray-500 ' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
              >
                {p + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() =>
                setCurrentPage(
                  currentPage <= pages[pages.length - 1]
                    ? currentPage + 1
                    : pages[pages.length - 1]
                )
              }
              disabled={currentPage >= pages[pages.length - 1]}
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Next</span>
              <CaretLeft right />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
