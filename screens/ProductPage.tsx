import { Image, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'
type ProductPageProps = {
    name: string,
    price: number,
    image: string,
}

const ProductPage = ({ name, price, image }: ProductPageProps) => {
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