import React from 'react';
import { totalStyle } from '../Styles/style';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const TotalContainer = ({ label, value }) => {
	return (
		<View style={totalStyle.container}>
			<Text style={totalStyle.textLabel}>{label}</Text>
			<Text style={totalStyle.numFont}>{value.toString()}</Text>
		</View>
	);
};

TotalContainer.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};

export default TotalContainer;
