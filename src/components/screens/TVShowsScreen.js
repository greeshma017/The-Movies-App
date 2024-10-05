
import { View } from 'react-native';
import TVShowsContainer from "../containers/TVShowsContainer";

const TVShowsScreen = ({ navigation }) => {
  return (
    <View>
      <TVShowsContainer navigation={navigation} />
    </View>
  );
};

export default TVShowsScreen;
