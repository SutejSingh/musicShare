import { StyleSheet, Text, View } from 'react-native';
import ConnectionButton from '../../Components/ConnectionButton';
import LoginButton from '../../Components/SpotifyConnect';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { authStyles } from '../../Styles/authStyles';
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../Styles/colors';

import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import '../../assets/global'

WebBrowser.maybeCompleteAuthSession();
// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const ConnectAccounts = () => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });


    const [result, setResult] = useState(null);

    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('http://localhost:3000/spotify/login?userID='+global.user._id);
        setResult(result);
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return ( 
        <View style={authStyles.container}>
             <LinearGradient
                colors={[colors.primary, colors.secondary]}
                locations={[0, 0.9]}
                style={authStyles.gradientBackground}>
            <Text style={[authStyles.boldTitleText,{fontFamily: 'Quicksand_700Bold',fontSize:27}]}>
                One Last Step
            </Text>
            <Text style={[authStyles.subtitleText,{fontFamily: 'Quicksand_400Regular',fontSize:27}]}>
                Connect your music apps!
            </Text>
            <ConnectionButton  app='apple' />
            <ConnectionButton onPress={() => _handlePressButtonAsync()} app='spotify' />
            </LinearGradient>
        </View>
     );
}



export default ConnectAccounts;
