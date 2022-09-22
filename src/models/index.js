// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Product, Comment } = initSchema(schema);

export {
  Category,
  Product,
  Comment
};