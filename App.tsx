import { View, Text } from "react-native";
import React from "react";
import Home from "./src/Home/Home";
import PasswordGenerator from "./src/Password Generator/PasswordGenerator";
import Redux_Ts from "./src/Redux_Ts/Redux_Ts";
import { Provider } from "react-redux";
import store from "./src/ReduxSetup/store";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <PasswordGenerator name="Ashish" age={22}  email="a@gmail.com"/> still work but with warning   */}

      {/* This is the correct code */}
      {/* <PasswordGenerator name="Ashish" age={22} />  */}

      {/* <PasswordGenerator /> */}

      <Provider store={store}>
        <Redux_Ts />
      </Provider>
    </View>
  );
};

export default App;

// First step is to import React and make the main App component of type React.FC

// as we see here is have given one extra attribute to passwordgenerator component which we have not described in the
// initial interface configuration in that component.
