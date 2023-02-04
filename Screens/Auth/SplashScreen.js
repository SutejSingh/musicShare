import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { authStyles } from "../../Styles/authStyles";

const SplashScreen = ({navigation}) => {
    useEffect(() =>{
        setTimeout(() => {
            navigation.navigate('Login')
        }
        , 3000)
    })
    return ( 
        <View style={authStyles.container}>
            <Image source={require('../../assets/logo.png')} style={{width: 200, height: 200}}/>
            <Text style={authStyles.logoTitleText}>
                Song Hub
            </Text>
        </View>
     );
}
 
export default SplashScreen;