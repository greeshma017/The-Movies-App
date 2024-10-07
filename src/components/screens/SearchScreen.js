
import { View } from 'react-native';
import SearchContainer from "../containers/SearchContainer";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <SearchContainer navigation={navigation} />
    </View>
  );
};

export default SearchScreen;

