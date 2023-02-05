import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View,CheckBox, Image } from "react-native";
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

const CreateAccount = () => {
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

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    const goToSignup = () => {
        navigation.navigate('CreateAccount')
        console.log("Go to Signup");
    }
    return ( 
        <View style={authStyles.container}>
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                locations={[0, 0.9]}
                style={authStyles.gradientBackground}>
            <View style={authStyles.authHeader}>
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
                        <Text style={authStyles.formTinyText}>
                        By continuing, I acknowledge and agree to and Song Hubs’s <Text style={authStyles.underline}>Terms & Conditions</Text> and  <Text style={authStyles.underline}>Privacy Policy</Text>
                        </Text>
                    </View>
                    </View>
                    <TouchableOpacity style={[authStyles.button, {marginTop: 100}]}>
                        <Text style={authStyles.buttonText}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>
        </View>
     );
}
 
export default CreateAccount;