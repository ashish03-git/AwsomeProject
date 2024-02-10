import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
  },
  top: {
    flex: 1,
  },
  top_one: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  top_one_city: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  top_one_date: {
    fontSize: 17,
    color: "white",
    fontWeight: "500",
  },
  top_two: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  top_two_Img: {
    width: "50%",
    height: "65%",
  },
  bottom: {
    flex: 1,
  },
  bottom_temperatureView: {
    flexDirection: "row",
    flex: 2,
  },
  bottom_temperatureView_one: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontSize: 160,
    fontWeight: "400",
    color: "white",
  },
  temperature_txt: {
    fontSize: 30,
    fontWeight: "400",
    color: "white",
  },
  celciusDot: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    borderRadius: responsiveWidth(2.5),
    borderWidth: responsiveWidth(1),
    borderColor: "white",
    position: "absolute",
    right: 10,
    top: 20,
  },
  bottom_temperatureView_two: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_temperature_details: {
    flex: 3,
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  listItem: {
    width: responsiveWidth(94),
    height: responsiveHeight(12),
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    borderRadius: responsiveWidth(2),
    flexDirection: "row",
    marginVertical: responsiveWidth(2),
    // elevation: 1,
  },
  listItem_details: {
    flex: 1,
  },
});

export default styles;
