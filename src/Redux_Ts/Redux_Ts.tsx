import { View, FlatList } from "react-native";
import React, {
  FunctionComponent,
  ReactElement,
  useRef,
  useState,
} from "react";
import styles from "./styles";
import { addNotes, noteSelector } from "../ReduxSetup/slice";
import { Input, Button, Text } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useCustomDispatch,
  useCustomSelector,
} from "../ReduxSetup/customHooks";

interface ListItemsType {
  heading: string;
  description: string;
}

const Redux_Ts: FunctionComponent = (): ReactElement => {
  const [heading, setHeading] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useCustomDispatch();
  // this will get all the data that we have added into the redux store
  const notes = useCustomSelector(noteSelector);
  const headingRef = useRef<null>(null);
  const descriptionRef = useRef<null>(null);

  const handleAddNotes = () => {
    if (heading.length > 0 && description.length > 0) {
      dispatch(addNotes({ heading, description }));
      setHeading("");
      setDescription("");
    } else {
      if (description.length === 0 && heading.length === 0) {
        descriptionRef.current?.shake();
        headingRef.current?.shake();
        return;
      } else if (description.length === 0) {
        descriptionRef.current?.shake();
        return;
      } else if (heading.length === 0) {
        headingRef.current?.shake();
        return;
      }
    }

    // this is used to shake input field when it is wrong as we usually see
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text h2 style={styles.headingTxt}>
        Notes
      </Text>
      <View style={styles.notesContainer}>
        <Input
          ref={headingRef}
          //   errorMessage="this field cannot be empty"
          //   errorStyle={{ fontSize: 16 }}
          placeholder="Enter Heading To Your Notes"
          label="Heading"
          labelStyle={{ color: "black" }}
          value={heading}
          onChangeText={(text) => setHeading(text)}
          leftIcon={{
            name: "pencil",
            type: "font-awesome",
            size: 20,
            color: "gray",
          }}
        />
        <Input
          ref={descriptionRef}
          //   errorMessage="this field cannot be empty"
          //   errorStyle={{ fontSize: 16 }}
          placeholder="Enter Description To Your Notes"
          label="Description"
          labelStyle={{ color: "black" }}
          value={description}
          onChangeText={(text) => setDescription(text)}
          leftIcon={{
            name: "pencil",
            type: "font-awesome",
            size: 20,
            color: "gray",
          }}
        />

        <Button
          // containerStyle={{height:50}}
          buttonStyle={{ height: 50 }}
          title={"Add Notes"}
          color={"secondary"}
          radius={"sm"}
          raised={true}
          onPress={handleAddNotes}
        />
      </View>
      <View style={styles.listContainer}>
        <Text h4 h4Style={{marginVertical: 10,marginHorizontal:10 }}>My Notes:</Text>
        <FlatList
          data={notes}
          renderItem={({ item }: { item: ListItemsType }) => {
            return (
              <View style={styles.listItemContainer}>
                <Text
                  h4
                  h4Style={{ fontSize: 20, color: "black", marginVertical: 10 }}
                >
                  {item.heading}
                </Text>
                <Text h4 h4Style={{ fontSize: 16, color: "black" }}>
                  {item.description}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Redux_Ts;

{
  /* <Input
        // containerStyle={{ backgroundColor: "skyblue" }}
        inputContainerStyle={{borderRadius:10,borderWidth:1,borderColor:"black"}}
        placeholder="Enter your name"
        label="Add Heading"
        leftIcon={{
          name: "user",
          type: "font-awesome",
          color: "red",
        }}
        leftIconContainerStyle={{ margin: 10 }}
      /> */
}
{
  /* <Button radius={"sm"} color={"success"} size={"lg"} title={"Submit"} /> */
}
{
  /* <Button
        title={"Home"}
        radius={"md"}
        icon={{
          name: "home",
          size: 20,
          type: "font-awesome",
          color: "white",
        }}
        iconContainerStyle={{marginRight:10}}
        titleStyle={{fontWeight:"700"}}
        color={"primary"}
      /> */
}
