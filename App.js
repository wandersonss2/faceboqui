import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackScreens from "./src/stacks/AppStackScreens";

export default App = () => {
    
    return (
        <NavigationContainer>
            <AppStackScreens />
        </NavigationContainer>
    );
}