import { Image, Text, TouchableOpacity, View } from "react-native";
import { homestyles } from "../../Styles/homeStyles";

const ActivityItem = ({item,reccommend}) => {
    // play selected song on platform (spotify, apple music, etc)
    return ( 
        <View style={[homestyles.activityItem,reccommend? {height:200,borderRadius:20} : {}]}>
            <Image source={{uri:item.art}} style={homestyles.activityArt}/>
            <View style={homestyles.activityDescription}>
                <Image source={{uri:item.friendProfileImage}} style={homestyles.activityFriendImage}/>
                <View style={homestyles.activityText}>
                    <Text style={[homestyles.activityFriendName,{fontFamily:'Quicksand_700Bold'}]}>
                        {item.friend}
                    </Text>
                    <Text style={[homestyles.activitySongName,{fontFamily:'Quicksand_500Medium'}]}>
                        {item.songName}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/playButton.png')} style={homestyles.activityHeart}/>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default ActivityItem;