import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../globals/AppContext";


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200,
        flex: 1,
        marginBottom: 20,
        /* center */
        alignSelf: "center",

    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "black",
    },
    description: {
        fontSize: 18,
        color: "black",
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

const ProductDetails = ({ route, navigation }: any) => {
    const product = route.params.product;
    const { setCartItems } = useAppContext();
    /* just add this product */
    const addToCart = () => {
        console.log("addToCart", product);
        setCartItems((current: any) => [...current, product]);
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
                resizeMode="contain"
            />
            <View style={{ flex: 1 }}>
                <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 20,
                    color: "green",
                }}>{product.adminName}</Text>
                {/*  */}
                <Text style={styles.description} numberOfLines={7}>{product.description}</Text>
                <Text style={styles.price}>{product.price.toFixed(2)}</Text>
                {/* touch able opacity with at bottom abosulte */}

            </View>


            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 10,
                    height: 50,
                    width: "100%",
                    backgroundColor: "#e3f2fd",
                    padding: 10,
                    borderRadius: 10,
                }}
                onPress={addToCart}
            >
                <Text
                    style={{
                        color: "#00bcd4",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default ProductDetails;