import { Text, View } from "react-native";
import React, { Component } from "react";

interface Myprops {
  name: string;
  email: string;
  age: number;
}

interface Mystate {
  counter: number;
}

// similar to functinal component it will accept the props which have Myprops type 
export class ClassComponent extends Component<Myprops, Mystate> {
  render() {
    return (
      <View>
        <Text>Name:{this.props.name}</Text>
        <Text>Name:{this.props.email}</Text>
        <Text>Name:{this.props.age}</Text>
      </View>
    );
  }
}

export default ClassComponent;
