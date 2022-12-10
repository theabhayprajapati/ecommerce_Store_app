import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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
const AdminHomePage = () => {
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
                > {"₹"} {product.price}</Text>
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

