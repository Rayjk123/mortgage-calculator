import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";
import { numStyle } from "../Styles/style";

const NumberTextInput = ({ label, value, valueUpdateCB }) => {
  //console.log(label + " " + value + " @ " + valueUpdateCB);
  //Label = mortgage years, value = num, valueUpdateCB = function
  function removeNonNumericValues(label, value, valueUpdateCB) {
    if (!value) return;

    const regexNotNumberOrDot = /[^0-9.]/g;
    const regexLeadingNumber = /^0+/;

    value.replace(regexNotNumberOrDot, "");
    value.replace(regexLeadingNumber, "");

    return valueUpdateCB(label, value);
  }

  return (
    <View style={numStyle.numContainer}>
      <TextInput
        style={numStyle.numFont}
        value={value.toString()}
        onChangeText={text =>
          removeNonNumericValues(label, text, valueUpdateCB)
        }
        keyboardType={"numeric"}
      />
    </View>
  );
};

NumberTextInput.propTypes = {
  value: PropTypes.number.isRequired,
  valueUpdateCB: PropTypes.func.isRequired
};

export default NumberTextInput;
