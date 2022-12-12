import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text, TextInput, TouchableOpacity, View
} from "react-native";
import { useAppContext } from "../../globals/AppContext";
import { AdminLoginMethod } from "../../globals/backend/admin";

export default function AdminLogin({ navigation }: any) {
    const { setCurrentUser, setIsLoggedIn } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitButton = async () => {
        const r = await AdminLoginMethod(email, password);
        console.log(r);
        alert(r);
        if (r.message == "login successful") {
            alert("Login Successful");
            setCurrentUser(() => {
                return {
                    ...r,
                    type: 'admin'
                }
            })

            await AsyncStorage.setItem('currentUser', JSON.stringify({
                ...r.userWithoutPassword,
                type: 'admin'
            }));
            setIsLoggedIn(true);
            await AsyncStorage.setItem('isLoggedIn', 'true');
            return navigation.navigate('RAdminRoot');
        }
        else {
            alert("Login Failed");
            navigation.navigate('Login');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://media.swipepages.com/2022/12/638ccd45a0b63800105f0b87/logo-trademark-with-outline-750.png" }} style={{ width: "100%", height: 100 }} />
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
            }} onPress={() => navigation.navigate('AdminSignUp')}>
                <Text
                    style={{
                        color: '#00bcd4',
                        fontWeight: 'bold',
                    }}
                >Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSubmitButton}>
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
        borderRadius: 5,
    },
    button: {
        width: "100%",
        backgroundColor: 'grey',
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
