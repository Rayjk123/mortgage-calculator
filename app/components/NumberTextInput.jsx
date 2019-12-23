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

	const formatValueDisplay = value => {
		if (!value) {
			return value;
    }

		const splitArray = value.split('.');
		if (splitArray.length > 1 && splitArray[1].length > 2) {
			return parseFloat(value)
				.toFixed(2)
				.toString()
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
		return value;
	};

	return (
		<View style={numStyle.numContainer}>
			<TextInput
        onFocus={() => clearInputOnZero(label, value)}
        onEndEditing={() => checkIfBlank(label, value)}
        style={numStyle.numFont}
				value={formatValueDisplay(value)}
				onChangeText={text => valueUpdateCB(label, text)}
				step={any}
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
