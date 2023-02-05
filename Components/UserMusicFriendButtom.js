import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const UserMusicFriendButtom = (props) => {
    const app = props.app;
    const username = props.username
    return ( 
        

        <TouchableOpacity style={styles.friendBoxRow}>

            <Image source={app == "apple" ? require('../assets/Apple_Color.png'): app == "spotify" ? require('../assets/Spotify_Color.png') : ""} style={{width: 12, height: 12}}/>
            <Text style={app == "apple" ? styles.friendAppleButton : app == "spotify" ? styles.friendSpotifyButton : ""}>
                {props.username}
            </Text>
        </TouchableOpacity>
     );
}
 
export default UserMusicFriendButtom;