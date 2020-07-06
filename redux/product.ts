import PRODUCTS from '../data/dummyData';
import Product from '../models/product.ts';

const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CREATE_PRODUCTO = 'CREATE_PRODUCTO';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

type deleteProductAction = {
  type: typeof DELETE_PRODUCT,
  pid: string
}

type createProductAction = {
  type: typeof CREATE_PRODUCTO,
  productData: {
    title: string,
    imageUrl: string,
    description: string,
    price: number,
  },
}

type updateProductAction = {
  type: typeof UPDATE_PRODUCT,
  pid: string,
  productData: {
    title: string,
    imageUrl: string,
    description: string,
  },
}

export const deleteProduct = (productId: string): deleteProductAction => ({
  type: DELETE_PRODUCT,
  pid: productId,
});

export const createProduct = (
  title: string, imageUrl: string, description: string, price: number,
): createProductAction => ({
  type: CREATE_PRODUCTO,
  productData: {
    title,
    imageUrl,
    description,
    price,
  },
});

export const updateProduct = (
  id: string, title: string, imageUrl: string, description: string,
): updateProductAction => ({
  type: UPDATE_PRODUCT,
  pid: id,
  productData: {
    title,
    imageUrl,
    description,
  },
});

type TProduct = {
  id: string,
  ownerId: string,
  title: string,
  imageUrl: string,
  description: string,
  price: number
}

type TInitialState = {
  availableProducts: TProduct[],
  userProducts: TProduct[],
}

const initialState: TInitialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product: TProduct): boolean => product.ownerId === 'u1'),
};

export const productReducer = (
  state = initialState,
  action: deleteProductAction | createProductAction | updateProductAction,
): TInitialState => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.availableProducts.filter((product) => product.id !== action.pid),
        availableProducts: state.availableProducts.filter((product) => product.id !== action.pid),
      };
    case CREATE_PRODUCTO: {
      const newProduct = Product(new Date().toString(), 'u1', action.productData.title, action.productData.imageUrl, action.productData.description, action.productData.price);
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    }
    case UPDATE_PRODUCT: {
      const productIndex = state.userProducts.findIndex((product) => product.id === action.pid);
      const updatedProduct = Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price,
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductsIndex = state.availableProducts
        .findIndex((product) => product.id === action.pid);
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductsIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    }
    default:
      return state;
  }
};
