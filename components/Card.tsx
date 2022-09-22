import { ReactElement } from "react";
import Image from "next/image";
import { IProduct } from "../types";
import StarFull from "./icons/StarFull";
import StarHalf from "./icons/StarHalf";
import StarEmpty from "./icons/StarEmpty";

type CardProps = {
  product: IProduct;
};

const Card = ({ product }: CardProps): ReactElement => {
  const countStars = (rating: number) => {
    let breakNumber = rating.toString().split(".");
    let value = +breakNumber[0];
    let decimal = +breakNumber[1];
    if (decimal >= 8) value += 1;
    if (decimal > 2 && decimal < 8) value = value + 0.5;
    if (decimal <= 2) value = value;
    const starts = [];
    for (let i = 1; i <= 5; i += 1) {
      if (i <= value) starts.push(<StarFull key={`${product.id}+${i}`} />);
      else if (value < i && value > i - 1)
        starts.push(<StarHalf key={`${product.id}+${i}`} />);
      else starts.push(<StarEmpty key={`${product.id}+${i}`} />);
    }
    return starts;
  };

  return (
    <div className="bg-white rounded-md flex flex-col items-center rounded-t-lg shadow-md">
      <img
        src={`/imgs/${product.id}.jpg`}
        className="rounded-lg"
        width={112}
        height={154}
        alt={product.name}
      />
      <div className="flex flex-col items-center mb-2 p-2">
        <h2 className="text-sm font-bold pt-2 text-center">{product.name}</h2>
        <h5 className="text-xs py-2 text-center">{product?.categories && product.categories.join(" / ")}</h5>
        <div className="flex flex-row justify-between items-center pb-2 text-yellow-500">
          {countStars(product.rating)}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
            {product.rating}
          </span>
        </div>
        <span className="text-xs pb-2">{`${product.comments} comments`}</span>
        <span className="text-xl font-bold pb-2">
          {`$${product.value.toFixed(2)}`}
        </span>
        <a
          href="#"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
