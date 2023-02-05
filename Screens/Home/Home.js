import { FlatList, Image, ScrollView, Text, View } from "react-native";
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

const Home = ({route,navigation}) => {
    var greeting = getGreeting();
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });
    // get data for differnet friends current songs
    const [activityData,setActivityData] = useState([
        {art:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6',songName:'Say You Won\'t Let Go',friend:'Abhinav',friendProfileImage:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6'},
        {art:'https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template.jpg',songName:'Say You Won\'t Let Go',friend:'Sean',friendProfileImage:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6'},
        {art:'https://i1.sndcdn.com/artworks-DvosdNeBgm9ZZ7gK-HT40tA-t500x500.jpg',songName:'Say You Won\'t Let Go',friend:'Linda',friendProfileImage:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6'}
    ]);
    const [hubTopSongs,setHubTopSongs] = useState([
        // cover arts images for songs urls
        {art:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfugDrYHDSZPDp3tx4ifHgkE1pBqKT8bPbyA&usqp=CAU',songName:'Say You \'t Let Go'},
        {art:'https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png',songName:'Say You Won\'t Let Go'},
        {art:'https://www.thisisdig.com/wp-content/uploads/2021/08/711Qhaw8GL._AC_SL1425_-e1628675623107.jpg',songName:'Say You \'t Let Go'},
        {art:'https://pbs.twimg.com/media/FPrttgEVEAASpXo?format=jpg&name=medium',songName:'Say You Won\'t Let Go'},
        {art:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6',songName:'Say You \'t Let Go'},
        {art:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6',songName:'Say You Won\'t Let Go'},
    ]);
    const [reccomendedSongs,setReccomendedSongs] = useState([
        // cover arts images for songs urls
        {art:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6',songName:'Say You \'t Let Go'},
        {art:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6',songName:'Say You \'t Let Go'},
        {art:'https://lastfm.freetls.fastly.net/i/u/ar0/11d0e48cd5bf5744e265ee620624f4e6',songName:'Say You \'t Let Go'},
    ])
    // group each two songs from hubtopsongs into one object and then add that object to a new array
    const [hubTopSongsGrouped,setHubTopSongsGrouped] = useState([]);

    useEffect(() => {
        var songs = []
        for(var i=0;i<hubTopSongs.length;i+=2){
            console.log(i)
            songs.push({song1:hubTopSongs[i],song2:hubTopSongs[i+1]});
        }
        setHubTopSongsGrouped(songs)
    },[])
    

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return ( 
        <SafeAreaView style={homestyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header navigation={navigation}/>
                <View style={homestyles.titleBlock}>
                    <Text style={[homestyles.titleText,{fontFamily:'Quicksand_700Bold'}]}>
                        Good {greeting}, {global.user.name}!
                    </Text>
                </View>
                <View style={homestyles.homeBlock}>
                    <View style={homestyles.blockHeader}>
                        <Text style={[homestyles.blockHeaderText,{fontFamily:'Quicksand_700Bold'}]}>
                            Friend Activity
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
                        data={activityData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                            <ActivityItem item ={item}/>
                        )}
                        keyExtractor={item => item.index}
                    />
                </View>
                <View style={homestyles.homeBlock}>
                    <View style={homestyles.blockHeader}>
                        <Text style={[homestyles.blockHeaderText,{fontFamily:'Quicksand_700Bold'}]}>
                            My Hub's Top Songs This Week
                        </Text>
                        <TouchableOpacity>
                            <Text style={homestyles.fadedSeeAllText}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/*  */}
                    <FlatList
                        style={homestyles.activityList}
                        horizontal={true}
                        data={hubTopSongsGrouped}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                            <TwoTopSongs item ={item}/>
                        )}
                        keyExtractor={(item,index) => index}
                    />
                </View>
                <View style={homestyles.homeBlock}>
                    <View style={homestyles.blockHeader}>
                        <Text style={[homestyles.blockHeaderText,{fontFamily:'Quicksand_700Bold'}]}>
                            Hub's Reccomendation
                        </Text>
                        <TouchableOpacity>
                            <Text style={homestyles.fadedSeeAllText}>
                                See All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/*  */}
                    <FlatList
                        style={homestyles.activityList}
                        horizontal={true}
                        data={reccomendedSongs}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                            <ActivityItem reccommend={true} item ={item}/>
                        )}
                        keyExtractor={(item,index) => index}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
     );
}

export default Home;