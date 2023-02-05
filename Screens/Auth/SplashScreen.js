import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { authStyles } from "../../Styles/authStyles";
import { LinearGradient } from 'expo-linear-gradient';
import colors from "../../Styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({navigation}) => {
    useEffect(() =>{
        setTimeout(async () => {
            await AsyncStorage.getItem('myUser')
            .then((value) => {
                if(value){
                    const user = JSON.parse(value)
                    global.user = user
                    navigation.navigate('Tabs')
                }else{
                    navigation.navigate('Login')
                }
            })
            .catch((error) => {
                navigation.navigate('Login')
                console.log(error)
            })
        }
        , 3000)
    },[navigation])
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