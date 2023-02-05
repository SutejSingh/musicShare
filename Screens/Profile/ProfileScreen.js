const ProfileScreen = ({route,navigation}) => {
    const user = route.params.user
    const me = route.params.user.username == global.user.username
    return ( 
        <View>
            
        </View>
     );
}
 
export default ProfileScreen;