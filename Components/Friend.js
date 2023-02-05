import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import colors from "../Styles/colors";
import { LinearGradient } from 'expo-linear-gradient';

import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';

const Friend = () => {
    return ( 
        <View>
            <View style = {[styles.friendBox,styles.shadowProp]}>
                <View style={styles.friendBoxContent}>
                    <Image source={require('../assets/sean.png')} style={{height:60,width:60}} />
                    <Text style = {[styles.friendBoxText,{fontFamily: 'Quicksand_400Regular',}]}>
                    Sean Kim
                    </Text>
                </View>
            </View>
        </View>
    );
}
 
export default Friend;