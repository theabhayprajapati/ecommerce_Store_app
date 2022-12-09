import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('AdminLogin')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Admin</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('UserLogin')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>User</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        /* absolute bottom */
        position: 'absolute',
        bottom: 100,
    },
    button: {
        backgroundColor: 'grey',
        width: '45%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },


})