import { ReactElement } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Category, Product, Comment } from "../../src/models";
import { IProduct, ICategory, IComment } from "../../types";
import SERVER from "../../utils/server";

type AboutProps = {
  categories: ICategory[];
  products: IProduct[];
  comments: IComment[];
};

function Seed({ categories, products, comments }: AboutProps): ReactElement {
  const handleSeed = async () => {
    for (let category of categories) {
      const newCategory = await DataStore.save(
        new Category({
          name: category.name,
          parent: category.parent || "",
        })
      );
      for (let product of products) {
        if (product.category === category.id) {
          const newProduct = await DataStore.save(
            new Product({
              name: product.name,
              quantity: product.quantity,
              value: product.value,
              categoryID: newCategory.id,
              category: newCategory,
            })
          );
          for (let comment of comments) {
            if (comment.productID === product.id) {
              const newComment = await DataStore.save(
                new Comment({
                  productID: newProduct.id,
                  name: comment.name,
                  email: comment.email,
                  rating: comment.rating,
                  comment: comment.comment || "",
                  product: newProduct,
                })
              );
            }
          }
        }
      }
    }
  };

  return (
    <div className="p-8 flex flex-col gap-8 bg-white">
      <button
        type="button"
        className="px-2 py-1.5 border border-slate-500"
        onClick={() => handleSeed()}
      >
        Seed
      </button>
    </div>
  );
}

export const getStaticProps = async () => {
  const categories = SERVER.getSeedCategories();
  const products = SERVER.getSeedProducts();
  const comments = SERVER.getSeedComments();
  return {
    props: {
      products,
      categories,
      comments,
    },
  };
};

export default Seed;
