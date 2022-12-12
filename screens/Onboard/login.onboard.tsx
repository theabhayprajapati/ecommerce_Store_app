import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* image */}
            <Image source={
                { uri: 'https://media.swipepages.com/2022/12/638ccd45a0b63800105f0b87/logo-trademark-with-outline-750.png' }
            } style={{ width: "100%", height: 100 }} />
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
        padding: 20,
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