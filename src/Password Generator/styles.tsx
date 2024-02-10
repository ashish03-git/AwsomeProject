import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  headertxt: {
    fontSize: 34,
    color: "black",
    fontWeight: "700",
  },
  passwordFieldContainer: {
    flex: 5,
  },
  passwordField: {
    borderWidth: 1,
    color: "black",
    padding: 10,
    // margin: 10,
    width: 100,
    height: 50,
    borderRadius: 10,
    fontSize: 18,
  },
  radioBtnContainer: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
    // marginLeft: 20,
    alignItems: "center",
  },
  radioBtnTxt: {
    fontSize: 20,
    color: "black",
    fontWeight: "700",
    marginLeft: 10
  },
  generateBtnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  generateBtn: {
    width: 180,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  resetBtn: {
    width: 180,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});

export default styles;
