/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import ProductDetails from '../components/ProductsDetail.components';

import Colors from '../constants/Colors';
import { useAppContext } from '../globals/AppContext';
import useColorScheme from '../hooks/useColorScheme';
import AccountScreenPage from '../screens/AccountScreenPage';
import AddProduct from '../screens/admin/AddProduct.admin';
import AllOrders from '../screens/admin/AllOrders.admin';
import AdminHomePage from '../screens/admin/HomePage';
import ModifyProductPage from '../screens/admin/ModifyProduct.admin';
import AdminRegisterScreen from '../screens/admin/SignUp.admin';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import AdminLogin from '../screens/Onboard/Admin.Login';
import Login from '../screens/Onboard/login.onboard';
import { UserSignComponent } from '../screens/Onboard/signin.onboard';
import UserLogin from '../screens/Onboard/User.Login';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isLoggedIn, currentUser } = useAppContext()
  console.log(
    "Main Root Navigator: ",
    isLoggedIn,
    currentUser
  )
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        (isLoggedIn == true || 'true') ? (
          currentUser.type == "admin" ? <Stack.Screen name="AdminRoot" component={AdminNavigator} options={{ headerShown: false }} /> :
            <Stack.Screen name="UserRoot" component={UserNavigator} options={{ headerShown: false }} />
        ) : <Stack.Screen name="RLogin" component={Login} options={{ title: 'Login', headerShown: false }} />
      }
      <Stack.Screen name="Root" component={AdminBottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="URoot" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ title: 'Admin Login' }} />
      <Stack.Screen name="UserLogin" component={UserLogin} options={{ title: 'User Login' }} />
      <Stack.Screen name="RUserRoot" component={UserNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="RAdminRoot" component={AdminNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="AdminSignUp" component={AdminRegisterScreen} options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="Signin" component={UserSignComponent} options={{ title: 'Signin' }} />
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
      <Stack.Screen name="ModifyProductPage" component={ModifyProductPage} options={{
        title: 'Modify Product',
      }} />
      <Stack.Screen name="AdminAddProductPage" component={AddProduct} options={{
        title: 'Add Product',
      }} />
      <Stack.Screen name="AllOrders" component={AllOrders} options={{
        title: 'All Orders',
      }} />
    </Stack.Navigator>
  );
}

const AdminNavigator = () => {
  const { isLoggedIn, currentUser } = useAppContext()

  return (
    <Stack.Navigator>
      {
        currentUser.type == "admin" ? <Stack.Screen name="Root" component={AdminBottomTabNavigator} options={{ headerShown: false }} /> :
          <Stack.Screen name="ALogin" component={Login} options={{ title: 'Login' }} />
      }
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ModifyProductPage" component={ModifyProductPage} options={{
        title: 'Modify Product',
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.background,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Pressable
            onPress={() => alert('saved till here.')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome name="save" size={24} color="white" />
          </Pressable>
        ),
      }} />
      {/* login, signint */}
      {/* AdminAddProductPage */}
      <Stack.Screen name="AdminAddProductPage" component={AddProduct}
        options={{
          title: 'Add Product',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.light.tint,
          },
          headerTintColor: Colors.light.background,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Pressable
              onPress={() => alert('saved till here.')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>

              <FontAwesome name="save" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
      {/* AllOrders */}
      <Stack.Screen name="AdminSignUp" component={AdminRegisterScreen} options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="Signin" component={UserSignComponent} options={{ title: 'Signin' }} />
      {/* admin login , user login */}
      <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ title: 'Admin Login' }} />
      <Stack.Screen name="UserLogin" component={UserLogin} options={{ title: 'User Login' }} />
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const UserNavigator = () => {
  const { isLoggedIn, currentUser } = useAppContext()

  return (
    <Stack.Navigator>
      {
        currentUser.type == "user" ? <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} /> :
          <Stack.Screen name="Login" component={Login} options={
            { headerShown: false }
          } />
      }
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ProductDetails"
        component={ProductDetails}
        options={
          {
            title: 'Product Details',
          }
        } />
      {/* login, signint */}
      <Stack.Screen name="Signin" component={UserSignComponent} options={{ title: 'Signin' }} />
      {/* admin login , user login */}
      <Stack.Screen name="ULogin" component={Login} options={{ title: 'Login' }} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ title: 'Admin Login' }} />
      <Stack.Screen name="UserLogin" component={UserLogin} options={{ title: 'User Login' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black"
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={TabTwoScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreenPage}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

const AdminBottomTabNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black"
      }}>
      <BottomTab.Screen
        name="Home"
        component={AdminHomePage}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Admin Home Page',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // white heder
          headerStyle: {
            backgroundColor: Colors.light.tint,
          },

          headerTintColor: Colors.light.background,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <BottomTab.Screen
        name="AllOrders"
        component={AllOrders}
        options={({ navigation }: RootTabScreenProps<'AllOrders'>) => ({
          title: 'All Orders',
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={30} color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreenPage}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )

}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
