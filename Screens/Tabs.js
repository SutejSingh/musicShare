import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from "../Styles/colors";
import Home from "./Home/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TransferScreen from "./Transfer/TransferScreen";
import FriendScreen from "./Friends/FriendScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const user = {name: 'John Doe'}
    return ( 
        <Tab.Navigator
            unmountOnBlur={false}
            screenOptions={{
                headerShown: false,
                keyboardHidesTabBar: true,
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarActiveTintColor: colors.primary,
                "tabBarStyle": [
                    {
                        height: 800 / 11,
                        "display": "flex",
                        backgroundColor: colors.inputBackground,
                        borderTopWidth: 1,
                        paddingVertical: 15
                    }
                ]
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home-variant" size={size} color={color} />),
                }} initialParams={{ user: user }} />
            <Tab.Screen name="Transfer" component={TransferScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="transfer" size={size} color={color} />),
                }} initialParams={{ user: user }} />
             <Tab.Screen name="Friends" component={FriendScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" size={size} color={color} />),
                }} initialParams={{ user: user }} />    
        </Tab.Navigator>
     );
}
 
export default Tabs;