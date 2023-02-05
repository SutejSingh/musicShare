import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

const FadeView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {  
    Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: props.duration || 200,
          useNativeDriver: true,
          easing: Easing.in()
        }
      ).start();
    },[])
    
    return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
}

export default FadeView;