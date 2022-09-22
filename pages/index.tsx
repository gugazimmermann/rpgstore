import { ReactElement, useEffect, useState } from "react";
import { IProduct, ICategory, ORDERBY } from "../types/index";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ItemsPerPage from "../components/ItensPerPage";
import OrderBy from "../components/OrderBy";
import Pagination from "../components/Pagination";
import SERVER from "../utils/server";

type HomeProps = {
  products: IProduct[];
  categories: ICategory[];
};

const Home = ({ products, categories }: HomeProps): ReactElement => {
  const [allProds, setAllProds] = useState<IProduct[]>([]);
  const [prods, setProds] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<ORDERBY>();
  const [perPage, setPerPage] = useState<number>(8);

  const orderProducts = (pg: number) => {
    const p = allProds.map((p) => p);
    if (orderBy === ORDERBY.PRICE) {
      p.sort((a, b) => a.value - b.value);
    } else if (orderBy === ORDERBY.RATING) {
      p.sort((a, b) => b.rating - a.rating);
    } else if (orderBy === ORDERBY.COMMENTS) {
      p.sort((a, b) => b.comments - a.comments);
    } else {
      p.sort((a, b) => a.name.localeCompare(b.name));
    }
    onPageChange(pg, p);
  };

  useEffect(() => {
    orderProducts(1);
  }, [orderBy]);

  const onPageChange = (page: number, p: IProduct[]) => {
    setCurrentPage(page);
    const slicedProds = p
      .map((p) => p)
      .slice(page === 1 ? 0 : (page - 1) * perPage, page * perPage);
    setProds(slicedProds);
  };

  useEffect(() => {
    orderProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    orderProducts(1);
  }, [perPage]);

  useEffect(() => {
    setAllProds(products);
    setOrderBy(ORDERBY.NAME);
  }, [products]);

  return (
    <div className="container">
      <Navbar categories={categories} />
      <main className="flex flex-col items-center sm:items-start sm:flex-row p-2">
        <aside className="w-full sm:w-2/12 flex flex-row sm:flex-col justify-around sm:justify-start sm:gap-4 p-2">
          <ItemsPerPage perPage={perPage} setPerPage={setPerPage} />
          <OrderBy orderBy={orderBy as ORDERBY} setOrderBy={setOrderBy} />
        </aside>
        <div className="w-10/12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {prods.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={perPage}
            total={products.length}
          />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const products = SERVER.getAllProducts();
  const categories = SERVER.getMenuCategories();
  return {
    props: {
      products,
      categories,
    },
  };
};

export default Home;
