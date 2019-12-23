import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import NumberTextInput from './NumberTextInput';
import { inputStyle } from '../styles/style';

const FormLine = ({ label, value, valueUpdateCB }) => {
	// console.log('VALUE UPDATE CB IN FORM LINE ' + valueUpdateCB);
	// console.log('VALUE UPDATE CB IN FORM LINE ' + typeof valueUpdateCB);

	return (
		<View style={inputStyle.inputContainer}>
			<Text style={inputStyle.textContainer}>{label}</Text>
			<NumberTextInput
				label={label}
				value={value}
				valueUpdateCB={valueUpdateCB}
			/>
		</View>
	);
};

FormLine.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	valueUpdateCB: PropTypes.func.isRequired
};

export default FormLine;
