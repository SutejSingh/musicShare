import {  } from "react-native-gesture-handler";
import { homestyles } from "../Styles/homeStyles";
// import global
import '../assets/global';
import React from "react";
import { Image, View,TouchableOpacity, Text } from "react-native";
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';
const Header = ({page}) => {
    return ( 
        <View style={homestyles.mainHeader}>
            <View style={homestyles.mainHeaderLeft}>
                <TouchableOpacity>
                    <Image source={require('../assets/menu.png')} style={homestyles.headerIcon} />
                </TouchableOpacity>
                <Text style={[homestyles.headerText, {fontFamily: 'Quicksand_700Bold', marginLeft: 0}]}>
                    {page == 'friends'? 'Friends': page =='transfer'? 'Share': ''}
                </Text>
            </View>
            <View style={homestyles.mainHeaderRight}>
                <TouchableOpacity>
                    <Image source={require('../assets/search.png')} style={homestyles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/settings.png')} style={homestyles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* replace with user's image */}
                    <Image source={require('../assets/sean.png')} style={{height:35,width:35}} />
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default Header;