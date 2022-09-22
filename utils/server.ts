import { ICategory, IProduct, IProductsResult } from "../types";
import { categoryData } from "./sample-categories";
import { productsData } from "./sample-products";
import { commentsData } from "./sample-comments";

const getSeedCategories = () => categoryData;
const getSeedProducts = () => productsData;
const getSeedComments = () => commentsData;

const nestedCategories = (): ICategory[] => {
  const categories = categoryData.map((a) => ({ ...a }));
  categories.sort((a, b) => a.name.localeCompare(b.name));
  categories.forEach(
    (m) => (m.subcategories = categories.filter((c) => c.parent === m.id))
  );
  return categories;
};

const getMenuCategories = (): ICategory[] =>
  nestedCategories().filter((c) => !c.parent);

const productCategories = (id: string): string[] => {
  const c = [];
  let catID = id;
  do {
    const pc = categoryData.find((cat) => cat.id === catID);
    if (pc?.name !== "Books") {
      c.push(pc?.name || "");
      catID = pc?.parent || "";
    } else {
      catID = "";
    }
  } while (catID !== "");
  c.reverse();
  return c;
};

const getAllProducts = (): IProduct[] => {
  const products: IProduct[] = productsData.map((p) => p);
  products.forEach((p) => {
    const c = commentsData.filter((d) => d.productID === p.id);
    p.comments = c.length;
    const totalRating =
      p.comments > 0
        ? (c.reduce((a, v) => a + v.rating, 0) || 0) / p.comments
        : 0;
    p.rating = Math.round((totalRating + Number.EPSILON) * 10) / 10;
    p.categories = productCategories(p.category);
  });
  return products;
};

const SERVER = { getMenuCategories, getAllProducts, getSeedCategories, getSeedProducts, getSeedComments };

export default SERVER;
