import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { RootTabScreenProps } from '../types';

const categories = ['All', 'Fruits', 'Vegetables', 'Meat', 'Fish', 'Dairy', 'Bakery', 'Drinks', 'Snacks', 'Others']
const products = [
  {
    name: 'Apple',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Banana',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
  }, {
    name: 'Orange',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  }
  , {
    name: "Milk",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1523473827533-2a64d0d36748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  }

]
export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const onPressToProductDetails = (product: Product) => {
    navigation.navigate
      ('ProductDetails'), {
      product: product
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Search Products</Text>
          {/* make a search box and  */}
          <SearchInputField />
          {/* <View style={styles.separator} />lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
          <Text style={styles.title}>Categories</Text>
          {/* make a list of categories */}
          {/* chips */}
          {/* chips container */}
          <View style={styles.chipsContainer}>
            {/* horizontal scroll */}
            <ScrollView horizontal={true}>
              {
                categories.map((category, index) => {
                  return (
                    <Chip key={index} category={category} />
                  )
                })
              }
            </ScrollView>
          </View>
          <Text style={styles.title}>Products</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
            <ScrollView>
              {
                products.map((product, index) => {
                  return (
                    <Pressable key={index} onPress={
                      // @ts-ignore
                      () => navigation.navigate('ProductDetails', {
                        product: product,
                      })
                    }>
                      <Product key={index} product={product} />
                    </Pressable>

                  )
                })
              }
            </ScrollView>
          </View>
        </View>
        <View style={styles.separator} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* chip type */

type ChipProps = {
  category: string
}

const Chip = ({ category }: ChipProps) => {
  return (
    <View style={styles.chip}>
      <Text>{category}</Text>
    </View>
  )
}
// search input feild copoent
const SearchInputField = () => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: "black",
      borderWidth: 1,
      padding: 5,
      height: 50,
      borderRadius: 10,
    }}>
      <Ionicons name="search" size={24} color="black" />
      <TextInput placeholder="Search" style={{ flex: 1 }} />
      <Ionicons name="filter" size={24} color="black" />
    </View>
  )
}

// product type
export type Product = {
  name: string,
  price: number,
  image: string,
}
export type ProductProps = {
  product: Product
}

export const Product = ({ product }: ProductProps) => {

  /* onpress to another page */
  const onPressToProductDetails = () => {
    console.log("pressed")
  }

  return (
    <View style={styles.product}>
      {/* image */}
      {/* two cols image and details with button but */}

      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.productdetails}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
        <Pressable onPress={onPressToProductDetails}>
          <Text style={{ color: 'blue' }}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: 'white',
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    borderColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },

  productsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  product: {
    borderColor: 'black',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    color: 'black',
    borderWidth: 1,
    /* flex row two columns */
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
  },
  productdetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

