// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { createRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { AdminCreateMethod } from '../../globals/backend/admin';

// import Loader from './Components/Loader';

const AdminRegisterScreen = ({ navigation }: any) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [storeName, setStoreName] = useState("");
    const [userPassword, setUserPassword] = useState('');


    const emailInputRef = createRef();
    const phoneInputRef = createRef();
    const addressInputRef = createRef();
    const passwordInputRef = createRef();

    const handleSubmitButton = async () => {
        const r = await AdminCreateMethod(userName, userEmail, userPhone, userPassword, storeName);
        alert(r);
        if (r.status === 200) {
            console.log('handleSubmitButton');
            alert("Admin Created Successfully");
            navigation.navigate('Root');
        }
        else {
            alert(JSON.stringify(r));
            navigation.navigate('RLogin');
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <KeyboardAvoidingView enabled>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserName) => setUserName(UserName)}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Name*"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                emailInputRef.current && emailInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Email *"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="email-address"
                            ref={emailInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            /* phone */
                            onChangeText={(UserPhone) => setUserPhone(UserPhone)}
                            underlineColorAndroid="#f000"
                            placeholder="Enter Phone *"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="numeric"
                            ref={phoneInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                addressInputRef.current &&
                                addressInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            /* phone */
                            onChangeText={(storename) => setStoreName(storename)}
                            underlineColorAndroid="#f000"
                            placeholder="Store Name *"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="numeric"
                            ref={phoneInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                addressInputRef.current &&
                                addressInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserPassword) =>
                                setUserPassword(UserPassword)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Enter Password *"
                            placeholderTextColor="#8b9cb5"
                            ref={passwordInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                phoneInputRef.current &&
                                phoneInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}>
                        <Text style={styles.buttonTextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
export default AdminRegisterScreen;

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,

    },
    buttonStyle: {
        backgroundColor: 'grey',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dadae8',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },
});