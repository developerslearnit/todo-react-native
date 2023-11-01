import {
    View, Text, StyleSheet,
    TouchableOpacity, Image,
    Dimensions,
    TextInput
} from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import assets, { AppColors } from '../constants/app-constants';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const router = useRouter();
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onContinue = () => {
        alert(email + " " + password);
    }

    return (
        <View style={styles.container} >
            <View style={styles.logoContainer}>
                <Image source={assets.logo} resizeMode="contain" style={styles.logo} />
            </View>

            <Text style={styles.signInText}>Sign in</Text>
            <View style={{ height: 15 }} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, isEmailFocused && { borderColor: AppColors.secondary }]}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    onChangeText={(val) => setEmail(val)}
                    keyboardType="email-address"
                    placeholder='Email' />
                <View style={{ height: 15 }} />
                <TextInput
                    secureTextEntry={true}
                    style={[styles.input, isPasswordFocused && { borderColor: AppColors.secondary }]}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    onChangeText={(val) => setPassword(val)}
                    placeholder='Password' />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={onContinue}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fefefe',
        flex: 1,
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    inputContainer: {
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    input: {
        height: 55,
        borderColor: AppColors.dark300,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 20,
        color: "red"
    },
    button: {
        backgroundColor: AppColors.secondary,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5,
        width: "100%",
        marginTop: 20,
        height: 48
    },
    buttonText: {
        color: "#fff",
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: "bold"
    },
    logo: {
        width: 140,
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * .3
    },
    signInText: {
        color: AppColors.secondary,
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: "700",

    }
});