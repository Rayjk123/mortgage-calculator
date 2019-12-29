import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import { numStyle } from '../styles/style';
import { formatValueDisplay } from '../util/numberFormat';
const NumberTextInput = ({ label, value, valueUpdateCB }) => {
	// console.log(label + " " + value + " @ " + valueUpdateCB);
	// Label = mortgage years, value = num, valueUpdateCB = function
	const any = 'any';
	const numeric = 'numeric';
	const done = 'done';
	const uE = 'unless-editing';

	function removeInputIfZero(label, value) {
		if (value === '0') {
			valueUpdateCB(label, '0');
		}
	}

	function checkIfBlank(label, value) {
		if (!value) {
			valueUpdateCB(label, null);
		}
	}

	return (
		<View style={numStyle.numContainer}>
			<TextInput
				onFocus={() => removeInputIfZero(label, value)}
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
