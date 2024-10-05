import { SafeAreaView } from "react-native-safe-area-context";
import { View } from 'react-native';
import MoviesContainer from "../containers/MoviesContainer";

const MoviesScreen = ({ navigation }) => {
  return (
    <View>
      <MoviesContainer navigation={navigation} width="100%" />
    </View>
  );
};

export default MoviesScreen;
