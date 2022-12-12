import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProductProps } from './admin/HomePage';


type Cart = {
  products: ProductProps[],
  subtotal: number,
}[];
type User = {
  name: string,
  email: string,
  password: string,
  mobnumber: number,
  avatar: string,
}

const user: User = {
  name: 'Rahul',
  email: 'theabhayprajapati@gmail.com',
  password: "falskdjfaldjwou2342s",
  mobnumber: 1234567890,
  avatar: 'https://i.pravatar.cc/300',
}

export default function AccountScreenPage() {

  const [cart, setCart] = useState<Cart>([]);
  const [title, setTitle] = useState('Add to cart');
  const onPress = () => {
    return setTitle('Checkout');
  };

  /* onpress chante style */
  const navigation = useNavigation();
  /* const logout and redirect to Login */
  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: "black",
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image source={{ uri: user.avatar }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          <Text style={styles.title}>
            {user.name}
          </Text>
          <Text style={styles.title}>
            {user.mobnumber}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.title}>
            Settings
          </Text>
          <Pressable onPress={() => logOut()}>
            <View style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
            }}>
              <FontAwesome size={30} style={{ marginRight: 10 }} name={
                'sign-out'
              } />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <Text style={styles.title}>
                  Logout
                </Text>
                <FontAwesome size={30} name="angle-right" />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    backgroundColor: 'white',
    padding: 20,
  },
  buybutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'yellow',
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }
});
