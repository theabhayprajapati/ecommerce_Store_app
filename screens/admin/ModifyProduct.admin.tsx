import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
/*  */
const ModifyProductPage = () => {
    /* allow seller to modify product details.
    title, price, description, image, quantity,
    */
    const [product, setProduct] = React.useState({
        title: '',
        price: '',
        description: '',
        image: '' as any,
        quantity: '',
    })

    const onChange = (e: any) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        // dispatch(createProduct(product))
    }

    const selectImage = async () => {
        // Open the device's image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (!result.canceled) {
            setProduct({ ...product, image: result.assets[0].uri });
        }
    };
    const clearImage = () => {
        // Set the product's image field to null, to unselect the selected image
        setProduct({ ...product, image: null });
    };

    return (
        <View
            style={styles.container}
        >
            <Text>Modify Product Page</Text>
            <ScrollView
                style={styles.scrollView}
            ><Text>Title:</Text>
                <TextInput style={styles.input}
                    value={product.title}
                    placeholder='Title'
                    onChangeText={title => setProduct({ ...product, title })}
                />
                <Text>Price:</Text>
                <TextInput style={styles.input}
                    value={product.price}
                    onChangeText={price => setProduct({ ...product, price })}
                />
                <Text>Description:</Text>
                <TextInput style={styles.input}
                    value={product.description}
                    onChangeText={description => setProduct({ ...product, description })}
                />
                <Text>Image:</Text>
                {product.image && (
                    <Image
                        source={{ uri: product.image }}
                        style={{ width: 200, height: 200 }}
                    />
                )}
                {/* <Button title="Select Image" onPress={selectImage} /> */}
                <TouchableOpacity style={styles.button} onPress={selectImage}>
                    <Text style={styles.buttonText}>Select Image</Text>
                </TouchableOpacity>
                {product.image && (
                    <TouchableOpacity style={{ ...styles.button, backgroundColor: "red" }} onPress={clearImage}>
                        <Text style={styles.buttonText}>Clear Image</Text>
                    </TouchableOpacity>
                )}

                <Text>Quantity:</Text>
                <TextInput style={styles.input}
                    value={product.quantity}
                    onChangeText={quantity => setProduct({ ...product, quantity })}
                />

            </ScrollView>
        </View>

    )
}

export default ModifyProductPage

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
    input:
    {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    }, button: {
        backgroundColor: '#0099ff',
        padding: 12,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
}
)