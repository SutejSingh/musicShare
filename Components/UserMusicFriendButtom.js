import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const UserMusicFriendButtom = (props) => {
    const app = props.app;

    return ( 
        <TouchableOpacity style={styles.friendAppleButton}>
            <Image source={app == "apple" ? require('../assets/apple.png'):require('../assets/spotify.png')} style={{width: 30, height: 30}}/>
            <Text style={styles.friendAppleButton}>
                UserName
            </Text>
        </TouchableOpacity>
     );
}
 
export default UserMusicFriendButtom;