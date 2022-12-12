/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  ProductDetails: undefined;
  Signin: undefined;
  Login: undefined;
  UserLogin: undefined;
  AdminLogin: undefined;
  UserRoot: undefined;
  AdminRoot: undefined;
  ModifyProductPage: undefined;
  AllOrders: undefined;
  URoot: undefined;
  AdminAddProductPage: undefined;
  RUserRoot: undefined;
  RAdminRoot: undefined;
  AdminSignUp: undefined;
  RLogin: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Account: undefined;
  AllOrders: undefined;
  ProductDetails: undefined;
  UserLogin: undefined;
  AdminAddProductPage: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
export type ProductT = {
  id: string,
  image: any,
  title: string,
  storename: string,
  quantity: number,
  desc: string,
  price: number,
  adminName: string,
}
export type OrderT = ProductT & {
  productId: string,
  productName: string,
  productprice: number,
  productquantity: number,
  productstatus: string,
  date: Date,
  adminId: string,
  adminName: string,
  userId: string,
}

/* cart item type */
export type CartItemT = OrderT;
export type AppContextT = {
  currentUser: {
    type: string;
  } & any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
  products: ProductT[];
  setProducts: React.Dispatch<React.SetStateAction<ProductT[]>>;
  cartItems: CartItemT[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemT[]>>;
  orderedProducts: OrderT[];
  setOrderedProducts: React.Dispatch<React.SetStateAction<OrderT[]>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

