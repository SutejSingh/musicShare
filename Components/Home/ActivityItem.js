import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../../Styles/colors";
import { homestyles } from "../../Styles/homeStyles";

const ActivityItem = ({item,reccommend,playlist,selectedPlaylist,setSelectedPlaylist}) => {
    // play selected song on platform (spotify, apple music, etc)
    return ( 
        <View style={[homestyles.activityItem,reccommend? {height:200,borderRadius:20} :playlist? {borderRadius:12} :{}]}>
            <Image source={{uri:item.art}} style={homestyles.activityArt}/>
            <View style={[homestyles.activityDescription,playlist? {width:'70%'}  : {}, selectedPlaylist == item ? {backgroundColor:colors.primary}:{}]}>
                {
                    !playlist &&
                    <>
                    <Image source={{uri:item.friendProfileImage}} style={homestyles.activityFriendImage}/>
                    <View style={homestyles.activityText}>
                        <Text style={[homestyles.activityFriendName,{fontFamily:'Quicksand_700Bold'},playlist? {alignItems:'center',justifyContent:'center'}: {}]}>
                            {playlist ?  selectedPlaylist == item ? 'Selected' : 'Pick Playlist' :item.friend}
                        </Text>
                        <Text style={[homestyles.activitySongName,{fontFamily:'Quicksand_500Medium'}]}>
                            {item.songName}
                        </Text>
                    </View>
                        <TouchableOpacity>
                        <Image source={require('../../assets/playButton.png')} style={homestyles.activityHeart}/>
                        </TouchableOpacity>
                    </>
                }
                {playlist &&
                    <TouchableOpacity onPress={() => setSelectedPlaylist(item)} style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={[homestyles.activityFriendName,{fontFamily:'Quicksand_700Bold'},playlist? {alignItems:'center',justifyContent:'center'}: {}]}>
                                {playlist ?  selectedPlaylist == item ? 'Selected' : 'Pick Playlist' :'item.friend'}
                        </Text>
                    </TouchableOpacity>
                }
                
                
            </View>
        </View>
     );
}
 
export default ActivityItem;