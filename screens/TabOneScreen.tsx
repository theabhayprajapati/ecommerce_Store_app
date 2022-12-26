import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React from 'react';
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Product from '../components/Product.component';
import { useAppContext } from '../globals/AppContext';
import { API_URL } from '../globals/backend/user';
import { ProductT, RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { products, setProducts, currentUser } = useAppContext();
  const [searchedText, setSearchedText] = React.useState<string>('')
  const [searchedProducts, setSearchedProducts] = React.useState<ProductT[]>([])
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      setSearchedProducts(response.data.products)
      setProducts(response.data.products)
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    if (searchedText.length > 0) {
      const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().trim().includes(searchedText.toLowerCase().trim())
      })
      setSearchedProducts(filteredProducts)
    } else {
      setSearchedProducts(products)
    }
  }, [searchedText])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={{
            ...styles.title,
            marginBottom: 10,
          }}>Hii {
              'There'
            }</Text>

          <Text style={styles.title}>Search Products</Text>
          {/* make a search box and  */}
          <SearchInputField searchedText={searchedText} setSearchedText={setSearchedText} />
          <View style={styles.chipsContainer}>
          </View>
          <Text style={styles.title}>Products</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>

            <FlatList
              data={searchedProducts}
              renderItem={({ item }) => (
                <Pressable onPress={
                  // @ts-ignore
                  () => navigation.push('ProductDetails', {
                    product: item,
                    searchedProducts: searchedProducts
                  })
                }>
                  <Product {...item} />
                </Pressable>
              )}
              keyExtractor={item => item.id.toString()}
              numColumns={1}
            />
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
const SearchInputField = ({ searchedText, setSearchedText }: any) => {
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
      <TextInput placeholder="Search" style={{
        flex: 1,
        /* default styling and input innter border*/
        borderWidth: 0,
        padding: 0,
        margin: 0,
        marginLeft: 10,
        fontSize: 16,

      }} value={searchedText} onChangeText={setSearchedText} />
      {
        searchedText.length > 0 && (
          <Pressable onPress={() => setSearchedText('')}>
            <Ionicons name="close" size={24} color="black" />
          </Pressable>
        )
      }
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

