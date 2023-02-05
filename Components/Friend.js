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
import UserMusicFriendButtom from "./UserMusicFriendButtom";

const Friend = () => {
    return ( 
        <View>
            <View style = {[styles.friendBox,styles.shadowProp]}>
                <View style={styles.friendBoxContent}>
                    <View style={styles.friendBoxContentLeft}>
                        <Image source={require('../assets/sean.png')} style={{height:60,width:60}} />
                        <View style={styles.friendAppleOrSpotifyButton}>
                            <Text style = {[styles.friendBoxText,{fontFamily: 'Quicksand_400Regular', marginLeft: 4}]}>
                            Sean Kim
                            </Text>
                            <Text style = {[styles.friendBoxText,{fontFamily: 'Quicksand_400Regular', marginLeft: 4}]}>
                                <UserMusicFriendButtom/>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.friendBoxContentRight}>
                        <Text style = {[styles.friendBoxText,{fontFamily: 'Quicksand_400Regular', fontSize: 12, color: '#ABABAB'}]}>
                        Listening to Send My Love
                        </Text>
                        <View style={styles.friendBoxButtonContent}>
                        <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            style={{borderRadius: 13.5, padding: 1, margin: 2}}
                            >
                            <TouchableOpacity style={styles.friendTabBarOnTab}>
                                <Text>
                                    Share Music
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            style={{borderRadius: 13.5, padding: 1, margin: 2}}
                            >
                            <TouchableOpacity style={styles.friendTabBarOnTab}>
                                <Text>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
 
export default Friend;