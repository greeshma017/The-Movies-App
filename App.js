import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider, StatusBar } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import AppStack from "./src/components/stacks/AppStack";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <GluestackUIProvider config={config}>
          <AppStack />
          <StatusBar />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App