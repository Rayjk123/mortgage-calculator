import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { numStyle } from '../styles/style';

const NumberTextInput = ({ label, value, valueUpdateCB }) => {
	// console.log(label + " " + value + " @ " + valueUpdateCB);
	// Label = mortgage years, value = num, valueUpdateCB = function
	const any = 'any';
	const numeric = 'numeric';
	const done = 'done';
	const uE = 'unless-editing';
	function removeNonNumericValues(label, value, valueUpdateCB) {
		if (!value) {
			value = '0';
		} else {
			const regexNotNumberOrDot = /[^0-9.]/g;
			const regexLeadingNumber = /^0+/;

			value = value.replace(regexNotNumberOrDot, '');
			value = value.replace(regexLeadingNumber, '');
		}
		return valueUpdateCB(label, value);
	}
  function clearInputOnZero(label, value){
    if(value === '0'){
      return valueUpdateCB(label, '0');
    }else{
      return;
    }
  }
  function checkIfBlank(label, value){
    if(!value){
      return valueUpdateCB(label, '');
    }
  }

	return (
		<View style={numStyle.numContainer}>
			<TextInput
        value={value}
        onFocus={() => clearInputOnZero(label, value)}
        onEndEditing={() => checkIfBlank(label, value)}
        style={numStyle.numFont}
				onChangeText={text => {
					removeNonNumericValues(label, text, valueUpdateCB);
				}}
				keyboardType={numeric}
				returnKeyType={done}
				clearButtonMode={uE}
			/>
		</View>
	);
};

NumberTextInput.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	valueUpdateCB: PropTypes.func.isRequired
};

export default NumberTextInput;
