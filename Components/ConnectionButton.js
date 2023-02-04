import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { authStyles } from "../Styles/authStyles";

const ConnectionButton = (props) => {
    const app = props.app;

    return ( 
        <TouchableOpacity style={authStyles.connectionButton}>
            <Image source={app == "apple" ? require('../assets/apple.png'):require('../assets/spotify.png')} style={{width: 30, height: 30}}/>
            <Text style={authStyles.connectionButtonText}>
                Connect with {app == "apple" ? "Apple Music" : "Spotify"}
            </Text>
        </TouchableOpacity>
     );
}
 
export default ConnectionButton;