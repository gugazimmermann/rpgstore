/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      parent
      products {
        items {
          id
          name
          quantity
          value
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        parent
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        parent
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      quantity
      value
      categoryID
      category {
        id
        name
        parent
        products {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comments {
        items {
          id
          name
          email
          rating
          comment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productCommentsId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryProductsId
      owner
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        value
        categoryID
        category {
          id
          name
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        quantity
        value
        categoryID
        category {
          id
          name
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      name
      email
      rating
      comment
      product {
        id
        name
        quantity
        value
        categoryID
        category {
          id
          name
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryProductsId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCommentsId
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        rating
        comment
        product {
          id
          name
          quantity
          value
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productCommentsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        rating
        comment
        product {
          id
          name
          quantity
          value
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryProductsId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productCommentsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
