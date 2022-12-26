import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from './components/ProductsDetail.components';
import AppProvider from "./globals/AppContext";
import useCachedResources from "./hooks/useCachedResources";
import AccountScreenPage from './screens/AccountScreenPage';
import TabOneScreen from "./screens/TabOneScreen";
import TabTwoScreen from "./screens/TabTwoScreen";
export type RootStackParms = {
  HomeStack: NavigatorScreenParams<HomeStackParms>;
  CartStack: NavigatorScreenParams<CartStackParms>;
  Profile: undefined;
  ProductDetails: {
    item: any;
  }
};
const RootStack = createBottomTabNavigator<RootStackParms>();

export type HomeStackParms = {
  Home: undefined;
  ProductDetails: {
    item: any;
  }
};
// 
const HomeStack = createNativeStackNavigator<HomeStackParms>();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={TabOneScreen} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
    </HomeStack.Navigator>
  );
};

export type CartStackParms = {

  Cart: undefined;
  ProductDetails: {
    item: any;
  }
};
const CartStack = createNativeStackNavigator<CartStackParms>();

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={TabTwoScreen} />
      <CartStack.Screen name="ProductDetails" component={ProductDetails} />
    </CartStack.Navigator>
  );
};


export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <>Loading....</>;
  } else {
    return (
      <NavigationContainer>
        <AppProvider>
          <RootStack.Navigator initialRouteName="HomeStack">
            <RootStack.Screen name="HomeStack" component={HomeStackScreen} options={{
              headerShown: false,
            }} />
            <RootStack.Screen name="CartStack" component={CartStackScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="Profile" component={AccountScreenPage} />
          </RootStack.Navigator>
        </AppProvider>
      </NavigationContainer>
    );
  }
}
