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

const ProfileInfo = ({name,friend}) => {
    return ( 
        <View>
            <View style={styles.friendBoxContent}>
                <View style={styles.viewRow}>
                    <View style={styles.ContentLeft}>
                        <Image source={require('../assets/PFP.png')} style={{height:150,width:150, marginLeft: 10}} />
                    <View>
                    <View style={[styles.viewRight, {margin: 60}]}>
                        <Text style={[styles.profileName, {fontFamily: 'Quicksand_400Regular'}]}>
                            {name}
                        </Text>
                        <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            style={{borderRadius: 13.5, padding: 1, margin: 2}}
                            >
                            <TouchableOpacity style={styles.musicMatch}>
                                <Text>
                                    Music Match
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        {
                            friend &&
                                <View>
                                    <LinearGradient
                                        colors={[colors.primary, colors.secondary]}
                                        style={{borderRadius: 13.5, padding: 1, margin: 2}}
                                        >
                                        <TouchableOpacity style={styles.addFriend}>
                                            <Text>
                                                Friends
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                        }
                        {
                            !friend &&
                                <View>
                                    <LinearGradient
                                        colors={[colors.primary, colors.secondary]}
                                        style={{borderRadius: 13.5, padding: 1, margin: 2}}
                                        >
                                        <TouchableOpacity style={styles.addFriend}>
                                            <Text>
                                                Add Friend
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                        }
                       
                    </View>
                </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
 
export default ProfileInfo;