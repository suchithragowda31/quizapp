import { useFonts } from "expo-font";
const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
    "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }