import {  } from "react-native-gesture-handler";
import { homestyles } from "../Styles/homeStyles";
// import global
import '../assets/global';
import React from "react";
import { Image, View,TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = ({navigation,page}) => {
    const openMenu = async () => {
        await AsyncStorage.removeItem('myUser')
        navigation.navigate('Login');
    }
    return ( 
        <View style={homestyles.mainHeader}>
            <TouchableOpacity onPress={() => openMenu()}>
                <Image source={require('../assets/menu.png')} style={homestyles.headerIcon} />
            </TouchableOpacity>
            <View style={homestyles.mainHeaderRight}>
                <TouchableOpacity>
                    <Image source={require('../assets/search.png')} style={homestyles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/settings.png')} style={homestyles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* replace with user's image */}
                    <Image source={global.user.spotifyProfilePic? {uri: global.user.spotifyProfilePic}: require('../assets/sean.png')} style={{height:35,width:35}} />
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default Header;