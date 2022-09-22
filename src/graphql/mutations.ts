/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
