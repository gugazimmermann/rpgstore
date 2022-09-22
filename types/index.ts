export enum ORDERBY {
  NAME = 'name',
  PRICE = 'price',
  RATING = 'rating',
  COMMENTS = 'comments',
}

export type ICategory = {
  id: string;
  name: string;
  parent?: string;
  subcategories?: ICategory[];
  products?: IProductsResult;
};

export type IProduct = {
  id: string;
  name: string;
  quantity: number;
  value: number;
  category: string;
  categories?: string[];
  comments: number;
  rating: number;
};

export type IComment = {
  id: string;
  productID: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export type IProductsResult = {
  total: number;
  data: IProduct[];
};
