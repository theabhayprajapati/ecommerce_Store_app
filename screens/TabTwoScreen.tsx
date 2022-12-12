import { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Product from '../components/Product.component';
import { useAppContext } from '../globals/AppContext';
export default function TabTwoScreen() {
  const { cartItems } = useAppContext();
  console.log('cartItems', cartItems);
  const [title, setTitle] = useState('Checkout');
  const onPress = () => {
    return setTitle('Checkouted');
  };
  /* onpress chante style */

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Pressable style={styles.buybutton} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
        <View style={styles.separator} />
        {/* flatlist */}
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <Product {...item} />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={1}
        />

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
    height: 50,
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
