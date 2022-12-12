import AsyncStorage from "@react-native-async-storage/async-storage";

import JWT from "expo-jwt";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text, TextInput, TouchableOpacity, View
} from "react-native";
import { useAppContext } from "../../globals/AppContext";
import { UserLoginMethod } from "../../globals/backend/user";

const jwt_decode = (token: string) => {
    return JWT.decode(token, "TjWnZr4u7w!z%C*F-JaNdRgUkXp2s5v8bQeThWmZq4t7w9z$C&F)K")
}
export default function UserLogin({ navigation }: any) {
    const { setCurrentUser, currentUser }: any = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        const res = await UserLoginMethod(email, password);
        console.log(res);
        if (res) {
            if (res.message == "login successful") {
                /* get data from user res.token jwt*/
                const userData = jwt_decode(res.token);
                console.log(userData)
                setCurrentUser(
                    (prev: any) => ({
                        ...prev,
                        ...res,
                        type: 'user',
                    })
                );
                await AsyncStorage.setItem('currentUser', JSON.stringify({
                    ...userData.userWithoutPassword,
                    type: 'user'
                }));
                await AsyncStorage.setItem('isLoggedIn', 'true');
                console.log(AsyncStorage);
                navigation.navigate('RUserRoot');
            } else {
                navigation.navigate('Login');
            }
        }
    }

    return (
        <View style={styles.container}>
            <Image source={
                { uri: 'https://media.swipepages.com/2022/12/638ccd45a0b63800105f0b87/logo-trademark-with-outline-750.png' }
            } style={{ width: "100%", height: 100 }} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={{
                width: "100%",
            }} onPress={() => navigation.navigate('Signin')}>
                <Text
                    style={{
                        color: '#00bcd4',
                        fontWeight: 'bold',
                    }}
                >Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    button: {
        width: "100%",
        backgroundColor: '#00bcd4',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
