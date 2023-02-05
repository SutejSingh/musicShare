import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { authStyles } from "../../Styles/authStyles";
import { LinearGradient } from 'expo-linear-gradient';
import colors from "../../Styles/colors";

const SplashScreen = ({navigation}) => {
    useEffect(() =>{
        setTimeout(() => {
            navigation.navigate('Login')
        }
        , 3000)
    })
    return ( 
        <View style={authStyles.container}>
            <LinearGradient 
                colors={[colors.primary, colors.secondary]}
                locations={[0, 0.9]}
                style={authStyles.gradientBackground}>
            <Image source={require('../../assets/logo.png')} style={{width: 200, height: 200}}/>
            <Text style={authStyles.logoTitleText}>
                Song Hub
            </Text>
            </LinearGradient>
        </View>
     );
}
 
export default SplashScreen;