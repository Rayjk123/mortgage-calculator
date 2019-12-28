import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { totalStyle } from '../styles/style';

const ButtonLine = ({ title, func }) => {
	return (
		<View style={totalStyle.textContainer}>
			<TouchableOpacity onPress={func} style={totalStyle.button}>
				<Text style={totalStyle.buttonText}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};
ButtonLine.propTypes = {
	title: PropTypes.string.isRequired,
	func: PropTypes.func.isRequired
};

export default ButtonLine;
