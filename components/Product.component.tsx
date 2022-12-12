import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../globals/AppContext";
import { ProductT } from "../types";


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 10,
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    info: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    storename: {
        fontSize: 14,
        color: "#333",
    },
    quantity: {
        fontSize: 12,
        color: "#555",
    },
    desc: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
    },
    actions: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#333",
    },
});

const Product = (props: ProductT) => {
    const AppContext = useAppContext();
    console.log("AppContext", AppContext);
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={{ uri: props.image }} />
            <View style={styles.info}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.storename}>{props.adminName}</Text>
                <Text style={styles.quantity}>{props.quantity}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.price}>{
                    props.price.toFixed(2)
                }</Text>
            </View>
        </View>
    );
};

export default Product;
