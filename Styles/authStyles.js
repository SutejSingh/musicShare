import { StyleSheet } from "react-native";
import colors from "./colors";

export const authStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
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
    logoTitleText: {
        color:'white',
        fontSize:40,
        fontWeight:'300',
        marginTop:10
    },
    authHeader:{
        width:"100%",
        marginTop:-120,
        alignItems: 'center',
    },
    boldTitleText:{
        color:'white',
        fontSize:32,
        fontWeight:'500',
    },
    subtitleText:{
        color:'white',
        fontSize:32,
        fontWeight:'300',
    },
    form:{
        marginTop:25,
        width:"80%",
    },
    label:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        marginTop:8
    },
    input: {
        width: "100%",
        padding: 16,
        borderRadius: 10,
        backgroundColor: colors.inputBackground,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: "solid",
        height: 40,
        marginTop: "3%",
        paddingVertical: 10,
        fontSize: 14,
    },
    button:{
        width: "100%",
        backgroundColor: 'white',
        alignItems:'center',
        borderRadius:10,
        justifyContent:'center',
        height: 40,
        fontSize: 14,
        marginTop:30
    },
    connectionButton:{
        width: 300,
        borderRadius: 10,
        backgroundColor: colors.inputBackground,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height: 45,
        fontSize: 14,
        marginTop:30
    },
    connectionButtonText:{
        color:'white',
    },
    buttonText:{
        fontSize:12,
        fontWeight:'bold',
    },
    formBottom:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        color:'white',
    },
    formTinyText:{
        color:'white',
        fontSize:13
    },
    boldTinyText:{
        color:'white',
        fontSize:13,
        fontWeight:'bold'
    },
    underline: {
        textDecorationLine: 'underline'
    },
    marginSpace:{
        marginTop: 50
    }
  });
  