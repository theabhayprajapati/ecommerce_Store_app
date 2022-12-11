import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
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
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
                resizeMode="contain"
            />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{product
                .price}</Text>
            <Button
                title="Add to Cart"
                onPress={() => console.log("Add to Cart")}
            />
        </View>
    );
};
export default ProductDetails;