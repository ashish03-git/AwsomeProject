import { View, Text } from "react-native";
import React, { FunctionComponent, ReactElement } from "react";

interface Myprops {
  name: string;
  email: string;
  age: number;
}


// in below line we are declaring this function as functional component and with Myprops interface which is accepting props of 
// type Myprops in the function and will return ReactElement because it is returning a ReactElement. so it is not a normal function.
const Component_Defination: FunctionComponent<Myprops> = (
  props: Myprops
): ReactElement => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Email: {props.email}</Text>
      <Text>Age: {props.age}</Text>
    </View>
  );
};

export default Component_Defination;
