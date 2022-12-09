import { Image, StyleSheet, Text, View } from 'react-native';
const ProductPage = ({ route, navigation }: any) => {
    console.log(route);
    const product = route.params.product;
    const { name, price, image } = product
    return (
        <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Image source={{ uri: image }} style={styles.image} />
        </View>
    )
}

export default ProductPage

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
})