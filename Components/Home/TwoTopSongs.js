import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { homestyles } from "../../Styles/homeStyles";

const TwoTopSongs = ({item}) => {
    // play selected song on platform (spotify, apple music, etc)
    return ( 
        <View style={homestyles.twoTopSongsWrapper}>
            <View style={homestyles.topSongWrapper}>
                <Image source={{uri:item.song1.art}} style={homestyles.topSongArt}/>
                <View style={{alignItems:'center',justifyContent:'center',width:'67%'}}>
                    <Text style={[homestyles.topSongName,{fontFamily:'Quicksand_700Bold'}]}>
                            {item.song1.songName}
                    </Text>
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-vertical" size={20}/>
                </TouchableOpacity>
            </View>
            <View style={homestyles.topSongWrapper}>
                <Image source={{uri:item.song2.art}} style={homestyles.topSongArt}/>
                <View style={{alignItems:'center',justifyContent:'center',width:'67%'}}>
                    <Text style={[homestyles.topSongName,{fontFamily:'Quicksand_700Bold'}]}>
                            {item.song2.songName}
                    </Text>
                </View>
                {/* three dots */}
                <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-vertical" size={20} style={{marginRight:8}}/>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default TwoTopSongs;