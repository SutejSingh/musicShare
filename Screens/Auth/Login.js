import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View,CheckBox, Image,ActivityIndicator} from "react-native";
import { authStyles } from "../../Styles/authStyles";
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import colors from "../../Styles/colors";
import axios from "axios";

const Login = ({navigation}) => {
    const [loading,setLoading] = useState(false);
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const goToSignup = () => {
        navigation.navigate('CreateAccount')
        console.log("Go to Signup");
    }
    const doLogin = async () => {
        setLoading(true);
        await axios.post('http://localhost:3000/users/login', {
            email: email,
            password: password
        })
        .then(async (response) => {
            if(response.data.message == "Login Successful"){
                global.user = response.data.user;
                const jsonValue = JSON.stringify(response.data.user)
                setLoading(false);
                await AsyncStorage.setItem('myUser', jsonValue)
                navigation.navigate('Tabs')
            }else{
                setLoading(false);
                console.log(response.data.message);
            }
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }
    return ( 
        <View style={authStyles.container}>
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                locations={[0, 0.9]}
                style={authStyles.gradientBackground}>
            <View style={authStyles.authHeader}>
                <Image source={require('../../assets/logo.png')} style={{width: 120, height: 120}}/>
                <Text style={[authStyles.boldTitleText,{fontFamily: 'Quicksand_700Bold',}]}>
                    Welcome
                </Text>
                <Text style={[authStyles.subtitleText,{fontFamily: 'Quicksand_400Regular',}]}>
                    Glad to see you!
                </Text>
                <View style={authStyles.form}>
                    <Text style={authStyles.label}>
                        Email
                    </Text>
                    <TextInput 
                        onChangeText={email => setEmail(email)}
                        textContentType='emailAddress'   // Only for iOS
                        placeholder="Email"
                        autoCapitalize='none'
                        style={authStyles.input} />
                    <Text style={authStyles.label}>
                        Password
                    </Text>
                    <TextInput 
                        onChangeText={text => setPassword(text)}
                        textContentType='password'   // Only for iOS
                        secureTextEntry={true}
                        autoCapitalize='none'
                        placeholder="Password"
                        style={authStyles.input} />
                    <View>

                    </View>
                    <TouchableOpacity onPress={() => doLogin()} style={authStyles.button}>
                        {loading && <ActivityIndicator/>}
                        {!loading && 
                            <Text style={authStyles.buttonText}>
                                Login
                            </Text>
                        }
                    </TouchableOpacity>
                    <View style={authStyles.formBottom}>
                        <Text style={authStyles.formTinyText}>
                            Don't have an account? 
                        </Text>
                        <TouchableOpacity onPress={() => goToSignup()}>
                            <Text style={[authStyles.boldTinyText, {marginLeft: 2}]}>
                                Sign Up Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </LinearGradient>
        </View>
     );
}
 
export default Login;