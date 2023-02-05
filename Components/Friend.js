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
            <View style = {styles.friendTabBar}>
                <View style={styles.friendTabBarContent}>
                    {/* {My Friends} */}
                    <LinearGradient
                        colors={[colors.primary, colors.secondary]}
                        style={{borderRadius: 13.5, padding: 1}}
                    >
                        <TouchableOpacity style={styles.friendTabBarOnTab}>
                            <Text>
                                My friends
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity>
                        <Text>
                            Request
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                           Suggestions
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
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