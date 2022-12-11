import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
    StyleSheet,
    Text, TextInput, TouchableOpacity, View
} from "react-native";
import { useAppContext } from "../../globals/AppContext";
import { UserLoginMethod } from "../../globals/backend/user";

export default function UserLogin({ navigation }: any) {
    const { setCurrentUser }: any = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        const res = await UserLoginMethod(email, password);
        console.log(res);
        if (res) {
            setCurrentUser(
                (prev: any) => ({
                    ...prev,
                    ...res,
                    type: 'user',
                })
            );
            // /* use async storage */
            // await AsyncStorage.setItem('user', JSON.stringify(res));
            /* get all items of user key and add token */
            const user: any = await AsyncStorage.getItem('user');
            var userObj = JSON.parse(user) || {};
            userObj.token = res.token;
            // userObj.token = res.token;
            console.log(userObj);
            await AsyncStorage.setItem('user', JSON.stringify(userObj));
            // back to starting page
            // Root
            navigation.navigate('UserRoot');

        }
    }

    return (
        <View style={styles.container}>
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
