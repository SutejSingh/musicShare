import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View,CheckBox, Image, KeyboardAvoidingView,ActivityIndicator } from "react-native";
import { authStyles } from "../../Styles/authStyles";
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import colors from "../../Styles/colors"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const CreateAccount = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const doSignUp = async () => {
        setLoading(true);
        await axios.post('http://localhost:3000/users/signUp', {
            name: name,
            username: username,
            email: email,
            password: password
        })
        .then(async (response) => {
            if(response.data._id){
                global.user = response.data;
                const jsonValue = JSON.stringify(response.data)
                setLoading(false);
                await AsyncStorage.setItem('myUser', jsonValue)
                navigation.navigate('ConnectAccounts')
            }else if(response.data){
                alert(response.data)
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
    const goToSignin= () => {
        navigation.navigate('Login')
        console.log("Go to login");
    }
    
    return ( 
        <View style={authStyles.container}>
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                locations={[0, 0.9]}
                style={authStyles.gradientBackground}>
            <KeyboardAvoidingView style={{width:'100%'}}>
            <View style={[authStyles.authHeader, {marginTop: 50}]}>
                <Text style={[authStyles.boldTitleText,{fontFamily: 'Quicksand_700Bold',}]}>
                    Create Account
                </Text>
                <Text style={[authStyles.subtitleText,{fontFamily: 'Quicksand_400Regular',}]}>
                    to get started now!
                </Text>
                <View style={authStyles.form}>
                    <Text style={authStyles.label}>
                        Name
                    </Text>
                    <TextInput 
                        onChangeText={name => setName(name)}
                        textContentType='name'   // Only for iOS
                        placeholder="Name"
                        style={authStyles.input} />
    
                    <Text style={authStyles.label}> 
                        Username
                    </Text>
                    <TextInput 
                        autoCapitalize="none"
                        onChangeText={username => setUsername(username)}
                        textContentType='username'   // Only for iOS
                        placeholder="Username"
                        style={authStyles.input} />
                     <Text style={authStyles.label}> 
                        Email
                    </Text>
                    <TextInput 
                        onChangeText={email => setEmail(email)}
                        textContentType='emailAddress'   // Only for iOS
                        placeholder="Email"
                        autoCapitalize="none"
                        style={authStyles.input} />
                    <Text style={authStyles.label}>
                        Password
                    </Text>
                    <TextInput 
                        onChangeText={text => setPassword(text)}
                        textContentType='password'   // Only for iOS
                        secureTextEntry={true}
                        placeholder="Password"
                        style={authStyles.input} />
                    <View>
                    <View style={authStyles.formBottom}>
                        <Text style={[authStyles.formTinyText,{textAlign: "center"}]}>
                        By continuing, I acknowledge and agree to and Song Hubs’s <Text style={authStyles.underline}>Terms & Conditions</Text> and <Text style={authStyles.underline}>Privacy Policy</Text>
                        </Text>
                    </View>
                    </View>
                    <TouchableOpacity onPress={() => doSignUp()} style={[authStyles.button, {marginTop: 100}]}>
                        {loading && <ActivityIndicator /> }
                        {
                            !loading &&
                            <Text style={authStyles.buttonText}>
                                Sign up
                            </Text>
                        }
                       
                    </TouchableOpacity>
                    <View style={authStyles.formBottom}>
                        <Text style={authStyles.formTinyText}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => goToSignin()}>
                            <Text style={[authStyles.boldTinyText, {marginLeft: 2}]}>
                                Sign In 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
            </LinearGradient>
        </View>
     );
}
 
export default CreateAccount;