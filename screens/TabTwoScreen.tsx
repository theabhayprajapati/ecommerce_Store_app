import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProductProps } from './TabOneScreen';

type Cart = {
  products: ProductProps[],
  subtotal: number,
}[];

export default function TabTwoScreen() {
  const [cart, setCart] = useState<Cart>([]);
  const [title, setTitle] = useState('Checkout');
  const onPress = () => {
    return setTitle('Checkouted');
  };
  /* onpress chante style */

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Subtotal: {cart.length > 0 ? cart[0].subtotal : 0}
        </Text>
        <Pressable style={styles.buybutton} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
        <View style={styles.separator} />
        {
          cart.length > 0 ? (
            <Text>No items in cart</Text>
          ) : (
            <Text>No items in cart</Text>
          )
        }
      </View>
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
