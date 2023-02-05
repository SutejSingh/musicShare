import { StyleSheet } from "react-native";
import colors from "./colors";

export const homestyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 90,
    },
    mainHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        padding:5
    },
    mainHeaderLeft:{
        flexDirection:'row',
        alignItems:"center"
    },
    mainHeaderRight: {  
        flexDirection:'row',
        alignItems:'center',
        marginRight:5
    },
    headerIcon:{
        width:34,
        height:34,
        marginHorizontal:5,
        tintColor:'rgba(60,60,60,0.75)',
    },
    titleText:{
        fontSize : 25,
        fontWeight : '600',
    },
    titleBlock:{
        width:'100%',
        alignItems:'flex-start',
        paddingLeft:13
    },
    homeBlock:{
        width:'100%',
        marginVertical:8,
        paddingHorizontal:13
    },
    blockHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    blockHeaderText:{
        fontWeight:'600',
        fontSize:16
    },
    fadedSeeAllText:{
        color:'rgba(60,60,60,0.75)',
        fontSize:14
    },
    // activity block
    activityList:{
        marginVertical:10,
    },
    activityItem:{
        height:240,
        width:210,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        overflow:'hidden',
        alignItems:'center',
        marginRight:10
    },
    activityArt:{
        width:'100%',
        height:'100%',
    },
    activityFriendImage:{
        width:30,
        height:30,
        borderRadius:20,
    },
    activityDescription:{
        position:'absolute',
        bottom:10,
        backgroundColor:'rgba(0,0,0,0.6)',
        borderRadius:18,
        width:'90%',
        alignItems:'center',
        height:38,
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    activityText:{
        color:'white',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    activitySongName:{
        color:'white',
        fontSize:11
    },
    activityFriendName:{
        color:'white',
        fontSize:11
    },
    // top songs
    twoTopSongsWrapper:{
        margin:5,
    },
    topSongWrapper:{
        flexDirection:'row',
        height:60,
        width:190,
        borderRadius:10,
        marginVertical:5,
        // add shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        alignItems:'center',
        paddingHorizontal:5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'rgba(248,248,248,1)',
    },
    topSongArt:{
        height:50,
        width:50,
        borderRadius:10,
    },
    topSongName:{
        fontSize:11,
        fontWeight:'900',
    }
  });
  