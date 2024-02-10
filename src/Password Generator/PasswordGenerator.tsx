import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Yup from "yup";
import { Formik } from "formik";

const PasswordGenerator: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState<any>();
  const [isLowerCaseChecked, setIsLowerCaseChecked] = useState<boolean>(true);
  const [isUppercaseChecked, setIsUppercaseChecked] = useState<boolean>(false);
  const [isNumericChecked, setIsNumericChecked] = useState<boolean>(false);
  const [isSpecialCharacterChecked, setIsSpacialCharacterChecked] =
    useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const validationSchema = Yup.object({
    passwordLength: Yup.number()
      .typeError("This field must be a number")
      .required("This field is required")
      .min(4, "Minimum Length is 4")
      .max(12, "Maximum Length is 12")
      .integer("password length must be interger")
      .positive("password length must be grater than positive"),
  });

  const generatePassword = () => {
    const numbers = "1234567890";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "!@#$%&";
    // const passwordLength = 12;

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      let randomSet = Math.floor(Math.random() * 4); // Randomly choose a character set
      // console.log(randomSet);
      switch (randomSet) {
        case 0:
          if (isLowerCaseChecked) {
            password += generateActualPassword(lowerCaseCharacters, 1);
          }
          break;
        case 1:
          if (isUppercaseChecked) {
            password += generateActualPassword(upperCaseCharacters, 1);
          }
          break;
        case 2:
          if (isNumericChecked) {
            password += generateActualPassword(numbers, 1);
          }
          break;
        case 3:
          if (isSpecialCharacterChecked) {
            password += generateActualPassword(specialCharacters, 1);
          }
          break;
      }
    }

    // Shuffle the password characters to ensure a random order
    password = password
      .split("")
      .sort(() => Math.random() - 1)
      .join("");

    setResult(password);
    // console.log("before sorting", password);
  };

  const generateActualPassword = (char: string, length: number): string => {
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * char.length);
      password += char[randomNum];
    }
    return password;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headertxt}>Password Generator</Text>
      </View>

      <View style={styles.passwordFieldContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.radioBtnTxt}>
            Enter password length you want :{" "}
          </Text>
          <Formik
            initialValues={{ passwordLength: 6 }}
            onSubmit={generatePassword}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
              <View>
                <TextInput
                  onChangeText={(txt) => setPasswordLength(txt)}
                  onBlur={handleBlur("passwordLength")}
                  placeholder="Ex.8"
                  style={styles.passwordField}
                  value={passwordLength}
                  keyboardType="numeric"
                />
                <Text style={{ color: "red" }}>{errors.passwordLength}</Text>
              </View>
            )}
          </Formik>
        </View>

        <View style={styles.radioBtnContainer}>
          <Text style={styles.radioBtnTxt}>
            Want To Inclued Lowercase Character :
          </Text>
          <BouncyCheckbox
            fillColor="#0073cf"
            onPress={(isChecked: boolean) => {
              setIsLowerCaseChecked(isChecked);
            }}
          />
        </View>
        <View style={styles.radioBtnContainer}>
          <Text style={styles.radioBtnTxt}>
            Want To Inclued Uppercase Character :
          </Text>
          <BouncyCheckbox
            fillColor="#0073cf"
            onPress={(isChecked: boolean) => {
              setIsUppercaseChecked(isChecked);
            }}
          />
        </View>
        <View style={styles.radioBtnContainer}>
          <Text style={styles.radioBtnTxt}>
            Want To Inclued Numeric Values :
          </Text>
          <BouncyCheckbox
            fillColor="#0073cf"
            onPress={(isChecked: boolean) => {
              setIsNumericChecked(isChecked);
            }}
          />
        </View>
        <View style={styles.radioBtnContainer}>
          <Text style={styles.radioBtnTxt}>
            Want To Inclued Special Character :
          </Text>
          <BouncyCheckbox
            fillColor="#0073cf"
            iconStyle={{ borderColor: "black" }}
            onPress={(isChecked: boolean) => {
              setIsSpacialCharacterChecked(isChecked);
            }}
          />
        </View>
      </View>

      <View style={styles.generateBtnContainer}>
        <TouchableOpacity onPress={generatePassword} style={styles.generateBtn}>
          <Text>Genereate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetBtn}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordGenerator;

// As we see in this component we see that there is no as such email property in interface but we are passing it from parent
// component and using this email so it is usable in component but it will warn us by red line.

// to fix this issue we can just pass the email property with its type.
