import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import colors from "../Styles/colors";
import { LinearGradient } from 'expo-linear-gradient';
import '../assets/global'
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';
import UserMusicFriendButtom from "./UserMusicFriendButtom";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Friend = ({item,friend}) => {
    const name = item.name;
    const username = item.username
    const addFriend = async () => {
        await axios.post('http://localhost:3000/users/addFriend', {
            userID: global.user._id,
            targetUserID: item._id
        })
        .then(async (response) => {
            if(response.data._id){
                global.user = response.data;
                const jsonValue = JSON.stringify(response.data)
                await AsyncStorage.setItem('myUser', jsonValue)
            }else{
                alert(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return ( 
        <View style = {[styles.friendBox,styles.shadowProp]}>
            <View style={styles.friendBoxContent}>
                <View style={styles.friendBoxContentLeft}>
                <Image source={require('../assets/sean.png')} style={{height:60,width:60}} />
                    <View style={[styles.friendAppleOrSpotifyButton, {marginLeft: 5}]}>
                        <Text style = {[{fontSize: 20, fontFamily: 'Quicksand_400Regular', marginBottom:0}]}>
                        {name}
                        </Text>
                        <View style={[styles.friendBoxRow, {marginTop:0, padding:0}]}>
                            <UserMusicFriendButtom app={'apple'} username={item.username}/>
                            <UserMusicFriendButtom app={'spotify'} username={item.username}/>
                        </View>
                    </View>
                </View>
                {
                    friend &&
                    <View style={styles.friendBoxContentRight}>
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
                    <View style={styles.friendBoxContentRight}>
                          <LinearGradient
                            colors={[colors.primary, colors.secondary]}
                            style={{borderRadius: 13.5, padding: 1, margin: 2,marginRight:20}}
                            >
                            <TouchableOpacity onPress={() => addFriend()} style={styles.friendTabBarOnTab}>
                                <Text>
                                    Add Friend
                                </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                }
                
            </View>
        </View>
    );
}
 
export default Friend;