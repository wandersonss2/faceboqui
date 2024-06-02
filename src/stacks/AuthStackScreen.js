import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignScreen from "../screens/SignScreen";
import SignUpScreen from "../screens/SignUpScreen";

export default AuthStackScreens = () => {

    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            <AuthStack.Screen name="Sign" component={SignScreen} />

        </AuthStack.Navigator>
    );
}