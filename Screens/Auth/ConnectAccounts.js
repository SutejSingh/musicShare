import { StyleSheet, Text, View } from 'react-native';
import ConnectionButton from '../../Components/ConnectionButton';
import LoginButton from '../../Components/SpotifyConnect';
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

 const ConnectAccounts = () => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });

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
            <ConnectionButton app='spotify' />
            </LinearGradient>
        </View>
     );
}



export default ConnectAccounts;
