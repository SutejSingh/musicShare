import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    justifyContent: "flex-end",
    marginVertical: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  input: {
    fontSize: 18,
    flex: 1,
    marginBottom: 30,
    height: 20+ 4
  },
  bodyContent: {
    borderBottomColor: "black",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  toucheableLineContent: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  label: {
    fontSize: 13,
    paddingBottom: 7,
    color: "#606060",
    fontWeight: "600",
  },
  error: {
    marginBottom: 5,
    color: "#d32f2f",
    fontSize: 13,
    marginTop: 2,
  },
  sufix: {
    flexDirection: "column-reverse",
  },
  friendBox:{
    margin: 10,
    width: '95%',
    height: 78,
    borderWidth: 5,
    backgroundColor: 'white',
    borderColor:'white',
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    alignItems:'center',
    borderStyle: "solid",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  friendBoxContent:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      padding:5 
  },
  friendBoxText:{
    fontSize: 18, 
  },
  friendTabBar:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    width: 410,
    height: 35,
    borderWidth: 1,
    borderRadius: 14,
  },
  friendTabBarContent:{
    height: 43,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "3%",
    marginTop: "3%"
  },
  tabSelector:{
    backgroundColor: 'white',
    height: 43,
    borderRadius: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "3%",
    marginTop: "3%",
    marginHorizontal:7
  },
  friendTabBarOnTab:{
    paddingLeft: 4,
    paddingRight: 4,
    height: 20,
    borderRadius: 14,
    backgroundColor: 'white',
    flexDirection:'row'
  },
  gradientBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
  },
  friendBoxContentLeft:{
    flexDirection:'row',
    alignItems:"center"
  },
  friendBoxContentRight:{
    alignItems:"center"
  },
  friendBoxButton:{
    paddingLeft: 4,
    paddingRight: 4,
    height: 20,
    borderRadius: 14,
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:"center",
  },
  friendBoxCol:{
    alignItems:"center", 
    marginTop: 8,
  },
  friendBoxRow:{
    flexDirection:'row',
    alignItems:"center", 
    marginTop: 8,
  },
  friendAppleButton:{
   color:('rgba(249, 76, 87, 0.95)'),
   fontSize: 8,
   margin: 2,
  },
  friendSpotifyButton:{
    color: '#1DB954',
    fontSize: 8,
    margin: 2,
  }
});
