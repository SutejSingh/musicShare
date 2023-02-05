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

const Friend = ({item,friend}) => {
    const name = item.name;
    const username = item.username
    const appname1 = item.appname1
    const appUsername1 = item.appUsername1
    const appname2 = item.appname2
    const appUsername2 = item.appUsername2

    return ( 
        <View>
            <View style = {[styles.friendBox,styles.shadowProp]}>
                <View style={styles.friendBoxContent}>
                    <View style={styles.ContentLeft}>
                    <Image source={require('../assets/sean.png')} style={{height:60,width:60}} />
                        <View style={[styles.friendAppleOrSpotifyButton, {marginLeft: 5}]}>
                            <Text style = {[{fontSize: 25, fontFamily: 'Quicksand_400Regular', marginBottom:0}]}>
                            {name}
                            </Text>
                            <View style={[styles.friendBoxRow, {marginTop:0, padding:0}]}>
                                <UserMusicFriendButtom app={item.appname1} username={item.appUsername1}/>
                                <UserMusicFriendButtom app={item.appname2} username={item.appUsername2}/>
                            </View>
                        </View>
                    </View>
                        {
                            friend &&
                            <View style={styles.ContentRight}>
                                <Text style = {[styles.friendBoxText,{fontFamily: 'Quicksand_400Regular', fontSize: 12, color: '#ABABAB'}]}>
                                Listening to Send My Love
                                </Text>
                                <View style={styles.friendBoxRow}>
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
                        }
                        {
                            !friend &&
                                <View>
                                     <LinearGradient
                                    colors={[colors.primary, colors.secondary]}
                                    style={{borderRadius: 13.5, padding: 1, margin: 2}}
                                    >
                                    <TouchableOpacity style={styles.friendTabBarOnTab}>
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
    );
}
 
export default Friend;