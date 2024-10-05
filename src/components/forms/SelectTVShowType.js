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
    Box,
  } from "@gluestack-ui/themed";
  import { StyleSheet } from "react-native";
  
  const SelectMovieType = ({ onInputChange, selectedCategory }) => {
      
    return (
      <Box style={styles.container}>
        <Select
          value={selectedCategory}
          onValueChange={onInputChange}
          style={styles.selectContainer}
        >
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="popular" />
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
              <SelectItem label="airing_today" value="airing_today" />
              <SelectItem label="on_the_air" value="on_the_air" />
              <SelectItem label="popular" value="popular" />
              <SelectItem label="top_rated" value="top_rated" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </Box>
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
  