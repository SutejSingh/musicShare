import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const clientId = 'bd3de74cd59947e0b94f02d6dcaa0ead';
const redirectUri = 'http://localhost:8888/callback';

const LoginButton = () => {

    const generateRandomString = (length) => {
        return Math.random().toString(36).substring(2, length + 2);
    };

    const [state, setState] = useState(generateRandomString(16));


    const handleLoginPress = async () => {
        const scope = 'user-read-private user-read-email';
        const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
        const result = await WebBrowser.openBrowserAsync('google.com');
    };

    return (
        <View>
            <TouchableOpacity style={{backgroundColor:'red',width:20,height:20}} onPress={handleLoginPress}>
        {/* Add custom login button UI here */}
            </TouchableOpacity>
        </View>
    );
};

export default LoginButton;