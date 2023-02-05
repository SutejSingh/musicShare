import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";
import Header from "../../Components/Header";
import { homestyles } from "../../Styles/homeStyles";
import SplashScreen from "../Auth/SplashScreen";
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
import { useEffect, useState } from "react";
import ActivityItem from "../../Components/Home/ActivityItem";
import { SafeAreaView } from "react-native";
import TwoTopSongs from "../../Components/Home/TwoTopSongs";
import colors from "../../Styles/colors";
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width
const TransferScreen = () => {
    const [playlists, setPlaylists] = useState([
        {art:"https://townsquare.media/site/812/files/2020/05/Illustrated-album-covers.jpg?w=1200"},
        {art:"https://www.nme.com/wp-content/uploads/2016/09/2015AlbumMeaningComp_2_240415.jpg"},
        {art:"https://images.radiox.co.uk/images/127015?width=2500&crop=16_9&signature=wa3bmfey-Y0Xxx7nf1Ua-4qQvsM="},
    ])
    const [friends, setFriends] = useState([
        {name:"John Kim",art:"https://townsquare.media/site/812/files/2020/05/Illustrated-album-covers.jpg?w=1200"},
        {name:"Priya Singh",art:"https://www.nme.com/wp-content/uploads/2016/09/2015AlbumMeaningComp_2_240415.jpg"},
        {name:"Linda Tam",art:"https://images.radiox.co.uk/images/127015?width=2500&crop=16_9&signature=wa3bmfey-Y0Xxx7nf1Ua-4qQvsM="},
    ])
    const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])
    const [selectedFriend,setSelectedFriend]  = useState(friends[0])

    const SelectFriendBox = ({item}) => {
        return(
            <View style = {{
                width:150,
                height:170,
                borderRadius:10,
                padding:10,
                alignItems:'center',
                // shadow
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                backgroundColor:'white',
                margin:7
            }}>
                <Image source={{uri:item.art}} style={{width:85,height:85,borderRadius:70}} />
                <Text style={{fontFamily:'Quicksand_400Regular',fontSize:20,marginTop:2}}>
                    {item.name}
                </Text>
                <TouchableOpacity onPress={() => setSelectedFriend(item)} style={[{width:100,height:30,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:9},selectedFriend == item? {backgroundColor:colors.primary}:{borderColor:colors.primary,borderWidth:1,borderstyle:'solid'}]}>
                    <Text style={[{fontFamily:'Quicksand_400Regular',fontSize:12},selectedFriend == item? {color:'white',fontWeight:'700'}:{}]}>
                        {selectedFriend == item ? "Selected" : "Share Playlist"}
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    return ( 
        <SafeAreaView style={[homestyles.container,{alignItems:'center'}]}>
            <Header page={'transfer'} />
            <View style={homestyles.homeBlock}>
                <View style={homestyles.blockHeader}>
                    <Text style={[homestyles.blockHeaderText,{fontFamily:'Quicksand_500Medium',fontSize:22}]}>
                        Pick A Playlist
                    </Text>
                    <TouchableOpacity>
                        <Text style={homestyles.fadedSeeAllText}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* actvity */}
                <FlatList
                    style={homestyles.activityList}
                    horizontal={true}
                    data={playlists}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <ActivityItem setSelectedPlaylist={setSelectedPlaylist} selectedPlaylist = {selectedPlaylist} playlist={true} item ={item}/>
                    )}
                    keyExtractor={item => item.index}
                />
            </View>
            <View style={homestyles.homeBlock}>
                <View style={homestyles.blockHeader}>
                    <Text style={[homestyles.blockHeaderText,{fontFamily:'Quicksand_500Medium',fontSize:22}]}>
                        Select Friends
                    </Text>
                    <TouchableOpacity>
                        <Text style={homestyles.fadedSeeAllText}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* actvity */}
                <FlatList
                    style={homestyles.activityList}
                    horizontal={true}
                    data={friends}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <SelectFriendBox item ={item}/>
                    )}
                    keyExtractor={item => item.index}
                />
            </View>
            <TouchableOpacity style={{width:WIDTH*.90,height:40,backgroundColor:colors.secondary,borderRadius:15,justifyContent:'center',marginTop:20}}>
                <LinearGradient
                    colors={[colors.primary, colors.primary]}
                    locations={[0, 0.9]}
                    style={{width:'100%',height:40,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Quicksand_600SemiBold',fontSize:18,color:'white',textAlign:'center'}}>
                        Share Playlist
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
     );
}
 
export default TransferScreen;