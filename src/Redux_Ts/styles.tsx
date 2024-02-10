import { StyleSheet } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems:"center"
  },
  notesContainer: {
    flex:1,
    padding: 10,
    paddingTop: 50,
  },
  headingTxt: {
    alignSelf: "center",
  },
  listContainer:{
    flex:2,
    // backgroundColor:"red"
  },
  listItemContainer:{
    width:responsiveScreenWidth(90),
    height:responsiveScreenHeight(10),
    borderRadius:responsiveScreenWidth(2),
    borderWidth:1,
    borderColor:"red",
    alignSelf:"center",
    marginVertical:responsiveScreenWidth(4)
  }
});

export default styles;
