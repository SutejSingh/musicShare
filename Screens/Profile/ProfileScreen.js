import { Image, SafeAreaViewBase, Text, TouchableOpacity, View } from "react-native";
import styles from '../../Components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../../Components/Header";
import '../../assets/global';
import { SafeAreaView } from "react-native";
import { homestyles } from "../../Styles/homeStyles";
import colors from "../../Styles/colors";
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';
import ProfileInfo from "../../Components/ProfileInfo";
import YourRecord from "../../Components/YourRecord";

const ProfileScreen = ({route,navigation}) => {
    // const user = route.params.user
    // const me = route.params.user.username == global.user.username
    return ( 
        <SafeAreaView style={homestyles.container}>
            <View style={styles.contentColumn}>
                <Header />
                <ProfileInfo name={'Sean Kim'} friend='true'/>
            </View>
            <Text>
                Sean Kim's Record
            </Text>
            <View style={styles.contentColumn}>
                <YourRecord name={'Sean Kim'}/>
            </View>
        </SafeAreaView>
        
     );
}
 
export default ProfileScreen;