import React, { useState, useEffect } from "react";
import MainApp from "./MainApp";
import { routesNav } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashLoading(false);
    }, 4000);
  }, []);

  return (
    <Provider store={store}>
      <MainApp isSplashLoading={isSplashLoading} />
    </Provider>
  );
};

export default App;
