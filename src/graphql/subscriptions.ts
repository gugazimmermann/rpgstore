/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
