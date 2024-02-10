import { View, Text, Image, FlatList, StatusBar } from "react-native";
import React from "react";
import styles from "./styles";

const Home = () => {
  const data = new Array(5);
  // console.log(data);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" /> 
      <View style={styles.top}>
        <View style={styles.top_one}>
          <Text style={styles.top_one_city}>Indore</Text>
          <Text style={styles.top_one_date}>12/12/12</Text>
        </View>
        <View style={styles.top_two}>
          <Image
            source={require("../../assets/sun.png")}
            style={styles.top_two_Img}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom_temperatureView}>
          <View style={styles.bottom_temperatureView_one}>
            <View style={styles.celciusDot}></View>
            <Text style={styles.temperature}>30</Text>
          </View>
          <View style={styles.bottom_temperatureView_two}>
            <Text style={styles.temperature_txt}>Humid and mostly cloudy</Text>
          </View>
        </View>
        <View style={styles.bottom_temperature_details}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.listItem}>
                  <View style={styles.listItem_details}></View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
