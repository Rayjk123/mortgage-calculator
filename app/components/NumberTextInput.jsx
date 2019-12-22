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
			value = 0;
		} else {
			const regexNotNumberOrDot = /[^0-9.]/g;
			const regexLeadingNumber = /^0+/;

			value = value.replace(regexNotNumberOrDot, '');
			value = value.replace(regexLeadingNumber, '');
		}
		return valueUpdateCB(label, value);
	}
	return (
		<View style={numStyle.numContainer}>
			<TextInput
				style={numStyle.numFont}
				value={value.toString()}
				onChangeText={text => {
					removeNonNumericValues(label, text, valueUpdateCB);
				}}
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
	value: PropTypes.number.isRequired,
	valueUpdateCB: PropTypes.func.isRequired
};

export default NumberTextInput;
