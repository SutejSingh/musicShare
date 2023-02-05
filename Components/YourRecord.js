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

const YourRecord = ({name,friend}) => {
    return ( 
        <View>
                <View>
                    <Image source={require('../assets/YourRecord.png')} style={{height:306,width:300, marginLeft: 10}} />
                    <Text style={styles.YourRecordName}>
                        {name}
                    </Text>
                </View>
        </View>
    );
}
 
export default YourRecord;