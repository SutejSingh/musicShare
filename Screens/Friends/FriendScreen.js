import { Animated, Dimensions, Easing, FlatList, Image, Text, View } from "react-native";
import Header from "../../Components/Header";
import { homestyles } from "../../Styles/homeStyles";
import SplashScreen from "../Auth/SplashScreen";
import * as Haptics from 'expo-haptics';

import '../../assets/global';
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';
import AppLoading from "expo-app-loading";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getGreeting } from "../../util/getGreeting";
import { useEffect, useRef, useState } from "react";
import ActivityItem from "../../Components/Home/ActivityItem";
import { SafeAreaView } from "react-native";
import Friend from "../../Components/Friend";
import FadeView from "../../Components/FadeView";
import styles from "../../Components/styles";
import colors from "../../Styles/colors";

{/* <View style = {styles.friendTabBar}>
<View style={styles.friendTabBarContent}> */}
    {/* {My Friends} */}
    {/* <LinearGradient
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
</View> */}




const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const FriendScreen = () => {

    const [selectedFriendType, setSelectedFriendType] = useState(0)

    const leftAnim = useRef(new Animated.Value(50)).current
    useEffect(() => {
        Animated.timing(
            leftAnim, {
            toValue: selectedFriendType == 0 ? SCREEN_WIDTH * 0.02 : selectedFriendType == 1 ? SCREEN_WIDTH * .33 : SCREEN_WIDTH * .66,
            duration: 400,
            useNativeDriver: false,
            easing: Easing.linear()
        }).start();
    }, [selectedFriendType])

    const handleSelectorPress = (idx) => {
        setSelectedFriendType(idx)
    }
    const TabSelector = () => {
        return (
            <View style={styles.tabSelector}>
                
                {/* highlighter is here */}
                <Animated.View style={[styles.friendTabBarOnTab, { alignItems: 'center', justifyContent: 'center', left: leftAnim, position: 'absolute', backgroundColor: colors.primary, width: '33%', zIndex: 1, height: "80%"}]}>
                    <FadeView duration={700}>
                        <Text style={[ { zIndex: 3 }]}> {selectedFriendType == 0 ? "My Friends" : selectedFriendType == 1 ? "Suggestions" : "Requests"}</Text>
                    </FadeView>
                </Animated.View>
                {/* non highlighted text */}
                <TouchableOpacity onPress={() => { Haptics.selectionAsync(); handleSelectorPress(0) }} style={[{ }, styles.selector]}>
                    <Text style={[styles.selectorText, { zIndex: 3 }]}>My Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Haptics.selectionAsync(); handleSelectorPress(1) }} style={[{ }, styles.selector]}>
                    <Text style={[ styles.selectorText, { zIndex: 3}]}>Suggestions</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Haptics.selectionAsync(); handleSelectorPress(2) }} style={[{ }, styles.selector]}>
                    <Text style={[ styles.selectorText, { zIndex: 3}]}>Requests</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
    return ( 
        <SafeAreaView style={homestyles.container}>
            <Header page={'friends'} />
                <TabSelector />
            <Friend/>
        </SafeAreaView>
     );
}
 
export default FriendScreen;