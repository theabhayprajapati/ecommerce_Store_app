import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProductT } from '../../types';
type orderedProduct = ProductT & { quantity?: number, status?: string, id?: number };

function AllOrders() {
    const [orders, setOrders] = useState<orderedProduct[]>([]);
    // const { products, updateProductStatus } = props;

    useEffect(() => {
        // Fetch the list of all orders from the database
        // ...

        /* print all products */
        // Set the fetched orders as the value of the orders state
        setOrders([]);
    }, []);

    const updateProductStatus = (id?: string, status?: string) => {
        // Update the status of the product with the given id
        // ...
        setOrders(orders.map(order => {
            if (order.image === id) {
                return { ...order, status };
            }
            return order;
        }));
    }

    return (
        <View style={styles.container}>
            <Text
                style={
                    styles.title
                }
            >All Orders:</Text>
            <ScrollView
                style={styles.scrollView}
            >
                {orders.map(product => (
                    <View key={product.image}>
                        <Text>{product.title}</Text>
                        <Picker
                            selectedValue={product.status}
                            onValueChange={status => updateProductStatus(product.image, status)}
                        >
                            <Picker.Item label="Pending" value="pending" />
                            <Picker.Item label="Shipped" value="shipped" />
                            <Picker.Item label="In transit" value="in_transit" />
                            <Picker.Item label="Delivered" value="delivered" />
                        </Picker>
                    </View>
                ))}
            </ScrollView>

        </View>
    )
}

export default AllOrders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    semiTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    scrollView: {
        backgroundColor: 'white',
    }

});