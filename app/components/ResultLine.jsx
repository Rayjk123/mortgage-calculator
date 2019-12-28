import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { totalStyle } from '../styles/style';
export const ResultLine = ({ label, value }) => {
	return (
		<View style={totalStyle.textContainer}>
			<Text style={totalStyle.textLabel}>{label}</Text>
			<Text style={totalStyle.numFont}>{value}</Text>
		</View>
	);
};

ResultLine.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};
