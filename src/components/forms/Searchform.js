import {
  FormControl,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  VStack,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
  Button,
  ButtonIcon,
  ButtonText,
  SearchIcon,
  View,
  SelectIcon,
  ChevronDownIcon
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const SearchForm = ({
  keyword,
  setKeyword,
  category,
  handleSearchCategoryChange,
  handleSearch,
}) => {
  return (
    <View style={styles.container}>
      <VStack>
        <FormControl isRequired>
          <FormControl.Label fontSize="sm">
            <FormControlLabelText>
              Search Movie/TV Show Name
            </FormControlLabelText>
          </FormControl.Label>
          <Input>
            <InputField
              placeholder="i.e. James Bond, CSI"
              value={keyword}
              onChangeText={(text) => {
                setKeyword(text);
              }}
            />
          </Input>
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label fontSize="sm">
            <FormControlLabelText>Choose SearchType</FormControlLabelText>
          </FormControl.Label>
          <HStack>
            <Select
              value={category}
              onValueChange={handleSearchCategoryChange}
              style={styles.select}
            >
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon style={styles.selectIcon}>
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="movie" value="movie" />
                  <SelectItem label="tv" value="tv" />
                  <SelectItem label="multi" value="multi" />
                </SelectContent>
              </SelectPortal>
            </Select>
            <Button
              onPress={handleSearch}
              style={[styles.button]}
            >
              <ButtonIcon as={SearchIcon} mr="$2" />
              <ButtonText>Search</ButtonText>
            </Button>
          </HStack>
        </FormControl>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  select: {
    flex: 1,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#00bcd5",
  },
  selectIcon: {
    marginRight: 10
},
});

export default SearchForm;
