import React from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";

function AddProduct(props: any) {
    const [product, setProduct] = React.useState<any>({
        id: "",
        adminId: "",
        adminName: "",
        title: "",
        price: 0,
        quantity: 0,
        description: "",
        image: "",
    });

    async function addProduct() {
        const data: any = new FormData();
        data.append("id", product.id);
        data.append("adminId", product.adminId);
        data.append("adminName", product.adminName);
        data.append("title", product.title);
        data.append("price", product.price);
        data.append("quantity", product.quantity);
        data.append("description", product.description);
        data.append("image", {
            uri: product.image,
            type: "image/jpeg",
            name: "product.jpg",
        });

        try {
            const response = await fetch("http://localhost:3000/products", {
                method: "POST",
                body: data,
            });
            const responseJson = await response.json();
            Alert.alert("Product added successfully!");
        } catch (error) {
            console.error(error);
            Alert.alert("Error adding product!");
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Title:</Text>
            <TextInput
                style={styles.input}
                value={product.title}
                onChangeText={(title) => setProduct({ ...product, title })}
            />
            <Text style={styles.title}>Price:</Text>
            <TextInput
                style={styles.input}
                value={product.price}
                onChangeText={(price) => setProduct({ ...product, price })}
                keyboardType="numeric"
            />
            <Text style={styles.title}>Quantity:</Text>
            <TextInput
                style={styles.input}
                value={product.quantity}
                onChangeText={(quantity) => setProduct({ ...product, quantity })}
                keyboardType="numeric"
            />
            <Text style={styles.title}>Description:</Text>
            <TextInput
                style={styles.input}
                value={product.description}
                onChangeText={(description) => setProduct({ ...product, description })}
            />
            <Text style={styles.title}>Image:</Text>
            <TextInput
                style={styles.input}
                value={product.image}
                onChangeText={(image) => setProduct({ ...product, image })}
            />
            <Button title="Add Product" onPress={addProduct} />
        </ScrollView>
    );
}

export default AddProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    scrollView: {
        backgroundColor: "white",
        padding: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#0099ff",
        padding: 12,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
