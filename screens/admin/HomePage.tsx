import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { API_URL } from '../../globals/backend/user';
import { ProductT } from '../../types';
const categories = ['All', 'Fruits', 'Vegetables', 'Meat', 'Fish', 'Dairy', 'Bakery', 'Drinks', 'Snacks', 'Others']

const AdminHomePage = () => {
    const [products, setProducts] = React.useState<ProductT[]>([]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/products`);
            setProducts(response.data.products)
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>All Products</Text>
                    <SearchInputField />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Product</Text>
                        <Pressable onPress={() => {
                            navigation.navigate('AdminAddProductPage')
                        }}>
                            <Ionicons name="add-circle-outline" size={24} color="blue" />
                        </Pressable>
                    </View>
                    <Text style={styles.title}>Products</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
                        <ScrollView>
                            {
                                products.map((product, index) => {
                                    return (
                                        <Pressable key={index} onPress={

                                            () => navigation.navigate('ModifyProductPage')
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
    )
}

export default AdminHomePage


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
                <Text
                    style={{ fontSize: 20, fontWeight: 'bold' }}
                >{product.name}</Text>
                <Text
                    style={{ fontSize: 20, fontWeight: 'bold' }}
                > {"₹"}
                    {Math.round(product.price).toFixed(2)}
                </Text>
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
        padding: 10,
        margin: 5,
        borderRadius: 10,
        color: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFF7',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    productdetails: {
        flex: 1,
        /* too right */
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10,
    }

});

