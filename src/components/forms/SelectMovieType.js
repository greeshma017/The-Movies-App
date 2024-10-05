import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
  ChevronDownIcon,
  View,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";

const SelectMovieType = ({ onInputChange, selectedCategory }) => {
    
  return (
    <View style={styles.container}>
      <Select
        value={selectedCategory}
        onValueChange={onInputChange}
        style={styles.selectContainer}
      >
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="now_playing" />
          <SelectIcon pr={30}>
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="popular" value="popular" />
            <SelectItem label="now_playing" value="now_playing" />
            <SelectItem label="top_rated" value="top_rated" />
            <SelectItem label="upcoming" value="upcoming" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  selectContainer: {
    width: "55%",
  },
});

export default SelectMovieType;
